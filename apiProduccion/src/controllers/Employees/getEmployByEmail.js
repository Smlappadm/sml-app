const Employees = require("../../models/Employees");

const getEmployeesByEmail = async (Email) => {
  const regex = new RegExp(Email, "i"); // 'i' indica que la búsqueda es insensible a mayúsculas y minúsculas
  const employ = await Employees.find({ email: { $regex: regex } });
  return employ;
};

module.exports = getEmployeesByEmail;
