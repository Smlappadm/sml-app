const CLevel = require('../../models/CLevel');

const updateCLevelById = async (id, updatedData) => {
	const cLevel = await CLevel.findByIdAndUpdate(id, updatedData, {
		new: true,
	});
	return cLevel;
};

module.exports = updateCLevelById;
