'use strict';

/** Routes for crops. */

const jsonschema = require('jsonschema');

const express = require('express');
const { BadRequestError } = require('../expressError');
const { ensureAdmin } = require('../middleware/auth');
const Crop = require('../models/crop');
// const jobNewSchema = require('../schemas/jobNew.json');
// const jobUpdateSchema = require('../schemas/jobUpdate.json');
// const jobSearchSchema = require('../schemas/jobSearch.json');

const router = express.Router({ mergeParams: true });

/** POST / { job } => { job }
 *
 * job should be { title, salary, equity, companyHandle }
 *
 * Returns { id, title, salary, equity, companyHandle }
 *
 * Authorization required: admin
 */

router.post('/', async function (req, res, next) {
  const crop = await Crop.create(req.body);
  return res.status(201).json({ crop });
  // try {
  //   const validator = jsonschema.validate(req.body, jobNewSchema);
  //   if (!validator.valid) {
  //     const errs = validator.errors.map((e) => e.stack);
  //     throw new BadRequestError(errs);
  //   }

  //   const job = await Crop.create(req.body);
  //   return res.status(201).json({ job });
  // } catch (err) {
  //   return next(err);
  // }
});

/** GET / =>
 *   { jobs: [ { id, title, salary, equity, companyHandle, companyName }, ...] }
 *
 * Can provide search filter in query:
 * - minSalary
 * - hasEquity (true returns only jobs with equity > 0, other values ignored)
 * - title (will find case-insensitive, partial matches)

 * Authorization required: none
 */

router.get('/', async function (req, res, next) {
  const q = req.query;
  const crops = await Crop.findAll(q);
  return res.json({ crops });

  // try {
  //   const validator = jsonschema.validate(q, jobSearchSchema);
  //   if (!validator.valid) {
  //     const errs = validator.errors.map(e => e.stack);
  //     throw new BadRequestError(errs);
  //   }

  //   const crops = await Crop.findAll(q);
  //   return res.json({ crops });
  // } catch (err) {
  //   return next(err);
  // }
});

/** GET /[jobId] => { job }
 *
 * Returns { id, title, salary, equity, company }
 *   where company is { handle, name, description, numEmployees, logoUrl }
 *
 * Authorization required: none
 */

router.get('/:id', async function (req, res, next) {
  try {
    const crop = await Crop.get(req.params.id);
    return res.json({ crop });
  } catch (err) {
    return next(err);
  }
});

// PATCH /[cropId]  { fld1, fld2, ... } => { crop }
//  Data can include: { name, description, days_to_germ, days_to_harvest, when_to_harvest, img }
//   Returns { id, name, description, days_to_germ, days_to_harvest, when_to_harvest, img, user_id }
router.patch('/:id', async function (req, res, next) {
  const crop = await Crop.update(req.params.id, req.body);
  return res.json({ crop });
  // try {
  //   const validator = jsonschema.validate(req.body, jobUpdateSchema);
  //   if (!validator.valid) {
  //     const errs = validator.errors.map((e) => e.stack);
  //     throw new BadRequestError(errs);
  //   }

  //   const crop = await Crop.update(req.params.id, req.body);
  //   return res.json({ crop });
  // } catch (err) {
  //   return next(err);
  // }
});

/** DELETE /[handle]  =>  { deleted: id }
 *
 * Authorization required: admin
 */

router.delete('/:id', async function (req, res, next) {
  try {
    await Crop.delete(req.params.id);
    return res.json({ deleted: +req.params.id });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
