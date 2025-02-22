const EmployeesRespository = require("../Repositories/EmployeesRepository")
const ShiftsRepository = require("../Repositories/ShiftsRepository")


const getAllEmployees = async () => {
    const employees =  await EmployeesRespository.getAllEmployees()

    const shifts = await ShiftsRepository.getallShifts()

    const fullEmployeesData = employees.map(employee => {
        const employeeShifts = shifts
            .filter(shift => shift.Employees.includes(employee.id))
            .map(shift => ({
                Date: shift.Date,
                StartingHour: shift.StartingHour,
                EndingHour: shift.EndingHour
            }));
    
        return {
            ...employee._doc,
            shift: employeeShifts
        };
    })
    return fullEmployeesData
}

const getEmployeeById = async (id) => {
    const employee = await EmployeesRespository.getEmployeeById(id)
    const employeeshifts = await ShiftsRepository.getallShifts({Employees: id})
    return {
        ...employee._doc,
        shift: employeeshifts.map(shift => ({
            Date: shift.Date,
            StartingHour: shift.StartingHour,
            EndingHour: shift.EndingHour
        }))
    }
}

const addEmployee = async (employee) => {
    const newEmployee = await EmployeesRespository.addEmployee(employee)
    return newEmployee
}

const updateEmployee = async (id, employee) => {
    const updatedEmployee = await EmployeesRespository.updateEmployee(id, employee)
    return updatedEmployee
}

const deleteEmployee = async (id) => {
    const deletedEmployee = await EmployeesRespository.deleteEmployee(id)
    ShiftsRepository.removeEmployeeFromShift(id)
    return deletedEmployee
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee      
}