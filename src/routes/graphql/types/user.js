const graphql = require('graphql');

const userInputType = new graphql.GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    age: { type: graphql.GraphQLInt },
    bio: { type: graphql.GraphQLString },
    hobbies: { type: graphql.GraphQLString },
    height: { type: graphql.GraphQLFloat },
    mass: { type: graphql.GraphQLFloat },
  },
});

const userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    username: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt },
    bio: { type: graphql.GraphQLString },
    hobbies: { type: graphql.GraphQLString },
    height: { type: graphql.GraphQLFloat },
    mass: { type: graphql.GraphQLFloat },
  },
});

module.exports = {
  userType,
  userInputType,
};
