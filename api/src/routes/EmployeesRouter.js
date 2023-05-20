const { Router } = require('express');
const { postEmployeesHandler, getEmployeesHandler } = require('../Handlers/EmployeesHandlers');
const EmployeesRouter = Router();

EmployeesRouter.post('/', postEmployeesHandler);
EmployeesRouter.get('/', getEmployeesHandler)

module.exports = EmployeesRouter;
