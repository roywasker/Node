const express = require('express');
const jwt = require('jsonwebtoken');
const LoginService = require('../Services/LoginService');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const { username, email } = req.body;
        if (!username || !email) {
            res.status(400).json({ message: 'Please provide username and email' });
        }

        const users = await LoginService.getUsers()

        let userId = null;
        users.forEach(user => {
            if(user.username === username && user.email === email){
                userId = user.id
            }
        });

        if (userId) {
            const token = jwt.sign({ id: 'user_id' }, 'token_key', { expiresIn: '1h' });
            res.json({ token });
        }else{
            res.status(400).json({ message: 'Invalid credentials' });
        }

    }catch(err){
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;