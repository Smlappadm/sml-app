const Lead = require("../../models/Lead");

const getLead10Unchecked = async (email) => {
  const leadUnchecked = await Lead.find({
    corredor: email,
    checked: false,
    view: true,
  })
    .limit(10)
    .exec();

  let count;
  if (leadUnchecked.length > 0) {
    count = 10 - leadUnchecked.length;
  } else {
    count = 10;
  }

  const leadRest = await Lead.find({
    checked: false,
    view: false,
    corredor: "",
  })
    .limit(count)
    .exec();

  const limitedLeadRest = leadRest.slice(0, count);

  if (limitedLeadRest.length > 0) {
    limitedLeadRest.forEach((element) => {
      element.corredor = email;
      element.view = true;
      element.save();
    });
  }

  return [...leadUnchecked, ...limitedLeadRest];
};

module.exports = getLead10Unchecked;
