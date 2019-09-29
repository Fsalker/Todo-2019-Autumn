const router = require('express').Router();

const _post = require('./post');

router.post('/:colorId', _post);

module.exports = router;
