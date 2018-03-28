const users = require("../../data/users.json");

exports.getAllUsers = (_, { name }) =>
  new Promise((resolve, reject) => resolve(users));

exports.getUser = (_, { name }) =>
  new Promise((resolve, reject) => {
    resolve(
      users.reduce((acc, user) => {
        if (user.name === name) {
          acc = user;
        }
        return acc;
      }, {})
    );
  });
