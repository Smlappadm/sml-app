const CLevel = require('../../models/CLevel');

const postCLevel = async ({ name, email, phone, image, deleted }) => {
	console.log(name);
	const cLevel = await CLevel.create({
		name,
		email,
		phone,
		image,
		deleted,
	});
	return cLevel;
};

module.exports = postCLevel;
