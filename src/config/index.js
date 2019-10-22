'use strict';

const environment = process.env.APP_ENV || process.env.NODE_ENV || 'development';
const db = require('./knex')[environment];

module.exports = {
  environment: environment,
  server: {
    host: '0.0.0.0',
    port: process.env.NODE_PORT || process.env.PORT || 3000
  },
  email: {
    sender: process.env.ORIGIN_EMAIL,
    addressee: process.env.DESTINATION_EMAILS,
    subject_prefix: process.env.SUBJECT_PREFIX || ''
  },
  portal: {
    user: process.env.PORTAL_USER || 'admin',
    password: process.env.PORTAL_PASSWORD || 'admin'
  },
  bucket: process.env.BUCKET_UPLOAD,
  // database: db,
  webflow: {
    host: process.env.WEBFLOW_API,
    collection_id: process.env.WEBFLOW_COLLECTION_ID || '',
    token: process.env.WEBFLOW_TOKEN || ''
  }
};
