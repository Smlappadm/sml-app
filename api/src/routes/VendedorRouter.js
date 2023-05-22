const { Router } = require('express');
const {
	postVendedorHandler,
	getAllVendedoresHandler,
	getVendedorByNameHandler,
	getVendedorByIdHandler,
	updateVendedorHandler,
	getVendedorByEmailHandler,
} = require('../Handlers/VendedoresHandlers');
const VendedorRouter = Router();

VendedorRouter.post('/', postVendedorHandler);
VendedorRouter.get('/', getAllVendedoresHandler);
VendedorRouter.get('/name', getVendedorByNameHandler);
VendedorRouter.get('/email', getVendedorByEmailHandler);
VendedorRouter.get('/:id', getVendedorByIdHandler);
VendedorRouter.put('/:id', updateVendedorHandler);

module.exports = VendedorRouter;
