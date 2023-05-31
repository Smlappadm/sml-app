const Lead = require("../../models/Lead");

const getAllLeads = async () => {
  const leads = await Lead.find({ checked: false, view: false });
  return leads;
};

module.exports = getAllLeads;
