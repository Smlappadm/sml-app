const postEmployees = require("../controllers/Employees/postEmployees");
const getAllEmployees = require("../controllers/Employees/getAllEmployees");

const postEmployeesHandler = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const employees = await postEmployees(data);
    res.status(200).json(employees);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getEmployeesHandler = async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getEmployeesHandler, postEmployeesHandler };