const { Router } = require('express');
const {
	postEmployeeHandler,
	getAllEmployeesHandler,
	getEmployByIdHandler,
	getEmployByNameHandler,
	updateEmployeeHandler,
} = require('../Handlers/employeesHandlers');
const EmployeesRouter = Router();

EmployeesRouter.post('/', postEmployeeHandler);
EmployeesRouter.get('/', getAllEmployeesHandler);
EmployeesRouter.get('/name', getEmployByNameHandler);
EmployeesRouter.put('/:id', updateEmployeeHandler);
EmployeesRouter.get('/:id', getEmployByIdHandler);

module.exports = EmployeesRouter;
