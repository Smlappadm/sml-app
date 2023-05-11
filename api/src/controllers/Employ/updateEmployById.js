const Employ = require('../../models/Employ');

const updateEmployeeById = async (id, updatedData) => {
	const employee = await Employ.findByIdAndUpdate(id, updatedData, {
		new: true,
	});
	return employee;
};

module.exports = updateEmployeeById;
