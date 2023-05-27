const Lead = require("../../models/Lead");

const getLead10Unchecked = async () => {
  const leadUnchecked = await Lead.find({ checked: false }).limit(10).exec();
  return leadUnchecked;
};

module.exports = getLead10Unchecked;
