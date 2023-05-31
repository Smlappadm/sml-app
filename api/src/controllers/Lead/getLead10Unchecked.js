const Lead = require("../../models/Lead");

const getLead10Unchecked = async (query) => {
  let leadUnchecked = [];
  let limitedLeadRest = [];
  let leadRest = [];

  const { email, category, province } = query;

  const findLeadUnchecked = async (conditions, limit) => {
    return Lead.find(conditions, null, { limit }).lean();
  };

  const updateLeadRest = async (conditions, updates) => {
    return Lead.updateMany(conditions, updates);
  };

  if (!category && !province) {
    leadUnchecked = await findLeadUnchecked({
      corredor: email,
      checked: false,
      view: true,
    }, 10);

    const count = 10 - leadUnchecked.length;
    if (count > 0) {
      limitedLeadRest = await findLeadUnchecked({
        checked: false,
        view: false,
        corredor: "",
      }, count);

      if (limitedLeadRest.length > 0) {
        const updates = limitedLeadRest.map(element => ({
          updateOne: {
            filter: { _id: element._id },
            update: { corredor: email, view: true },
          },
        }));

        await Lead.bulkWrite(updates);
      }
    }
  } else {
    await updateLeadRest(
      { corredor: email },
      {
        $set: {
          level: "",
          status: "Sin contactar",
          status_op: "",
          llamados: 0,
          vendedor: "",
          vendedor_name: "",
          corredor: "",
          corredor_name: "",
          checked: false,
          view: false,
          deleted: false,
          instagram: "",
        },
      }
    );

    const provinceRegex = province ? new RegExp(province, "i") : /.*/;
    const categoryRegex = category ? new RegExp(category, "i") : /.*/;

    leadUnchecked = await findLeadUnchecked({
      corredor: email,
      checked: false,
      view: true,
      province: provinceRegex,
      category: categoryRegex,
    }, 10);

    const count = 10 - leadUnchecked.length;
    if (count > 0) {
      limitedLeadRest = await findLeadUnchecked({
        checked: false,
        view: false,
        corredor: "",
        province: provinceRegex,
        category: categoryRegex,
      }, count);

      if (limitedLeadRest.length > 0) {
        const updates = limitedLeadRest.map(element => ({
          updateOne: {
            filter: { _id: element._id },
            update: { corredor: email, view: true },
          },
        }));

        await Lead.bulkWrite(updates);
      }
    }
  }

  return [...leadUnchecked, ...limitedLeadRest];
};

module.exports = getLead10Unchecked;
