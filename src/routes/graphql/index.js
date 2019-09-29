const router = require('express').Router();
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

const queryType = require('./queries');
const mutationType = require('./mutations');
const customTypes = require('./types');

const schema = new graphql.GraphQLSchema({
  query: queryType,
  mutation: mutationType,
  ...customTypes,
});

router.use('/', graphqlHTTP({
  schema,
}));

module.exports = router;
