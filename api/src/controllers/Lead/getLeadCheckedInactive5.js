const Lead = require("../../models/Lead");

const getLeadCheckedInactive5 = async (email) => {
  console.log(email);
  const leadChequedInactive = await Lead.find({
    checked: true,
    vendedor: email,
    status: "Sin contactar",
    level: { $nin: ["incidencia", "0", "", "-"] },
  })
    .limit(5)
    .exec();

  const leadChequedInactiveNoResponde = await Lead.find({
    checked: true,
    vendedor: email,
    status: "No responde",
    level: { $nin: ["incidencia", "0", "", "-"] },
  });

  let count = 0;
  count = 5 - leadChequedInactive.length;
console.log(count)
  let leadRest = [];
  if (count > 0 && count <= 5) {
    leadRest = await Lead.find({
      checked: true,
      vendedor: "",
      status: "Sin contactar",
      level: { $nin: ["incidencia", "0", "", "-"] },
    })
      .limit(count)
      .exec();


    // if (leadRest.length > 0) {
    //   await Promise.all(
    //     leadRest.map(async (element) => {
    //       element.vendedor = email;
    //       await element.save();
    //     })
    //   );
    // }
    if (leadRest.length > 0) {
      leadRest.forEach((element) => {
        element.vendedor = email;
        element.save();
      });
    }
  }

  return [
    ...leadChequedInactive,
    ...leadRest,
    ...leadChequedInactiveNoResponde,
  ];
};

module.exports = getLeadCheckedInactive5;

// const Lead = require("../../models/Lead");

// const getCorredorLead10 = async (email) => {
//   const leadUnchecked = await Lead.find({
//     corredor: email,
//     checked: false,
//   })
//     .limit(10)
//     .exec();

//   let count = 0;
//   count = 10 - leadUnchecked.length;
//   console.log(count);

//   let leadRest = [];

//   if (count > 0 && count <= 10) {
//     const leadRest = await Lead.find({
//       checked: false,
//       corredor: "",
//     })
//       .limit(count)
//       .exec();

//     if (leadRest.length > 0) {
//       await Promise.all(
//         leadRest.map(async (element) => {
//           element.corredor = email;
//           await element.save();
//         })
//       );
//     }
//   }

//   console.log(...leadUnchecked, ...leadRest);
//   return [...leadUnchecked, ...leadRest];
// };

// module.exports = getCorredorLead10;
