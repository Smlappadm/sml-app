const Lead = require('../../models/Lead');

const updateLeadById = async (id, updatedData) => {
	const lead = await Lead.findByIdAndUpdate(id, updatedData, {
		new: true,
	});
	return lead;
};

module.exports = updateLeadById;
