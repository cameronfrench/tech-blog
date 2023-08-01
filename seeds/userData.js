const { User } = require("../models");

const userData = [
  {
    username: "username",
    email: "test@test.com",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;