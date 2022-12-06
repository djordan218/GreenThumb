'use strict';
const db = require('../db');
const { NotFoundError } = require('../expressError');
const { sqlForPartialUpdate } = require('../helpers/sql');

class Crop {
  // Create a crop (from data), update db, return new job data.
  // data should be { name, days_to_germ, days_to_harvest, when_to_harvest, img, user_id}
  // Returns { name, days_to_germ, days_to_harvest, when_to_harvest, img, user_id }
  static async create(data) {
    const result = await db.query(
      `INSERT INTO crops (name,
                             description,
                             days_to_germ,
                             days_to_harvest,
                             when_to_harvest,
                             img,
                             user_id)
           VALUES ($1, $2, $3, $4, $5, $6, $7)
           RETURNING id, name, description, days_to_germ, days_to_harvest, when_to_harvest, img, user_id`,
      [
        data.name,
        data.description,
        data.days_to_germ,
        data.days_to_harvest,
        data.when_to_harvest,
        data.img,
        data.user_id,
      ]
    );
    let crop = result.rows[0];

    return crop;
  }

  //  Find all crops.
  //  searchFilters (optional): - name (will find case-insensitive, partial matches)
  //  Returns { id, name, description, days_to_germ, days_to_harvest, when_to_harvest, img, user_id } in alphabetical order
  static async findAll({ name } = {}) {
    let query = `SELECT c.id,
                        c.name,
                        c.description,
                        c.days_to_germ,
                        c.days_to_harvest,
                        c.when_to_harvest,
                        c.img,
                        c.user_id
                 FROM crops c`;
    let whereExpressions = [];
    let queryValues = [];

    if (name !== undefined) {
      queryValues.push(`%${name}%`);
      whereExpressions.push(`name ILIKE $${queryValues.length}`);
    }

    if (whereExpressions.length > 0) {
      query += ' WHERE ' + whereExpressions.join(' AND ');
    }

    query += ' ORDER BY name';
    const cropsRes = await db.query(query, queryValues);
    return cropsRes.rows;
  }

  // Given a crop id, return all data about crop.
  // Returns { id, name, description, days_to_germ, days_to_harvest, when_to_harvest, img, user_id }
  // Throws NotFoundError if not found.
  static async get(id) {
    const cropRes = await db.query(
      `SELECT *
           FROM crops
           WHERE id = $1`,
      [id]
    );
    const crop = cropRes.rows[0];
    if (!crop)
      throw new NotFoundError(`Sorry! Ain't got no crop with id of ${id}!`);
    return crop;
  }

  //  Update crop data with `data`.
  //   This is a "partial update" --- it's fine if data doesn't contain
  //   all the fields; this only changes provided ones.
  //   Data can include: { name, description, days_to_germ, days_to_harvest, when_to_harvest, img }
  //   Returns { id, name, description, days_to_germ, days_to_harvest, when_to_harvest, img, user_id }
  //   Throws NotFoundError if not found.
  static async update(id, data) {
    const { setCols, values } = sqlForPartialUpdate(data, {});
    const idVarIdx = '$' + (values.length + 1);

    const querySql = `UPDATE crops 
                      SET ${setCols} 
                      WHERE id = ${idVarIdx} 
                      RETURNING id, 
                                name, 
                                description, 
                                days_to_germ,
                                days_to_harvest,
                                when_to_harvest,
                                img,
                                user_id`;
    const result = await db.query(querySql, [...values, id]);
    const crop = result.rows[0];

    if (!crop) throw new NotFoundError(`No crop with id of ${id}.`);

    return crop;
  }

  // Delete given crop from database; returns undefined.
  // Throws NotFoundError if company not found.
  static async delete(id) {
    const result = await db.query(
      `DELETE
           FROM crops
           WHERE id = $1
           RETURNING id, name`,
      [id]
    );
    const crop = result.rows[0];

    if (!crop) throw new NotFoundError(`No crop with id of ${id}.`);
  }
}

module.exports = Crop;
