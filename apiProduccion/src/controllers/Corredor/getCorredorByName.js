const Corredor = require("../../models/Corredor");

const getCorredorByName = async (name) => {
  const regex = new RegExp(name, "i");
  const corredor = await Corredor.find({ name: { $regex: regex } });
  return corredor;
};

module.exports = getCorredorByName;
