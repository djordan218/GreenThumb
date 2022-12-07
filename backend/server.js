'use strict';

const app = require('./app');
const { PGPORT } = require('./config');

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PGPORT}`);
});
