const Lead = require('../../models/Lead');

const getLeadByName = async (name) => {
	const regex = new RegExp(name, 'i'); // 'i' indica que la búsqueda es insensible a mayúsculas y minúsculas
	const lead = await Lead.find({ name: { $regex: regex } });
	return lead;
};

module.exports = getLeadByName;
