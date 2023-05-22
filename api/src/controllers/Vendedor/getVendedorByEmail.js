const Vendedor = require('../../models/Vendedor');

const getVendedorByName = async (email) => {
	const vendedor = await Vendedor.find(email);
	return vendedor;
};

module.exports = getVendedorByName;