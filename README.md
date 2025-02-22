# Factory Management Backend - Node.js

## Overview
This project is a backend server for a factory management system, built using **Node.js** with **Express.js** and a **MongoDB** database. It provides RESTful APIs for managing employees, departments, shifts, and users.

## Technologies Used
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT Authentication** - User authentication
- **cors** - Cross-Origin Resource Sharing

## Database Schema

### User
```json
{
  "_id": ObjectId,
  "fullName": "string",
  "numOfActions": "integer",
    "UserId": "String",
    "UserName": "String",
    "ActionDate": "String",
    "ActionToday": "integer"
}
```

### Department
```json
{
  "_id": ObjectId,
  "name": "string",
  "manager": ObjectId (Reference to Employee)
}
```

### Employee
```json
{
  "_id": ObjectId,
  "firstName": "string",
  "lastName": "string",
  "startWorkYear": "integer",
  "departmentId": ObjectId (Reference to Department)
}
```

### Shift
```json
{
  "_id": ObjectId,
  "date": "Date",
  "startingHour": "integer",
  "endingHour": "integer",
  "employees": [ObjectId] (Array of Employee IDs)
}
```

## API Endpoints

### Authentication
- `POST /api/login` - Authenticate users using external API ([jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/users))

### Employees
- `GET /api/employees` - Get all employees
- `GET /api/employees/:id` - Get employee by ID
- `POST /api/employees` - Create new employee
- `PUT /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Delete employee

### Departments
- `GET /api/departments` - Get all departments
- `GET /api/departments/:id` - Get department by ID
- `POST /api/departments` - Create new department
- `PUT /api/departments/:id` - Update department
- `DELETE /api/departments/:id` - Delete department
- `GET /api/departments/employee/:id` - Get all the employee that not in this department
- `POST /api/departments/:id` - Assign department to employee


### Shifts
- `GET /api/shifts` - Get all shifts
- `POST /api/shifts` - Create new shift
- `POST /api/shifts/:id` - Update shift
- `POST /api/shifts/addEmployee/:id` - Assign employee to shift

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Add new user actions

## Authentication & Authorization
- Users must login to access the system.
- Every action reduces the number of allowed actions per day.
- When a user reaches the maximum allowed actions, they are logged out for the day.

## Setup & Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the server:
   ```sh
   node .\index.js
   ```

## Logging
- User actions are logged into a JSON file on the server.

## Contribution
Feel free to contribute by submitting a pull request!
