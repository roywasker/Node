const Employees = require("../Models/employeesModel")
const DepartmentsRepository = require("../Repositories/DepartmentsRepository")
const EmployeesRepository = require("../Repositories/EmployeesRepository")

const getAllDepartments = async () => {
    const departments = await DepartmentsRepository.getAllDepartments()

    const employees = await EmployeesRepository.getAllEmployees()

    const fullDepartmentsData = departments.map(department => {
        const departmentEmployees = employees
            .filter(employee => employee.DepartmentID === department.id)
            .map(employee => ({
                id: employee.id,
                FirstName: employee.FirstName,
                LastName: employee.LastName,
            }));
    
        return {
            ...department._doc,
            Employees: departmentEmployees
        };
    })
    return fullDepartmentsData
}

const getDepartmentById = async (id) => {
    const department = await DepartmentsRepository.getDepartmentById(id)

    const employees = await EmployeesRepository.getAllEmployees()

    const departmentEmployees = employees
        .filter(employee => employee.DepartmentID === department.id)
        .map(employee => ({
            id: employee.id,
            FirstName: employee.FirstName,
            LastName: employee.LastName,
        }));

    return {
        ...department._doc,
        Employees: departmentEmployees
    };
}


const addDepartment = async (obj) => {
    const department = await DepartmentsRepository.addDepartment(obj)
    return department
}

const addEmployeeToDepartment = async (departmentId, employeeId) => {
    const employee = await EmployeesRepository.getEmployeeById(employeeId)

    if (!employee) {
        throw new Error("Employee not found")
    }

    const updatedDepartment = await EmployeesRepository.updateEmployee(employeeId, departmentId)
    return updatedDepartment
}

const getEmployeesNotIncludedInDepartment = async (id) => { 
    const employees = await EmployeesRepository.getAllEmployees()
    const employeesNotIncluded = employees.filter(employee => employee.DepartmentID !== id)
    return employeesNotIncluded
}

const updateDepartment = async (id, department) => {
    const updatedDepartment = await DepartmentsRepository.updateDepartment(id, department)
    return updatedDepartment
}

const deleteDepartment = async (id) => {
    const deletedDepartment = await DepartmentsRepository.deleteDepartment(id)
    const employees = await EmployeesRepository.getAllEmployees()
    const employeesToDelete = employees.filter(employee => employee.DepartmentID === id)
    
    employeesToDelete.forEach(async employee => {
        await EmployeesRepository.deleteEmployee(employee.id)
    })
    return deletedDepartment
}   

module.exports = {
    getAllDepartments,
    getDepartmentById,
    addDepartment,
    addEmployeeToDepartment,
    getEmployeesNotIncludedInDepartment,
    updateDepartment,
    deleteDepartment   
}