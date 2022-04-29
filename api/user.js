const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

async function getUser(_, { userInput }) {
  const db = getDb();
  var user;
  var LoginUser;
  if (userInput.email == null || userInput.email == null ) {
        LoginUser = {
            phoneNumber:userInput.phoneNumber,
            password:userInput.password
        };
        user = await db.collection('users').findOne( LoginUser );
  }else if(userInput.phoneNumber == null || userInput.phoneNumber == ""){
        LoginUser = {
            email:userInput.email,
            password:userInput.password
        };
        user = await db.collection('users').findOne( LoginUser );
  }else{
    LoginUser = userInput;
    user = await db.collection('users').findOne( LoginUser );
  }
  return user;
}

async function getUserCharger(_, { userInput }) {
  const db = getDb();
  var user;
  var LoginUser;
  if (userInput.email == null || userInput.email == null ) {
        LoginUser = {
            phoneNumber:userInput.phoneNumber,
            password:userInput.password
        };
        user = await db.collection('usercharger').findOne( LoginUser );
  }else if(userInput.phoneNumber == null || userInput.phoneNumber == ""){
        LoginUser = {
            email:userInput.email,
            password:userInput.password
        };
        user = await db.collection('usercharger').findOne( LoginUser );
  }else{
    LoginUser = userInput;
    user = await db.collection('usercharger').findOne( LoginUser );
  }
  return user;
}

async function registerNewUser(_, { userInput }) {
  const db = getDb();
// if duplicate, will not insert but count increse, should solve
const checkEmailIfExsisted = await db.collection('users').findOne({email:userInput.email});
const checkPhoneNumberIfExsisted = await db.collection('users').findOne({phoneNumber:userInput.phoneNumber});
console.log(checkEmailIfExsisted,checkPhoneNumberIfExsisted)
if(checkEmailIfExsisted || checkPhoneNumberIfExsisted){
  return null;
}

  const newUser = Object.assign({}, userInput);
  newUser.created = new Date();
  newUser.id = await getNextSequence('users');

  const result = await db.collection('users').insertOne(newUser);
  const savedUser = await db.collection('users')
    .findOne({ _id: result.insertedId });
  return savedUser;
}

async function registerNewUserCharger(_, { userChargerInput }) {
  const db = getDb();
// if duplicate, will not insert but count increse, should solve
const checkEmailIfExsisted = await db.collection('usercharger').findOne({email:userChargerInput.email});
const checkPhoneNumberIfExsisted = await db.collection('usercharger').findOne({phoneNumber:userChargerInput.phoneNumber});
console.log(checkEmailIfExsisted,checkPhoneNumberIfExsisted)
if(checkEmailIfExsisted || checkPhoneNumberIfExsisted){
  return null;
}

  var days = [];
  var now = new Date();
  for (let i=0; i<7; i++) {
    var temp = new Date(now.getTime() + i*24*60*60*1000);
    const temp_date = (temp.getDate()) + '/' + (temp.getMonth()+1);
    days.push(temp_date);
  }

  var temp_time = [];
  for (let j=userChargerInput.startTime; j<=userChargerInput.endTime; j++){
      var temp1 = j.toString() + ":00";
      temp_time.push(temp1);
  }
  var table = Array(7).fill().map(item=>(temp_time));
  
  const newUser = Object.assign({}, userChargerInput);
  newUser.created = new Date();
  newUser.id = await getNextSequence('usercharger');
  newUser.availableTime = days;
  newUser.availableTimeTable = table;
  newUser.availableTimeDisplay = days;

  const result = await db.collection('usercharger').insertOne(newUser);
  const savedUser = await db.collection('usercharger')
    .findOne({ _id: result.insertedId });
  return savedUser;
}

async function result() {
  const db = getDb();
  var now = new Date();
  var now_temp = new Date(now.getTime());
  const today = (now_temp.getDate()) + '/' + (now_temp.getMonth()+1);

  var users_lst = await db.collection('usercharger').find({}).toArray();
  console.log(users_lst);
  for (let i=0; i<users_lst.length; i++) {
    const temp_user = users_lst[i];
    var temp_time = [];
    for (let _=temp_user.startTime; _<=temp_user.endTime; _++){
      var temp1 = _.toString() + ":00";
      temp_time.push(temp1);
    }

    var start = -1;
    for (let j=0; j<temp_user.availableTime.length; j++) {
      if (temp_user.availableTime[j] == today) {
        start = j;
        break;
      }
    }
    var temp_atime = [];
    var temp_atimetable = [];
    if (start == 0) {
      continue;
    } else if (start != -1) {
      temp_atime = temp_user.availableTime.slice(start);
      temp_atimetable = temp_user.availableTimeTable.slice(start);
    } else {
      start = 7;
    }
    for (let k=0; k<start; k++) {
      var temp = new Date(now.getTime() + (7-start+k)*24*60*60*1000);
      const temp_date = (temp.getDate()) + '/' + (temp.getMonth()+1);
      temp_atime.push(temp_date);

      temp_atimetable.push(temp_time);
    }

    var temp_atimedis = [];
    for(let m=0; m<7; m++) {
      if(temp_atimetable[m].length > 0) {
        temp_atimedis.push(temp_atime[m]);
      }
    }

    var result = await db.collection('usercharger').findOneAndUpdate(
      {id: users_lst[i].id},
      {$set: {availableTime: temp_atime, availableTimeDisplay: temp_atimedis, availableTimeTable: temp_atimetable}},
    );
  }

  const users_lst1 = await db.collection('usercharger').find({}).toArray();
  return users_lst1;
}

async function change(_, { changes }) {
    const db = getDb();
    const user = await db.collection('usercharger').findOne({id: changes.id});
    var timeTable = user.availableTimeTable;
    var temp = timeTable[changes.days_index];
    const findTimeIndex = (element) => element == changes.selectedTime;
    const ind = temp.findIndex(findTimeIndex);
    temp.splice(ind, changes.duration);
    timeTable[changes.days_index] = temp;
    db.collection('usercharger').updateOne({id: changes.id}, {$set: {availableTimeTable: timeTable}});
    const user_new = await db.collection('usercharger').findOne({id: changes.id});
    return user_new;
}

module.exports = { getUser, getUserCharger,registerNewUser, registerNewUserCharger, result, change };
