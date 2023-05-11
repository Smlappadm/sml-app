const Employ = require('../../models/Employ');

const getAllEmployees = async () => {
	const employees = await Employ.find();
	return employees;
};

module.exports = getAllEmployees;
