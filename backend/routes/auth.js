'use strict';

// authentication routes
const User = require('../models/user');
const express = require('express');
const router = new express.Router();
const { createToken } = require('../helpers/tokens');

// POST /auth/token
// sends back JWT token
router.post('/token', async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.authenticate(username, password);
    const token = createToken(user);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});

// POST /auth/register
router.post('/register', async function (req, res, next) {
  try {
    const newUser = await User.register({ ...req.body, is_admin: false });
    const token = createToken(newUser);
    return res.status(201).json({ newUser, token });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
