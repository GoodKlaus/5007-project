db.users.remove({});

const usersDB = [
  {
    id: 1,
    name: 'Zhu Haoyu',
    email: 'user1@u.nus.edu',
    phoneNumber: "12345678",
    password: "password",
    created: new Date('2022-01-15'),
    isOwnerOfEV: true,
    addressOfPile: 'Pandan Garden',
    price: 20.00,
    availableTime: "From 2:00 pm to 8:00 pm Weekdays",
  },
  {
    id: 2,
    name: 'Wang Tao',
    email: 'user2@u.nus.edu',
    phoneNumber: "11223344",
    password: "password2",
    created: new Date('2022-04-01'),
    isOwnerOfEV: false,
    addressOfPile: '',
    price: 0.00,
    availableTime: "",
  },
];

db.users.insertMany(usersDB);
const count = db.users.count();
print('Inserted', count, 'users');

db.counters.remove({ _id: 'users' });
db.counters.insert({ _id: 'users', current: count });

db.users.createIndex({ id: 1 }, { unique: true });
db.users.createIndex({ name: 1 });
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ phoneNumber: 1 }, { unique: true });
db.users.createIndex({ price: 1 });
db.users.createIndex({ created: 1 });