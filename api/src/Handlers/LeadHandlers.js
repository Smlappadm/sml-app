const getAllLeads = require("../controllers/Lead/getAllLeads");
const getLeadChecked = require("../controllers/Lead/getLeadChecked");
const getLeadById = require("../controllers/Lead/getLeadById");
const getLeadByName = require("../controllers/Lead/getLeadByName");
const postLead = require("../controllers/Lead/postLead");
const updateLeadById = require("../controllers/Lead/updateLeadById");
const getLeadUnchecked = require("../controllers/Lead/getLeadUnchecked");
const getLeadCheckedInactive100 = require("../controllers/Lead/getLeadCheckedInactive100");
const getLead10Unchecked = require("../controllers/Lead/getLead10Unchecked");
const updateLeadVendedorById = require("../controllers/Lead/updateLeadVendedorById");
const getLeadVendedorById = require("../controllers/Lead/getLeadVendedorById");
const getCorredorLead10 = require("../controllers/Lead/getCorredorLead10");

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
    res.status(200).json(leadUnchecked);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getCorredorLead10Handler = async (req, res) => {
  const { email, limit } = req.query;
  try {
    const leadCorredor = await getCorredorLead10(email, limit);
    res.status(200).json(leadCorredor);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getLead10UncheckedHandler = async (req, res) => {
  const { email } = req.query;
  try {
    const leadUnchecked = await getLead10Unchecked(email);
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

const getLeadCheckedInactive100Handler = async (req, res) => {
  try {
    const leadCheckedInactive100 = await getLeadCheckedInactive100();
    res.status(200).json(leadCheckedInactive100.slice(0, 100));
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const postLeadHandler = async (req, res) => {
  const data = req.body;
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
const updateLeadVendedorHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const lead = await updateLeadVendedorById(id, updatedData);
    res.status(200).json(lead);
  } catch (error) {
    res.status(404).json({ error: error.message });
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
const getLeadVendedorHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const lead = await getLeadVendedorById(id, updatedData);
    res.status(200).json(lead);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllLeadHandler,
  getLeadUncheckedHandler,
  getLeadCheckedHandler,
  getLeadCheckedInactive100Handler,
  postLeadHandler,
  updateLeadHandler,
  getLead10UncheckedHandler,
  getLeadByIdHandler,
  getLeadByNameHandler,
  updateLeadVendedorHandler,
  getLeadVendedorHandler,
  getCorredorLead10Handler,
};
