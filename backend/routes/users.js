'use strict';

/** Routes for users. */

const jsonschema = require('jsonschema');

const express = require('express');
const { ensureCorrectUserOrAdmin, ensureAdmin } = require('../middleware/auth');
const { BadRequestError } = require('../expressError');
const User = require('../models/user');
const { createToken } = require('../helpers/tokens');

const router = express.Router();

/** POST / { user }  => { user, token }
 *
 * Adds a new user. This is not the registration endpoint --- instead, this is
 * only for admin users to add new users. The new user being added can be an
 * admin.
 *
 * This returns the newly created user and an authentication token for them:
 *  {user: { username, firstName, lastName, email, isAdmin }, token }
 *
 * Authorization required: admin
 **/

router.post('/', ensureAdmin, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, userNewSchema);
    if (!validator.valid) {
      const errs = validator.errors.map((e) => e.stack);
      throw new BadRequestError(errs);
    }

    const user = await User.register(req.body);
    const token = createToken(user);
    return res.status(201).json({ user, token });
  } catch (err) {
    return next(err);
  }
});

// get all users
// not available in front end
router.get('/', async function (req, res, next) {
  try {
    const users = await User.findAll();
    return res.json({ users });
  } catch (err) {
    return next(err);
  }
});

// get a specific user
// not available in front end
router.get('/:username', async function (req, res, next) {
  try {
    const user = await User.get(req.params.username);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

// edit a user
router.patch('/:username', async function (req, res, next) {
  try {
    const user = await User.update(req.params.username, req.body);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

// delete user
router.delete('/:username', async function (req, res, next) {
  try {
    await User.delete(req.params.username);
    return res.json({ deleted: req.params.username });
  } catch (err) {
    return next(err);
  }
});

// add a crop to a user's garden
router.post('/:userId/crops/:id', async function (req, res, next) {
  try {
    console.log('add crop to garden', req.params);
    const cropId = +req.params.id;
    const userId = +req.params.userId;
    await User.addCropToGarden(userId, cropId);
    return res.json({ applied: cropId });
  } catch (err) {
    return next(err);
  }
});

// add crop to the database
router.post('/crops/add', async function (req, res, next) {
  try {
    const crop = req.body.data;
    const userId = req.body.userId;
    let result = await User.addCropToDB(userId, crop);
    return res.json('added crop');
  } catch (err) {
    return next(err);
  }
});

// edit a crop in the database
// can only be done by an admin or user that created the crop
router.patch('/crops/edit/:id', async function (req, res, next) {
  try {
    const userId = +req.body.userId;
    const crop = req.body.data;
    const cropId = +req.params.id;
    console.log(userId, crop, cropId);
    const result = await User.editCropInDB(userId, cropId, crop);
    return res.json({ result });
  } catch (err) {
    return next(err);
  }
});

// delete crop from the DB
router.post('/crops/delete/:id', async function (req, res, next) {
  try {
    console.log('crop/delete/id');
    const cropId = +req.params.id;
    let result = await User.deleteCropFromDB(cropId);
    return res.json({ 'crop deleted': cropId });
  } catch (err) {
    return next(err);
  }
});

// Remove crops that are in user's garden
router.post('/:userId/crops/:id/remove', async function (req, res, next) {
  try {
    const userId = +req.params.userId;
    const cropId = +req.params.id;
    let result = await User.removeUserCropFromGarden(userId, cropId);
    return res.json({ 'removed from garden': cropId });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
