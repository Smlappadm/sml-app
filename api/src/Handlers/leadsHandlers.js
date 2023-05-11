const getAllLeads = require('../controllers/Lead/getAllLeads');
const getLeadById = require('../controllers/Lead/getLeadById');
const getLeadByName = require('../controllers/Lead/getLeadByName');
const postLead = require('../controllers/Lead/postLead');
const updateLeadById = require('../controllers/Lead/updateLeadById');
const { getCLevelByNameHandler } = require('./cLevelHandlers');

const getAllLeadHandler = async (req, res) => {
	try {
		const leads = await getAllLeads();
		res.status(200).json(leads);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const postLeadHandler = async (req, res) => {
	const data = req.body;
	console.log(data);
	try {
		const lead = await postLead(data);
		res.status(200).json(data);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const updateLeadHandler = async (req, res) => {
	const id = req.params.id;
	const updatedData = req.body;

	try {
		const lead = await updateLeadById(id, updatedData);
		res.status(200).json(lead);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const getLeadByNameHandler = async (req, res) => {
	const { name } = req.query;

	try {
		const lead = await getLeadByName(name);
		res.status(200).json(lead);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const getLeadByIdHandler = async (req, res) => {
	const id = req.params.id;

	try {
		const lead = await getLeadById(id);
		res.status(200).json(lead);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

module.exports = {
	getAllLeadHandler,
	postLeadHandler,
	updateLeadHandler,
	getLeadByIdHandler,
	getLeadByNameHandler,
};
