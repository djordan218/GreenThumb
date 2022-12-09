const serverless = require('serverless-http');
const app = require('./app');

const { LOCAL_PORT } = require('./config');
const USER = process.env.RDS_USER || 'postgres';
const PASSWORD = process.env.RDS_PASSWORD || 'password';
const HOST = process.env.RDS_HOST || 'localhost';
const DATABASE = process.env.RDS_DATABASE || 'green_thumb';
const PORT = process.env.RDS_PORT || 5432;

app.listen(LOCAL_PORT, function () {
  console.log(`Started on http://localhost:${LOCAL_PORT}`);
  console.log(
    `DATABASE: postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`
  );
});

module.exports.handler = serverless(app);
