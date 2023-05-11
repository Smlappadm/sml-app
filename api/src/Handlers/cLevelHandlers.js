const getAllCLevels = require('../controllers/CLevel/getAllCLevels');
const getCLevelById = require('../controllers/CLevel/getCLevelById');
const getCLevelByName = require('../controllers/CLevel/getCLevelByName');
const postCLevel = require('../controllers/CLevel/postCLevel');
const updateCLevelById = require('../controllers/CLevel/updateCLevelById');

const getAllCLeveslHandler = async (req, res) => {
	try {
		const cLevels = await getAllCLevels();
		res.status(200).json(cLevels);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const postCLevelHandler = async (req, res) => {
	const data = req.body;
	console.log(data);
	try {
		const CLevels = await postCLevel(data);
		res.status(200).json(data);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const updateCLevelHandler = async (req, res) => {
	const id = req.params.id;
	const updatedData = req.body;

	try {
		const cLevel = await updateCLevelById(id, updatedData);
		res.status(200).json(cLevel);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const getCLevelByNameHandler = async (req, res) => {
	const { name } = req.query;

	try {
		const cLevel = await getCLevelByName(name);
		res.status(200).json(cLevel);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const getCLevelByIdHandler = async (req, res) => {
	const id = req.params.id;

	try {
		const cLevel = await getCLevelById(id);
		res.status(200).json(cLevel);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

module.exports = {
	getAllCLeveslHandler,
	postCLevelHandler,
	updateCLevelHandler,
	getCLevelByIdHandler,
	getCLevelByNameHandler,
};
