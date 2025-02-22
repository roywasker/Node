const ShiftsModel = require('../Models/shiftsModel');

const getallShifts = (filters) => {
    return ShiftsModel.find(filters);
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

const addEmployeeToShift = (shiftId, employeeId) => {
    return ShiftsModel.findByIdAndUpdate(shiftId, { $push: { Employees: employeeId } });
}

const removeEmployeeFromShift = async (employeeId) => {
    const shifts = await getallShifts({ Employees: employeeId });
    await Promise.all(shifts.map(shift => 
        ShiftsModel.findByIdAndUpdate(shift.id, { $pull: { Employees: employeeId } })
    ));
}

module.exports = {
    getallShifts,
    getShiftById,
    addShift,
    updateShift,
    addEmployeeToShift,
    removeEmployeeFromShift
}