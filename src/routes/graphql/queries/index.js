const graphql = require('graphql');
const getUser = require('./getUser');

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    getUser,
  },
});

module.exports = queryType;
