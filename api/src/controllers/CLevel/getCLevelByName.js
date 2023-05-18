const CLevel = require('../../models/CLevel');

const getCLevelByName = async (Name) => {
	const regex = new RegExp(Name, 'i'); // 'i' indica que la búsqueda es insensible a mayúsculas y minúsculas
	const cLevels = await CLevel.find({ Name: { $regex: regex } });
	return cLevels;
};

module.exports = getCLevelByName;
