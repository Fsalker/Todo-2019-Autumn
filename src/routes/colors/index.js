const router = require('express').Router();

const _get = require('./get');

router.get('/', _get);

module.exports = router;
