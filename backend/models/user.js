'use strict';

const db = require('../db');
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');
const { sqlForPartialUpdate } = require('../helpers/sql');
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require('../expressError');

const { BCRYPT_WORK_FACTOR } = require('../config.js');

/** Related functions for users. */

class User {
  // authenticate a user
  static async authenticate(username, password) {
    // try to find the user first
    const result = await db.query(
      `SELECT username,
                  password,
                  zone,
                  email,
                  is_admin
           FROM users
           WHERE username = $1`,
      [username]
    );

    const user = result.rows[0];

    if (user) {
      // compare hashed password to a new hash from password
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid === true) {
        delete user.password;
        return user;
      }
    }

    throw new UnauthorizedError('Invalid username/password');
  }

  // registering user with form data
  static async register({ username, password, zone, email, is_admin }) {
    const duplicateCheck = await db.query(
      `SELECT username
           FROM users
           WHERE username = $1`,
      [username]
    );

    if (duplicateCheck.rows[0]) {
      throw new BadRequestError(`Duplicate username: ${username}`);
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const result = await db.query(
      `INSERT INTO users
           (username,
            password,
            zone,
            email,
            is_admin)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING username, zone, email, is_admin`,
      [username, hashedPassword, zone, email, is_admin]
    );

    const user = result.rows[0];

    return user;
  }

  // finding all users, only available in backend
  static async findAll() {
    const result = await db.query(
      `SELECT id,
                  username,
                  zone,
                  email,
                  is_admin
           FROM users
           ORDER BY id`
    );

    return result.rows;
  }

  // getting single user
  // returns users saved_crops
  static async get(username) {
    const userRes = await db.query(
      `SELECT id, 
                  username,
                  zone,
                  email,
                  is_admin
           FROM users
           WHERE username = $1`,
      [username]
    );

    const userId = userRes.rows[0].id;

    const savedCropsRes = await db.query(
      `SELECT crop_id FROM saved_crops WHERE user_id = $1 ORDER BY crop_id`,
      [userId]
    );
    const saved_crops = savedCropsRes.rows;
    let cropArr = saved_crops.map(({ crop_id }) => {
      return crop_id;
    });
    const user = userRes.rows[0];
    user.saved_crops = cropArr;

    if (!user)
      throw new NotFoundError(
        `We got a problem. ${username} does not exist to me.`
      );

    return user;
  }

  // updating a user
  static async update(username, data) {
    console.log(username, data);
    if (data.password) {
      data.password = await bcrypt.hash(data.password, BCRYPT_WORK_FACTOR);
    }

    const { setCols, values } = sqlForPartialUpdate(data, {
      username: 'username',
      zone: 'zone',
      email: 'email',
      is_admin: 'is_admin',
    });
    const usernameVarIdx = '$' + (values.length + 1);

    const querySql = `UPDATE users 
                      SET ${setCols} 
                      WHERE username = ${usernameVarIdx} 
                      RETURNING username,
                                zone,
                                email,
                                is_admin`;
    const result = await db.query(querySql, [...values, username]);
    const user = result.rows[0];

    if (!user) throw new NotFoundError(`No user: ${username}`);

    delete user.password;
    return user;
  }

  // deleting a user
  static async delete(username) {
    let result = await db.query(
      `DELETE
           FROM users
           WHERE username = $1
           RETURNING username`,
      [username]
    );
    const user = result.rows[0];

    if (!user) throw new NotFoundError(`No user: ${username}`);
  }

  // add crop to database, store user that created the crop so they can delete/edit it later on
  static async addCropToDB(userId, data) {
    const userCheck = await db.query(
      `SELECT id
           FROM users
           WHERE id = $1`,
      [userId]
    );
    const user = userCheck.rows[0];

    if (!user) throw new NotFoundError(`No username: ${userId}`);

    await db.query(
      `INSERT INTO crops (name, description, days_to_germ, days_to_harvest, when_to_harvest, img, user_id)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        data.name,
        data.description,
        data.days_to_germ,
        data.days_to_harvest,
        data.when_to_harvest,
        data.img,
        userId,
      ]
    );
  }

  // add crop to a user's garden
  // checks for crop and user for verification
  static async addCropToGarden(userId, cropId) {
    const cropCheck = await db.query(
      `SELECT id
           FROM crops
           WHERE id = $1`,
      [cropId]
    );
    const crop = cropCheck.rows[0];

    if (!crop) throw new NotFoundError(`No crop: ${cropId}`);

    const userCheck = await db.query(
      `SELECT id
           FROM users
           WHERE id = $1`,
      [userId]
    );
    const user = userCheck.rows[0];

    if (!user) throw new NotFoundError(`No username: ${username}`);

    await db.query(
      `INSERT INTO saved_crops (user_id, crop_id)
           VALUES ($1, $2)`,
      [userId, cropId]
    );
  }

  // deleting a crop from the DB
  // can only be done by an admin/user who created it
  static async deleteCropFromDB(cropId) {
    const cropCheck = await db.query(
      `SELECT id
           FROM crops
           WHERE id = $1`,
      [cropId]
    );
    const crop = cropCheck.rows[0];

    if (!crop) throw new NotFoundError(`No crop: ${cropId}`);

    let result = await db.query(
      `DELETE
           FROM crops
           WHERE id = $1`,
      [cropId]
    );
    return result;
  }

  // editing crop
  static async editCropInDB(userId, cropId, data) {
    const cropCheck = await db.query(
      `SELECT id
           FROM crops
           WHERE id = $1`,
      [cropId]
    );
    const crop = cropCheck.rows[0];

    if (!crop) throw new NotFoundError(`No crop: ${cropId}`);

    let result = await db.query(
      `UPDATE crops
      SET name = $2, description = $3, days_to_germ = $4, days_to_harvest = $5, when_to_harvest = $6, img = $7, user_id = $8
           WHERE id = $1`,
      [
        cropId,
        data.name,
        data.description,
        data.days_to_germ,
        data.days_to_harvest,
        data.when_to_harvest,
        data.img,
        userId,
      ]
    );
    console.log('done');
    return result;
  }

  // removing a crop from a user's garden
  static async removeUserCropFromGarden(userId, cropId) {
    const cropCheck = await db.query(
      `SELECT id
           FROM crops
           WHERE id = $1`,
      [cropId]
    );
    const crop = cropCheck.rows[0];

    if (!crop) throw new NotFoundError(`No crop: ${cropId}`);

    const userCheck = await db.query(
      `SELECT id
           FROM users
           WHERE id = $1`,
      [userId]
    );
    const user = userCheck.rows[0];

    if (!user) throw new NotFoundError(`No username: ${username}`);

    let result = await db.query(
      `DELETE
           FROM saved_crops
           WHERE user_id = $1
           AND crop_id = $2`,
      [userId, cropId]
    );
    return result;
  }
}

module.exports = User;
