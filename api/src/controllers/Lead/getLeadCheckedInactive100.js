const Lead = require("../../models/Lead");

const getLeadCheckedInactive100 = async () => {
  const leadChequedInactive = await Lead.find({
    checked: true,
    status: "Sin contactar",
  })
    .limit(100)
    .exec();
  return leadChequedInactive;
};

module.exports = getLeadCheckedInactive100;
