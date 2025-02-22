const express = require('express');
const jwt = require('jsonwebtoken');
const UsersService = require('../Services/UsersService');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const token = req.headers['token'];
        if(!token) return res.status(401).json('No token provided');
       
        let userId = null;
        jwt.verify(token, 'token_key', (err, data) => {
            userId = data.id;
            if (err) {
              res.status(500).json('Failed to authenticate token');
            }
        })

        const allow = await UsersService.updateUserAction(userId);
        
        if(allow == false) {
            return res.status(500).json('The daily Action are over');
        }

        const Users = await UsersService.getAllUsers(req.query);
        res.json(Users);

    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

router.get('/:id', async (req, res) => {
    try{
        const token = req.headers['token'];
        if(!token) return res.status(401).json('No token provided');
       
        let userId = null;
        jwt.verify(token, 'token_key', (err, data) => {
            userId = data.id;
            if (err) {
              res.status(500).json('Failed to authenticate token');
            }
        })

        const allow = await UsersService.updateUserAction(userId);
        
        if(allow == false) {
            return res.status(500).json('The daily Action are over');
        }

        const user  = await UsersService.getUserById(req.params.id);
        res.json(user);

    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

router.post('/', async (req, res) => {
    try{
        const token = req.headers['token'];
        if(!token) return res.status(401).json('No token provided');
       
        let userId = null;
        jwt.verify(token, 'token_key', (err, data) => {
            userId = data.id;
            if (err) {
              res.status(500).json('Failed to authenticate token');
            }
        })
        
        const allow = await UsersService.updateUserAction(userId);
        
        if(allow == false) {
            return res.status(500).json('The daily Action are over');
        }

        const body = req.body;
        const user = await UsersService.addUser(body);
        res.json(user);

    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;