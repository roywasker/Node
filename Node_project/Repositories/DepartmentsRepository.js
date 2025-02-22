const DepartmentsModel = require('../Models/departmentsModel');

const getAllDepartments = () => {
    return DepartmentsModel.find();
}

const getDepartmentById = (id) => {
    return DepartmentsModel.findById(id);
}   

const addDepartment = (department) => {
    const newDepartment = new DepartmentsModel(department);
    return newDepartment.save();
}   

const updateDepartment = (id, obj) => {
    return DepartmentsModel.findByIdAndUpdate(id, obj);
}

const deleteDepartment = (id) => {
    return DepartmentsModel.findByIdAndDelete(id);
}   

module.exports = {
    getAllDepartments,
    getDepartmentById,
    addDepartment,
    updateDepartment,
    deleteDepartment
}