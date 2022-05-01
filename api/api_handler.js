const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const GraphQLDate = require('./graphql_date.js');
const about = require('./about.js');
const user = require('./user.js');
const target = require('./target.js');

const resolvers = {
  Query: {
    //query about message
    about: about.getMessage,
    //query information of users without charging piles
    getUser: user.getUser,
    //query information of users with charging piles
    getUserCharger: user.getUserCharger,
    //query target location searched at Home page
    resultTarget: target.result,
    //query all of the information of users with charging pile and update each user's timetable
    userChargerList: user.result,
    //query all of the orders of one targeted user
    userOrderList: user.order_result,
  },
  Mutation: {
    //set about message
    setAboutMessage: about.setMessage,
    //add new user without charging pile
    registerNewUser: user.registerNewUser,
    //add new user with charging pile
    registerNewUserCharger: user.registerNewUserCharger,
    //add target location from Home page
    targetAdd: target.add,
    //add new order of certain user and update the timetable from corresponding user
    userTimeOrder: user.combo_add,
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
