db.targets.remove({});

const count = db.targets.count();
print('Inserted', count, 'targets');

db.counters.remove({ _id: 'targets' });
db.counters.insert({ _id: 'targets', current: count });

db.users.remove({});
db.usercharger.remove({});

const usersDB = [
  {
    id: 1,
    name: 'Sam',
    email: 'user3@u.nus.edu',
    phoneNumber: "11111111",
    password: "password3",
    created: new Date('2022-04-15'),
    isOwnerOfEVCharger: false,
  },
  {
    id: 2,
    name: 'Karen',
    email: 'user4@u.nus.edu',
    phoneNumber: "22222222",
    password: "password4",
    created: new Date('2022-02-01'),
    isOwnerOfEVCharger: false,
  },
];
const userchargerDB = [
  {
    id: 1,
    name: 'Zhu Haoyu',
    email: 'user1@u.nus.edu',
    phoneNumber: "12345678",
    password: "password",
    created: new Date('2022-01-15'),
    isOwnerOfEVCharger: true,
    addressOfPile: 'Pandan Garden',
    lat: 1.320924490118613,
    lon: 103.74949162436793,
    price: 20.00,
    availableTime: ['29/4', '30/4', '1/5', '2/5', '3/5', '4/5', '5/5'],
    availableTimeDisplay: ['29/4', '30/4', '1/5', '2/5', '3/5', '4/5', '5/5'],
    availableTimeTable: [["9:00", "10:00", "11:00", "12:00", "13:00"],
    ["9:00", "10:00", "11:00", "12:00", "13:00"],
    ["9:00", "10:00", "11:00", "12:00", "13:00"],
    ["9:00", "10:00", "11:00", "12:00", "13:00"],
    ["9:00", "10:00", "11:00", "12:00", "13:00"],
    ["9:00", "10:00", "11:00", "12:00", "13:00"], 
    ["9:00", "10:00", "11:00", "12:00", "13:00"]],
    startTime: 9,
    endTime: 13,
  },
  {
    id: 2,
    name: 'Wang Tao',
    email: 'user2@u.nus.edu',
    phoneNumber: "11223344",
    password: "password2",
    created: new Date('2022-04-01'),
    isOwnerOfEVCharger: true,
    addressOfPile: 'Block 7 HDB Ghim Moh',
    lat: 1.3114285179474192,
    lon: 103.78728883228166,
    price: 25.00,
    availableTime: ['23/4', '24/4', '25/4', '26/4', '27/4', '28/4', '29/4'],
    availableTimeDisplay: ['23/4', '24/4', '25/4', '26/4', '27/4', '28/4', '29/4'],
    availableTimeTable: [["14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00"], 
    ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]],
    startTime: 14,
    endTime: 19,
  },
];

db.users.insertMany(usersDB);
const count1 = db.users.count();
print('Inserted', count1, 'users');

db.usercharger.insertMany(userchargerDB);
const count2 = db.usercharger.count();
print('Inserted', count2, 'users with charger');

db.counters.remove({ _id: 'users' });
db.counters.insert({ _id: 'users', current: count1 });

db.counters.remove({ _id: 'usercharger' });
db.counters.insert({ _id: 'usercharger', current: count2 });

db.users.createIndex({ id: 1 }, { unique: true });
db.users.createIndex({ name: 1 });
db.users.createIndex({ price: 1 });
db.users.createIndex({ created: 1 });
