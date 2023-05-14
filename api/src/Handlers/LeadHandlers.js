const getAllLeads = require('../controllers/Lead/getAllLeads');
const getLeadChecked = require('../controllers/Lead/getLeadChecked');
const getLeadById = require('../controllers/Lead/getLeadById');
const getLeadByName = require('../controllers/Lead/getLeadByName');
const postLead = require('../controllers/Lead/postLead');
const updateLeadById = require('../controllers/Lead/updateLeadById');
const getLeadUnchecked = require('../controllers/Lead/getLeadUnchecked');

const getAllLeadHandler = async (req, res) => {
	try {
		const lead = await getAllLeads();
		res.status(200).json(lead);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};
const getLeadUncheckedHandler = async (req, res) => {
	try {
		const leadUnchecked = await getLeadUnchecked();
		res.status(200).json(leadUnchecked.slice(0, 10));
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const getLeadCheckedHandler = async (req, res) => {
	try {
		const leadChequed = await getLeadChecked();
		res.status(200).json(leadChequed);
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
	try {
		const id = req.params.id;
		const updatedData = req.body;
		const lead = await updateLeadById(id, updatedData);
		res.status(200).json(lead);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const updateMultipleLeadsHandler = async (req, res) => {
	const leadsToUpdate = req.body.leadsToUpdate;
	const updatedData = req.body.updatedData;
	try {
		const updatedLeads = await updateMultipleLeads(leadsToUpdate, updatedData);
		res.status(200).json(updatedLeads);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const getLeadByNameHandler = async (req, res) => {
	const { Name } = req.query;

	try {
		const lead = await getLeadByName(Name);
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
	getLeadUncheckedHandler,
	getLeadCheckedHandler,
	postLeadHandler,
	updateLeadHandler,
	updateMultipleLeadsHandler,
	getLeadByIdHandler,
	getLeadByNameHandler,
};
