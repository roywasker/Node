const ShiftsRepository = require("../Repositories/ShiftsRepository")

const getAllShifts = (filters) => {
    return ShiftsRepository.getallShifts(filters);
}

const getShiftById = (id) => {
    return ShiftsRepository.getShiftById(id);
}

const addShift = (obj) => {
    return ShiftsRepository.addShift(obj);
}

const updateShift = (id, obj) => {
    return ShiftsRepository.updateShift(id, obj);
}

const addEmployeeToShift = (shiftId, employeeId) => {
    return ShiftsRepository.addEmployeeToShift(shiftId, employeeId);
}

const removeEmployeeFromAllShift = (employeeId) => {
    const shifts = ShiftsRepository.getallShifts({Employees: employeeId});
    shifts.forEach(shift => {
        ShiftsRepository.removeEmployeeFromShift(shift.id, employeeId);
    });
}

module.exports = {
    getAllShifts,
    getShiftById,
    addShift,
    updateShift,
    addEmployeeToShift,
    removeEmployeeFromAllShift
}
