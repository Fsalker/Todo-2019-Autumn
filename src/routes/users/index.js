const router = require('express').Router();

const _delete = require('./delete');

router.delete('', _delete);

module.exports = router;
