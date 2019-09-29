const graphql = require('graphql');
const updateUser = require('./updateUser');

const mutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateUser,
  },
});

module.exports = mutationType;
