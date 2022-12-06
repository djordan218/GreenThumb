'use strict';

/** Routes for crops. */

const express = require('express');
const Crop = require('../models/crop');

const router = express.Router({ mergeParams: true });

// POST /crops
router.post('/', async function (req, res, next) {
  try {
    const crop = await Crop.create(req.body);
    return res.status(201).json({ crop });
  } catch (err) {
    return next(err);
  }
});

// GET /crops
// can only be done by logged in users
router.get('/', async function (req, res, next) {
  try {
    const q = req.query;
    const crops = await Crop.findAll(q);
    return res.json({ crops });
  } catch (err) {
    return next(err);
  }
});

// GET /crops/:id
router.get('/:id', async function (req, res, next) {
  try {
    const crop = await Crop.get(req.params.id);
    return res.json({ crop });
  } catch (err) {
    return next(err);
  }
});

// PATCH /crops/:id
router.patch('/:id', async function (req, res, next) {
  try {
    const crop = await Crop.update(req.params.id, req.body);
    return res.json({ crop });
  } catch (err) {
    return next(err);
  }
});

// DELETE /crops/:id
router.delete('/:id', async function (req, res, next) {
  try {
    await Crop.delete(req.params.id);
    return res.json({ deleted: +req.params.id });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
