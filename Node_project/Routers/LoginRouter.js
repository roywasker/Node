const express = require('express');
const jwt = require('jsonwebtoken');
const LoginService = require('../Services/LoginService');
const UsersService = require('../Services/UsersService');


const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const { username, email } = req.body;
        if (!username || !email) {
            res.status(400).json({ message: 'Please provide username and email' });
        }

        const users = await LoginService.getUsers()

        let userData = null;
        users.forEach(user => {
            if(user.username === username && user.email === email){
                userData = user
            }
        });

        let userId = null;
        if(userData){
            const allUsers = await UsersService.getAllUsers();
            allUsers.forEach(user => {
                if(user.UserName === userData.username){
                    if(user.ActionToday <= 0){
                        res.status(400).json({ message: 'The daily Action are over' });
                    }
                    userId = user.id
                }
            });
        }

        if (userId) {
            const token = jwt.sign({ id: userId }, 'token_key', { expiresIn: '1h' });
            res.json({ token });
        }else{
            res.status(400).json({ message: 'Invalid credentials' });
        }

    }catch(err){
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;