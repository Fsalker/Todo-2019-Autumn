const router = require('express').Router();

const { canCreateProjects, canEditProjects, userIsInProject } = require('./../middleware');

const _delete = require('./delete');
const _getAll = require('./get-all');
const _getById = require('./getById');
const _patch = require('./patch');
const _post = require('./post');

router.delete('/:projectId', [
  canEditProjects,
  _delete,
]);
router.get('', _getAll);
router.get('/:projectId', [
  userIsInProject,
  _getById,
]);
router.patch('/:projectId', [
  canEditProjects,
  _patch,
]);
router.post('', [
  canCreateProjects,
  _post,
]);

module.exports = router;
