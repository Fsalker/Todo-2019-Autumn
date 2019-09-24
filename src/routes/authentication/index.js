const router = require('express').Router();

const _login = require('./login');
const _register = require('./register');

router.post('/login', _login);
router.post('/register', _register);

module.exports = router;
