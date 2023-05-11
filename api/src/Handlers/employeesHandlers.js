const getAllEmployees = require("../controllers/getAllEmployees");
const postEmploy = require("../controllers/postEmploy");

const getAllEmployeesHandler = async (req, res) => {
  try {
    const AllEmployees = await getAllEmployees();
    res.status(200).json(AllEmployees);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const postEmployeesHandler = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const AllEmployees = await postEmploy(data);

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getAllEmployeesHandler, postEmployeesHandler };
