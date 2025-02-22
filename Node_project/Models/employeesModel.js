const mongoose = require('mongoose');


const employeeSchema = mongoose.Schema(
  {
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    StartWorkYear: { type: Number, required: true },
    DepartmentID: { type: String, required: true },


  },
  { versionKey: false }
);

const Employees = mongoose.model('employee', employeeSchema, 'employees');

module.exports = Employees;
