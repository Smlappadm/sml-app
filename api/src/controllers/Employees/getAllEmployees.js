require('dotenv').config();
const {} = process.env;
const Employees = require('../../models/Employees');

const getAllEmployees = async () => {
    const employee = await Employees.find();
    return employee;
  };

module.exports = getAllEmployees;


