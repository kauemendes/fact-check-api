'use strict';
const config = require('../config');

/* eslint-disable no-unused-vars */
module.exports.errorMiddleware = ((error, req, res, next) => {
  console.error(error);

  if (config.environment === 'development' || config.environment === 'stage') {
    return res.status(500).json({
      message: error.message,
      trace: error.stack
    });
  }
  return res.status(500).json({
    message: 'internal server error'
  });
});