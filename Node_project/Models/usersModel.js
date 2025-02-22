const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
  {
    FullName: { type: String, required: true },
    NumOfActions: { type: Number, required: true },
    UserId: { type: String, required: true },
    UserName: { type: String, required: true },
    ActionDate: String,
    ActionToday: Number
  },
  { versionKey: false }
);

const Users = mongoose.model('user', userSchema, 'users');

module.exports = Users;
