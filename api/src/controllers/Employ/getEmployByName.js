const Employ = require('../../models/Employ');

const getEmployByName = async (name) => {
	const regex = new RegExp(name, 'i'); // 'i' indica que la búsqueda es insensible a mayúsculas y minúsculas
	const employ = await Employ.find({ name: { $regex: regex } });
	return employ;
};

module.exports = getEmployByName;
