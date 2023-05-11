const { Router } = require('express');
const {
	postLeadHandler,
	getAllLeadHandler,
	updateLeadHandler,
	getLeadByIdHandler,
	getLeadByNameHandler,
} = require('../Handlers/leadsHandlers');
const LeadsRouter = Router();

LeadsRouter.post('/', postLeadHandler);
LeadsRouter.get('/', getAllLeadHandler);
LeadsRouter.get('/name', getLeadByNameHandler);
LeadsRouter.get('/:id', getLeadByIdHandler);
LeadsRouter.put('/:id', updateLeadHandler);

module.exports = LeadsRouter;
