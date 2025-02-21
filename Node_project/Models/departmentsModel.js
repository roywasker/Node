const mongoose = require('mongoose');


const departmentSchema = mongoose.Schema(
  {
    Name: String,
    Manager: String,
  },
  { versionKey: false }
);

const Departments = mongoose.model('department', departmentSchema, 'departments');

module.exports = Departments;
