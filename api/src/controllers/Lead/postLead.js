const Lead = require('../../models/Lead');

const postLead = async ({
	id,
	name,
	profesion,
	nivel,
	phone,
	status,
	email,
	web,
	instagram,
	nivel,
	deleted,
}) => {
	const lead = await Lead.create({
		id,
		name,
		profesion,
		nivel,
		phone,
		status,
		email,
		web,
		instagram,
		nivel,
		deleted,
	});
	return lead;
};

module.exports = postLead;
