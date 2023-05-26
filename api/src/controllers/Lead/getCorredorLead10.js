const Lead = require("../../models/Lead");

const getCorredorLead10 = async (email) => {
  const leads = await Lead.find({ corredor: "" }).limit(1);

  leads.forEach(async (lead) => {
    lead.corredor = email;
    await lead.save();
  });

  return leads;
};

module.exports = getCorredorLead10;
