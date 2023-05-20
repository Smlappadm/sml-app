const { Schema, model } = require("mongoose");

const employeesSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rol: { type: String, required: true },
});

const Employees = model("Employees", employeesSchema);

module.exports = Employees;