const express = require('express');
const jwt = require('jsonwebtoken');
const EmployeesService = require('../Services/EmployeesService');
const UsersService = require('../Services/UsersService');
const filesUtils = require('../utils');


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

        filesUtils.addUserActions(userId);

        const employees = await EmployeesService.getAllEmployees();
        res.json(employees);

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

        filesUtils.addUserActions(userId);

        const employee = await EmployeesService.getEmployeeById(req.params.id);
        res.json(employee);

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

        filesUtils.addUserActions(userId);

        const employee = await EmployeesService.addEmployee(req.body);
        res.json(employee);

    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

router.put('/:id', async (req, res) => {
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

        filesUtils.addUserActions(userId);

        const employee = await EmployeesService.updateEmployee(req.params.id, req.body);
        res.json(employee);

    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

router.delete('/:id', async (req, res) => {
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

        filesUtils.addUserActions(userId);

        const employee = await EmployeesService.deleteEmployee(req.params.id);
        res.json(employee);

    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;