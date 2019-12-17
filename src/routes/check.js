'use strict';

const router = require('express').Router();
const CheckURL = require('../services/check');
const middleware = require('../middlewares'); 
const schemas = require('../schemas');
const Joi = require('joi'); 

router.get('/test', async (req, res, next) => {
  try {
    let check = new CheckURL()
    let evaluation = await check.verify(req.query.url);
    res.status(200).send(evaluation);
  } catch (err) {
    return next(err)
  }
});

router.get('/', (req, res) => {
  res.status(200).send('OK')
});

router.post('/', middleware.validateMiddleware(schemas.uriSchema), (req, res) => {
  res.json({ message: 'Resource created', data: req.body });
});

module.exports = router;