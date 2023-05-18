const { Router } = require('express');
const {
	postLeadHandler,
	getAllLeadHandler,
	updateLeadHandler,
	getLeadByIdHandler,
	getLeadByNameHandler,
	getLeadCheckedHandler,
	getLeadUncheckedHandler,
	getLead10UncheckedHandler,
	getLeadCheckedInactive100Handler,
	updateLeadVendedorHandler,
	getLeadVendedorHandler
} = require('../Handlers/LeadHandlers');
const LeadRouter = Router();

LeadRouter.get('/', getAllLeadHandler);
LeadRouter.get('/checked', getLeadCheckedHandler);
LeadRouter.get('/checkedinactive100', getLeadCheckedInactive100Handler);
LeadRouter.get('/unchecked', getLeadUncheckedHandler);
LeadRouter.get('/unchecked10', getLead10UncheckedHandler);
LeadRouter.post('/', postLeadHandler);
LeadRouter.get('/name', getLeadByNameHandler);
LeadRouter.get('/:id', getLeadByIdHandler);
LeadRouter.put('/:id', updateLeadHandler);
LeadRouter.put('/vendedor/:id', updateLeadVendedorHandler);
LeadRouter.get('/leadvendedor/:id', getLeadVendedorHandler);


module.exports = LeadRouter;
