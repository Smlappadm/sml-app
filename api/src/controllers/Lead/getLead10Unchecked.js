const Lead = require("../../models/Lead");


const getLead10Unchecked = async (email) => {
 

  const leadUnchecked = await Lead.find({
    corredor: email,
    checked: false,
    view: false,
  })
    .limit(1)
    .exec();

  let count = 0;
  count = 10 - leadUnchecked.length;

  const leadRest = await Lead.find({
    checked: false,
    view: false,
    corredor: "",
  })
    .limit(count)
    .exec();

  if (leadRest.length > 0) {
    leadRest.forEach((element) => {
      element.corredor = email;
      element.save();
    });
  }

  return [...leadUnchecked, ...leadRest];

};

module.exports = getLead10Unchecked;

// const emailProp = email.email;
// const leadChequedInactive = await Lead.find({
//   checked: true,
//   vendedor: emailProp,
//   status: "Sin contactar",
//   level: { $nin: ["incidencia", "0", "", "-"] },
// })
//   .limit(5)
//   .exec();

// const leadChequedInactiveNoResponde = await Lead.find({
//   checked: true,
//   vendedor: emailProp,
//   $or: [{ status: "No responde" }],
//   level: { $nin: ["incidencia", "0", "", "-"] },
// });

// let count = 0;

// count = 5 - leadChequedInactive.length;
// console.log(count);

// const leadRest = await Lead.find({
//   checked: true,
//   vendedor: "",
//   status: "Sin contactar",
//   level: { $nin: ["incidencia", "0", "", "-"] },
// })
//   .limit(count)
//   .exec();

// if (leadRest.length > 0) {
//   leadRest.forEach((element) => {
//     element.vendedor = emailProp;
//     element.save();
//   });
// }

// return [
//   ...leadChequedInactive,
//   ...leadRest,
//   ...leadChequedInactiveNoResponde,
// ];
