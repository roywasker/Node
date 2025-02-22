const express = require('express');
const cors = require('cors');
const connectDB = require('./Configs/configsDB');

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());

app.use(express.json());

const LoginRouter = require("./Routers/LoginRouter")
app.use("/login", LoginRouter) 

const ShiftsRouter = require("./Routers/ShiftsRouter")
app.use("/shifts", ShiftsRouter)  

const UsersRouter = require("./Routers/UsersRouter")
app.use("/user", UsersRouter)  

const EmployeesRouter = require("./Routers/EmployeesRouter")
app.use("/employee", EmployeesRouter)

const DepartmentsRouter = require("./Routers/DepartmentsRouter")
app.use("/department", DepartmentsRouter)

app.listen(PORT, () => {
  // Entry Point (Base URL): http://localhost:3000
  console.log(`app is listening at http://localhost:${PORT}`);
});
