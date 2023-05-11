const getAllEmployees = require('../controllers/Employ/getAllEmployees');
const getEmployById = require('../controllers/Employ/getEmployById');
const getEmployByName = require('../controllers/Employ/getEmployByName');
const postEmploy = require('../controllers/Employ/postEmploy');
const updateEmployeeById = require('../controllers/Employ/updateEmployById');

const getAllEmployeesHandler = async (req, res) => {
	try {
		const employees = await getAllEmployees();
		res.status(200).json(employees);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const postEmployeeHandler = async (req, res) => {
	const data = req.body;
	console.log(data);
	try {
		const AllEmployees = await postEmploy(data);
		res.status(200).json(data);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const updateEmployeeHandler = async (req, res) => {
	const id = req.params.id;
	const updatedData = req.body;

	try {
		const employee = await updateEmployeeById(id, updatedData);
		res.status(200).json(employee);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const getEmployByNameHandler = async (req, res) => {
	const { name } = req.query;

	try {
		const employ = await getEmployByName(name);
		res.status(200).json(employ);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const getEmployByIdHandler = async (req, res) => {
	const id = req.params.id;

	try {
		const employ = await getEmployById(id);
		res.status(200).json(employ);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

module.exports = {
	postEmployeeHandler,
	getAllEmployeesHandler,
	updateEmployeeHandler,
	getEmployByIdHandler,
	getEmployByNameHandler,
};
