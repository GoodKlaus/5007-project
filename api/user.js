const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

async function getUser(_, { userInput }) {
  const db = getDb();
  var user;
  if (userInput.email == null || userInput.email == null ) {
        const LoginUser = {
            phoneNumber:userInput.phoneNumber,
            password:userInput.password
        };
        user = await db.collection('users').findOne( LoginUser );
  }else if(userInput.phoneNumber == null || userInput.phoneNumber == ""){
        const LoginUser = {
            email:userInput.email,
            password:userInput.password
        };
        user = await db.collection('users').findOne(LoginUser );
  }else{
    user = await db.collection('users').findOne(userInput );
  }
  return user;
}

async function registerNewUser(_, { userInput }) {
  const db = getDb();
// if duplicate, will not insert but count increse, should solve
  const newUser = Object.assign({}, userInput);
  newUser.created = new Date();
  newUser.id = await getNextSequence('users');

  const result = await db.collection('users').insertOne(newUser);
  const savedUser = await db.collection('users')
    .findOne({ _id: result.insertedId });
  return savedUser;
}

module.exports = { getUser, registerNewUser};