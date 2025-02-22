const EmployeesModel = require('../Models/employeesModel');

const getAllEmployees = () => {
    return EmployeesModel.find();
}

const getEmployeeById = (id) => {
    return EmployeesModel.findById(id);
}   

const addEmployee = (obj) => {
    const employee = new EmployeesModel(obj);
    return employee.save();
}   

const updateEmployee = (id, obj) => {
    return EmployeesModel.findByIdAndUpdate(id, obj);
}

const deleteEmployee = (id) => {
    return EmployeesModel.findByIdAndDelete(id);
}       

module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
}
