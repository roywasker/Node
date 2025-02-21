const UsersModel = require("../Models/usersModel")

const getAllUsers = (filters) => {
    return UsersModel.find(filters);
}

const getUserById = (id) => {
    return UsersModel.findById(id);
}

const addUser = (obj) => {
    const user = new UsersModel(obj);
    return user.save();
}

const updateUser = (id, obj) => {
    return UsersModel.findByIdAndUpdate(id, obj);
}   

const deleteUser = (id) => {
    return UsersModel.findByIdAndDelete(id);
}   

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
}