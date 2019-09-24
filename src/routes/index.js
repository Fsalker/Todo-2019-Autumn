const router = require('express').Router();

const authRouter = require('./authentication');
const usersRouter = require('./users');
const projectsRouter = require('./projects');
const userToProjectRouter = require('./userToProject');

const verifyJwt = require('./middleware/verifyJwt');

router.use('/auth', authRouter);
router.use('/users', [
  verifyJwt,
  usersRouter,
]);
router.use('/projects', [
  verifyJwt,
  projectsRouter,
]);
router.use('/userToProject', [
  verifyJwt,
  userToProjectRouter,
]);


module.exports = router;
