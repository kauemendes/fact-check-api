'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./src/config');
const morgan = require('morgan');

const {
  errorMiddleware
} = require('./src/middlewares');

app.use(bodyParser.json());
app.use(morgan('combined'));

// API Routes
const api = require('./src/routes/index');

app.use('/api', cors(), api);

// Error middleware
app.use(errorMiddleware);

app.listen({
  host: config.server.host,
  port: config.server.port
}), () => {
  console.info(`Listening on port ${config.server.host} ${config.server.port}`);
};
