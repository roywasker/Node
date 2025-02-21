const ShiftsModel = require('../Models/shiftsModel');

const getallShifts = () => {
    return ShiftsModel.find();
}

const getShiftById = (id) => {
    return ShiftsModel.findById(id);
}       

const addShift = (obj) => {
    const shift = new ShiftsModel(obj);
    return shift.save();
}

const updateShift = (id, obj) => {
    return ShiftsModel.findByIdAndUpdate(id, obj);
}

const deleteShift = (id) => {
    return ShiftsModel.findByIdAndDelete(id);
}

module.exports = {
    getallShifts,
    getShiftById,
    addShift,
    updateShift,
    deleteShift
}