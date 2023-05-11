const Employ = require('../../models/Employ');

const getEmployById = async (id) => {
	const employ = await Employ.findById(id);
	return employ;
};

module.exports = getEmployById;
