const CLevel = require('../../models/CLevel');

const getCLevelByName = async (name) => {
	const regex = new RegExp(name, 'i'); // 'i' indica que la búsqueda es insensible a mayúsculas y minúsculas
	const cLevels = await CLevel.find({ name: { $regex: regex } });
	return cLevels;
};

module.exports = getCLevelByName;
