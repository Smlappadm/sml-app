const { Router } = require('express');
const {
	postCLevelHandler,
	getAllCLeveslHandler,
	updateCLevelHandler,
	getCLevelByIdHandler,
	getCLevelByNameHandler,
} = require('../Handlers/cLevelHandlers');
const CLevelRouter = Router();

CLevelRouter.post('/', postCLevelHandler);
CLevelRouter.get('/', getAllCLeveslHandler);
CLevelRouter.get('/name', getCLevelByNameHandler);
CLevelRouter.get('/:id', getCLevelByIdHandler);
CLevelRouter.put('/:id', updateCLevelHandler);

module.exports = CLevelRouter;
