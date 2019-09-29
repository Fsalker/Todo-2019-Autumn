const router = require('express').Router();

const colorsRouter = require('./colors');
const userToColorRouter = require('./userToColor');

const verifyJwt = require('./middleware/verifyJwt');

router.use('/colors', [
  verifyJwt,
  colorsRouter,
]);
router.use('/userToColor', [
  verifyJwt,
  userToColorRouter,
]);

module.exports = router;
