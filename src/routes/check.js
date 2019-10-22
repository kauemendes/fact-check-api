'use strict';

const router = require('express').Router();

router.get('/', async (req, res) => {
  res.status(200);
});

router.get('/', (req, res) => {
  res.status(200).json(farmer);
});

module.exports = router;