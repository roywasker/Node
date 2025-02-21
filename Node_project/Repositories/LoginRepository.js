const axios = require("axios")

const URL = 'https://jsonplaceholder.typicode.com/users'

const getUsersRepository = async () => {
    const {data: users} = await axios.get(URL)
    return users
}

module.exports = { getUsersRepository }