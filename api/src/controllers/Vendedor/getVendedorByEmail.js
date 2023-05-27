const Vendedor = require("../../models/Vendedor");

const getVendedorByEmail = async (email) => {
  const vendedor = await Vendedor.findOne({ email: email });
  console.log(vendedor)
  return vendedor;
};

module.exports = getVendedorByEmail;
const Vendedor = require('../../models/Vendedor');

const getVendedorByEmail = async (email) => {
	const vendedor = await Vendedor.findOne({ email: email });
	return vendedor;
};

module.exports = getVendedorByEmail;
