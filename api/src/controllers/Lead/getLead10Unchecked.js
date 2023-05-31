const Lead = require("../../models/Lead");

const getLead10Unchecked = async (query) => {
  let leadUnchecked = [];
  let limitedLeadRest = [];
  let leadRest = [];

  const { email, profesion, country } = query;

  const findLeadUnchecked = async (conditions, limit) => {
    return Lead.find(conditions, null, { limit }).lean();
  };

  const updateLeadRest = async (conditions, updates) => {
    return Lead.updateMany(conditions, updates);
  };

  if (!profesion && !country) {
    leadUnchecked = await findLeadUnchecked(
      {
        corredor: email,
        checked: false,
        view: true,
      },
      10
    );

    const count = 10 - leadUnchecked.length;
    if (count > 0) {
      limitedLeadRest = await findLeadUnchecked(
        {
          checked: false,
          view: false,
          corredor: "",
        },
        count
      );

      if (limitedLeadRest.length > 0) {
        const updates = limitedLeadRest.map((element) => ({
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
      { corredor: email, checked: false },
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

    const countryRegex = country ? new RegExp(country, "i") : /.*/;
    const profesionRegex = profesion ? new RegExp(profesion, "i") : /.*/;

    leadUnchecked = await findLeadUnchecked(
      {
        corredor: email,
        checked: false,
        view: true,
        country: countryRegex,
        profesion: profesionRegex,
      },
      10
    );

    const count = 10 - leadUnchecked.length;
    if (count > 0) {
      limitedLeadRest = await findLeadUnchecked(
        {
          checked: false,
          view: false,
          corredor: "",
          country: countryRegex,
          profesion: profesionRegex,
        },
        count
      );

      if (limitedLeadRest.length > 0) {
        const updates = limitedLeadRest.map((element) => ({
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
