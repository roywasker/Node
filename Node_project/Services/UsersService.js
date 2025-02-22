const UsersRepository = require("../Repositories/usersRepository")

const getAllUsers = (filters) => {
    return UsersRepository.getAllUsers(filters);
}   

const getUserById = (id) => {    
    return UsersRepository.getUserById(id);
}

const addUser = async (obj) => {
    const user = await UsersRepository.addUser(obj);
    resetActionForUser(user.id);
    return user;
}

const updateUserAction = async (id) => {
    const user = await UsersRepository.getUserById(id);
    if(user.ActionDate !== new Date().toISOString().split('T')[0]) {
        UsersRepository.resetActionForUser(id);
    }
    if(user.ActionToday > 0) {
        UsersRepository.updateUserAction(id);    
        return true;
    }
    return false;
}

const getUserAction = (id) => {
    return UsersRepository.getUserAction(id);
}

const resetActionForUser = (id) => {
    return UsersRepository.resetActionForUser(id);
}

module.exports = { 
    getAllUsers,
    getUserById,
    addUser,
    updateUserAction,
    getUserAction,
    resetActionForUser
}
