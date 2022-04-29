const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const GraphQLDate = require('./graphql_date.js');
const about = require('./about.js');
const user = require('./user.js');
const target = require('./target.js');

const resolvers = {
  Query: {
    about: about.getMessage,
    getUser: user.getUser,
    getUserCharger: user.getUserCharger,
    resultTarget: target.result,
    userChargerList: user.result,
  },
  Mutation: {
    setAboutMessage: about.setMessage,
    registerNewUser: user.registerNewUser,
    registerNewUserCharger: user.registerNewUserCharger,
    targetAdd: target.add,
    userTimeChange: user.change,
  },
  GraphQLDate,
};

const server = new ApolloServer({
    typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
    resolvers,
    formatError: (error) => {
      console.log(error);
      return error;
    },
  });
  
  function installHandler(app) {
    const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
    console.log('CORS setting:', enableCors);
    server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
  }
  
  module.exports = { installHandler };
