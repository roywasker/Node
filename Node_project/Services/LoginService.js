LoginRepository = require("../Repositories/LoginRepository")

const getUsers = () => {
    return LoginRepository.getUsersRepository()
}

module.exports = { getUsers }