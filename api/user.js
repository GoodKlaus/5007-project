const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

//query information of user without charging piles given email/phone and password
async function getUser(_, { userInput }) {
  const db = getDb();
  var user;
  var LoginUser;
  
  //check whether users login with email or phone, then find corresponding information from database
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

//query information of user with charging piles given email/phone and password
async function getUserCharger(_, { userInput }) {
  const db = getDb();
  var user;
  var LoginUser;
  
  //check whether users login with email or phone, then find corresponding information from database
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

//add new user without charging pile
async function registerNewUser(_, { userInput }) {
  const db = getDb();
// if duplicate, will not insert
const checkEmailIfExsisted = await db.collection('users').findOne({email:userInput.email});
const checkPhoneNumberIfExsisted = await db.collection('users').findOne({phoneNumber:userInput.phoneNumber});
console.log(checkEmailIfExsisted,checkPhoneNumberIfExsisted)
if(checkEmailIfExsisted || checkPhoneNumberIfExsisted){
  return null;
}
  
  //insert with users' registered information, generated date and id
  const newUser = Object.assign({}, userInput);
  newUser.created = new Date();
  newUser.id = await getNextSequence('users');

  const result = await db.collection('users').insertOne(newUser);
  const savedUser = await db.collection('users')
    .findOne({ _id: result.insertedId });
  return savedUser;
}

//add new user with charging pile
async function registerNewUserCharger(_, { userChargerInput }) {
  const db = getDb();
// if duplicate, will not insert
const checkEmailIfExsisted = await db.collection('usercharger').findOne({email:userChargerInput.email});
const checkPhoneNumberIfExsisted = await db.collection('usercharger').findOne({phoneNumber:userChargerInput.phoneNumber});
console.log(checkEmailIfExsisted,checkPhoneNumberIfExsisted)
if(checkEmailIfExsisted || checkPhoneNumberIfExsisted){
  return null;
}
  
  // create available dates (following 7 days) for the user
  var days = [];
  var now = new Date();
  for (let i=0; i<7; i++) {
    var temp = new Date(now.getTime() + i*24*60*60*1000);
    const temp_date = (temp.getDate()) + '/' + (temp.getMonth()+1);
    days.push(temp_date);
  }
  
  // create time table based on start time and end time provided by users for the following 7 days
  var temp_time = [];
  for (let j=userChargerInput.startTime; j<=userChargerInput.endTime; j++){
      var temp1 = j.toString() + ":00";
      temp_time.push(temp1);
  }
  var table = Array(7).fill().map(item=>(temp_time));
  
  //insert with users' registered information, generated date, id, available dates and available timetable
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

//query all of the information of users with charging pile and update each user's timetable
async function result() {
  const db = getDb();
  
  // Obtaine today's date to check if users' available dates start from today
  var now = new Date();
  var now_temp = new Date(now.getTime());
  const today = (now_temp.getDate()) + '/' + (now_temp.getMonth()+1);

  var users_lst = await db.collection('usercharger').find({}).toArray();
  console.log(users_lst);
  
  //check each user's available dates and available timetable
  for (let i=0; i<users_lst.length; i++) {
    const temp_user = users_lst[i];
    // create one day's timetable as preparation based on users' registration
    var temp_time = [];
    for (let _=temp_user.startTime; _<=temp_user.endTime; _++){
      var temp1 = _.toString() + ":00";
      temp_time.push(temp1);
    }

    var start = -1;
    // check available dates and identify the location of today
    for (let j=0; j<temp_user.availableTime.length; j++) {
      if (temp_user.availableTime[j] == today) {
        start = j;
        break;
      }
    }
    var temp_atime = [];
    var temp_atimetable = [];
    // if user's available dates start with today, then continue
    if (start == 0) {
      continue;
    } else if (start != -1) {
      //if user's available dates have today but at other location, then create new dates list starting from today
      temp_atime = temp_user.availableTime.slice(start);
      //same operation to available time table
      temp_atimetable = temp_user.availableTimeTable.slice(start);
    } else {
      //if user's available dates don't have today, then create a new dates array
      start = 7;
    }
    
    //create new available dates starting from today and insert former generated one-day timetable
    for (let k=0; k<start; k++) {
      var temp = new Date(now.getTime() + (7-start+k)*24*60*60*1000);
      const temp_date = (temp.getDate()) + '/' + (temp.getMonth()+1);
      temp_atime.push(temp_date);

      temp_atimetable.push(temp_time);
    }
    
    //create another array of available dates for display (if one day has no available timings, then this will not be shown)
    var temp_atimedis = [];
    for(let m=0; m<7; m++) {
      if(temp_atimetable[m].length > 0) {
        temp_atimedis.push(temp_atime[m]);
      }
    }
    
    //update the database
    var result = await db.collection('usercharger').findOneAndUpdate(
      {id: users_lst[i].id},
      {$set: {availableTime: temp_atime, availableTimeDisplay: temp_atimedis, availableTimeTable: temp_atimetable}},
    );
  }
  
  //obtained updated information of users with charging piles
  const users_lst1 = await db.collection('usercharger').find({}).toArray();
  return users_lst1;
}

//query all of the orders of one targeted user
async function order_result(_, { userInfo }) {
  const db = getDb();
  const user_orders = await db.collection('userorder').find({name: userInfo.name, email: userInfo.email, phoneNumber: userInfo.phoneNumber}).toArray();
  return user_orders;
}

//add new order of certain user and update the timetable from corresponding user
async function combo_add (_, {combo}){
  //update corresponding user's available timetable to delete selected timing range
  const db = getDb();
  const user = await db.collection('usercharger').findOne({id: combo.id});
  var timeTable = user.availableTimeTable;
  //locate certain day
  var temp = timeTable[combo.days_index];
  //locate certain timing being selected
  const findTimeIndex = (element) => element == combo.selectedTime;
  const ind = temp.findIndex(findTimeIndex);
  //delete all timings within the duration
  temp.splice(ind, combo.duration);
  timeTable[combo.days_index] = temp;
  //update the user's available timetable
  db.collection('usercharger').updateOne({id: combo.id}, {$set: {availableTimeTable: timeTable}});
  const user_new = await db.collection('usercharger').findOne({id: combo.id});
  
  //insert new order information with generated date and id
  const new_order = Object.assign({}, combo);
  delete new_order['id'];
  delete new_order['days_index'];
  delete new_order['selectedTime'];
  delete new_order['duration'];
  new_order.created = new Date();
  new_order.id = await getNextSequence('orders');

  const result = await db.collection('userorder').insertOne(new_order);
  const savedOrder = await db.collection('userorder')
    .findOne({ _id: result.insertedId });
  
  if (savedOrder) {
    console.log("Successfully add order");
    console.log(savedOrder);
  }

  return user_new;
}

module.exports = { getUser, getUserCharger,registerNewUser, registerNewUserCharger, result, order_result, combo_add };
