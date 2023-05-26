const getAllCorredores = require("../controllers/Corredor/getAllCorredores");
const getCorredorById = require("../controllers/Corredor/getCorredorById");
const getCorredorByName = require("../controllers/Corredor/getCorredorByName");
const getValueLead = require("../controllers/Corredor/getValueLeads");
const postCorredor = require("../controllers/Corredor/postCorredor");
const putCorredorLead = require("../controllers/Corredor/putCorredorLead");
const updateCorredorById = require("../controllers/Corredor/updateCorredorById");

const getAllCorredoresHandler = async (req, res) => {
  try {
    const corredores = await getAllCorredores();
    res.status(200).json(corredores);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getValueLeadsHandler = async (req, res) => {
  try {
    const corredores = await getValueLead();
    res.status(200).json(corredores);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const postCorredorHandler = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const corredores = await postCorredor(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const putCorredorLeadHandler = async (req, res) => {
  const email = req.query.email;
  const leadUnchecked10 = req.body;

  try {
    const employ = await putCorredorLead(email, leadUnchecked10);
    res.status(200).json(employ);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateCorredorHandler = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const corredores = await updateCorredorById(id, updatedData);
    res.status(200).json(corredores);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getCorredorByNameHandler = async (req, res) => {
  const { Name } = req.query;

  try {
    const corredores = await getCorredorByName(Name);
    res.status(200).json(corredores);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getCorredorByIdHandler = async (req, res) => {
  const id = req.params.id;

  try {
    const corredores = await getCorredorById(id);
    res.status(200).json(corredores);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllCorredoresHandler,
  postCorredorHandler,
  updateCorredorHandler,
  getCorredorByIdHandler,
  getCorredorByNameHandler,
  putCorredorLeadHandler,
  getValueLeadsHandler,
};
