const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
  {
    FullName: String,
    NumOfActions: Int,
  },
  { versionKey: false }
);

const Users = mongoose.model('user', userSchema, 'users');

module.exports = Users;
