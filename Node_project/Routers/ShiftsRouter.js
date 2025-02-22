const express = require('express');
const jwt = require('jsonwebtoken');
const ShiftsService = require('../Services/ShiftsService');
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

        const shifts = await ShiftsService.getAllShifts(req.query);
        res.json(shifts);

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

        const shift = await ShiftsService.getShiftById(req.params.id);
        res.json(shift);

    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

router.post('/:id', async (req, res) => {
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

        const id = req.params.id;
        const body = req.body;
        const shift = await ShiftsService.updateShift(id, body);
        res.json(shift);

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

        const body = req.body;
        const shift = await ShiftsService.addShift(body);
        res.json(shift);

    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

router.post('/addEmployee/:shiftId', async (req, res) => {
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
        
        const shiftId = req.params.shiftId;
        const employeeId = req.body.Employees;
        const shift = await ShiftsService.addEmployeeToShift(shiftId, employeeId);
        res.json(shift);

    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;