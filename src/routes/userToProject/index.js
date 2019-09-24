const router = require('express').Router();
const { canAddUserToProject, userIsInProject } = require('./../middleware');

const _delete = require('./delete');
const _post = require('./post');
const _getUsersInProject = require('./getUsersInProject');

router.delete('/:userId/:projectId', [
  canAddUserToProject,
  _delete,
]);
router.post('/:userId/:projectId', [
  canAddUserToProject,
  _post,
]);
router.get('/:projectId', [
  userIsInProject,
  _getUsersInProject,
]);

module.exports = router;
