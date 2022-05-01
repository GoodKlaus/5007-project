const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

//query target location searched at Home page (last element from the array stored in database)
async function result() {
  const db = getDb();
  const result_target = await db.collection('targets').find({}).toArray();
  return result_target[result_target.length-1];
}

//add target location from Home page
async function add(_, { target }) {
  const db = getDb();

  target.id = await getNextSequence('targets');

  const result = await db.collection('targets').insertOne(target);
  const savedTarget = await db.collection('targets')
    .findOne({ _id: result.insertedId });
  return savedTarget;
}

module.exports = { result, add };
