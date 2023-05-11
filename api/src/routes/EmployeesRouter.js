const { Router } = require("express");
const EmployeesRouter = Router();
const {
  getAllEmployeesHandler,
  postEmployeesHandler,
} = require("../Handlers/employeesHandlers");

EmployeesRouter.get("/", getAllEmployeesHandler);
EmployeesRouter.post("/", postEmployeesHandler);

module.exports = EmployeesRouter;
