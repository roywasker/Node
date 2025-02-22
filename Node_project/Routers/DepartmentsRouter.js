const express = require('express');
const jwt = require('jsonwebtoken');
const DepartmentsService = require('../Services/DepartmentsService');
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

        const departments = await DepartmentsService.getAllDepartments();
        res.json(departments);

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

        const department = await DepartmentsService.getDepartmentById(req.params.id);
        res.json(department);

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

        const department = await DepartmentsService.addDepartment(req.body);
        res.json(department);

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

        const department = await DepartmentsService.updateDepartment(req.params.id, req.body);
        res.json(department);

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

        const department = await DepartmentsService.deleteDepartment(req.params.id);
        res.json(department);

    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

router.get('/employee/:departmentName', async (req, res) => {
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
        
        const employees = await DepartmentsService.getEmployeesNotIncludedInDepartment(req.params.departmentName);
        res.json(employees);

    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

router.post('/:employeeId', async (req, res) => {
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

        const department = await DepartmentsService.addEmployeeToDepartment(req.body, req.params.employeeId);
        res.json(department);

    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;