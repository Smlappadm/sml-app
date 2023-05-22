const { Router } = require("express");
const {
  postEmployeesHandler,
  getEmployeesByEmailHandler,
  updateEmployByEmailHandler,
  getAllEmployeesHandler,
} = require("../Handlers/employeesHandlers");
const EmployeesRouter = Router();

EmployeesRouter.get("/", getAllEmployeesHandler);
EmployeesRouter.post("/", postEmployeesHandler);
EmployeesRouter.get("/email", getEmployeesByEmailHandler);
EmployeesRouter.put("/", updateEmployByEmailHandler);

module.exports = EmployeesRouter;
