const UsersModel = require("../Models/usersModel")

const getAllUsers = (filters) => {
    return UsersModel.find(filters);
}

const getUserById = (id) => {
    return UsersModel.findById(id);
}

const getUserAction = async (id) => {
    const user = await UsersModel.findById(id);
    return user.ActionToday;
}

const addUser = (obj) => {
    const user = new UsersModel(obj);
    return user.save();
}

const updateUserAction = async (id) => {
    const userAction = await getUserAction(id);
    const obj = { "ActionToday": (userAction - 1) };
    return UsersModel.findByIdAndUpdate(id, obj);
}

const resetActionForUser = async (id) => {
    const user = await getUserById(id);
    const obj = { "ActionToday": user.NumOfActions,
        "ActionDate": new Date().toISOString().split('T')[0]
     };
    return UsersModel.findByIdAndUpdate(id, obj);
}

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUserAction,
    getUserAction,
    resetActionForUser
}