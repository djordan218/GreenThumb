'use strict';

// express app for green_thumb

const express = require('express');
const cors = require('cors');

const { NotFoundError } = require('./expressError');

const { authenticateJWT } = require('./middleware/auth');
// /auth
const authRoutes = require('./routes/auth');
// /users
const usersRoutes = require('./routes/users');
// /crops
const cropsRoutes = require('./routes/crops');

const morgan = require('morgan');
const router = express.Router();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(authenticateJWT);

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/crops', cropsRoutes);

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

app.get('/', async function (req, res, next) {
  try {
    res.send('MAIN HOME PAGE');
  } catch (err) {
    return next(err);
  }
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
