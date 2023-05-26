const Lead = require("../../models/Lead");

const getLead10Unchecked = async (email, limit) => {
  const leadUnchecked = await Lead.find({
    corredor: email,
    checked: false,
  })
    .limit(limit)
    .exec();
  return leadUnchecked;
};

module.exports = getLead10Unchecked;
