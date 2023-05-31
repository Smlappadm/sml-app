const Lead = require("../../models/Lead");

const findLeadVendedorName = async (name) => {
  console.log("GG");
  const regex = name ? new RegExp(name, "i") : /.*/;
  const leads = await Lead.find({
    vendedor: regex,
    checked: true,
    view: true,
  }).exec();
  return leads;
};

module.exports = findLeadVendedorName;
