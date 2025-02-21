const mongoose = require('mongoose');


const employeeSchema = mongoose.Schema(
  {
    FirstName: String,
    LastName: String,
    StartWorkYear: Int,
    DepartmentID: String,


  },
  { versionKey: false }
);

const Employees = mongoose.model('employee', employeeSchema, 'employees');

module.exports = Employees;
