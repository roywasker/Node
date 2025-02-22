const mongoose = require('mongoose');


const departmentSchema = mongoose.Schema(
  {
    Name: { type: String, required: true },
    Manager: { type: String, required: true },
  },
  { versionKey: false }
);

const Departments = mongoose.model('department', departmentSchema, 'departments');

module.exports = Departments;
