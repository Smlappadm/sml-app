const Lead = require("../../models/Lead");

const getCorredorLead10 = async (email) => {
  const leadUnchecked = await Lead.find({
    corredor: email,
    checked: false,
  })
    .limit(10)
    .exec();

  let count = 0;
  count = 10 - leadUnchecked.length;
  console.log(count);

  let leadRest = [];

  if (count > 0 && count <= 10) {
    const leadRest = await Lead.find({
      checked: false,
      corredor: "",
    })
      .limit(count)
      .exec();

    if (leadRest.length > 0) {
      await Promise.all(
        leadRest.map(async (element) => {
          element.corredor = email;
          await element.save();
        })
      );
    }
  }

  console.log(...leadUnchecked, ...leadRest);
  return [...leadUnchecked, ...leadRest];
};

module.exports = getCorredorLead10;

// const Lead = require("../../models/Lead");

// const getCorredorLead10 = async (email) => {
//     const leads = await Lead.find({ corredor: "" }).limit(10);

//     leads.forEach(async (lead) => {
//       lead.corredor = email;
//       await lead.save();
//     });

//     return leads;
//   };

//   const leadUnchecked = await Lead.find({
//     corredor: email,
//     checked: false,
//   }).limit(10);

//   let count = 0;
//   count = 10 - leadUnchecked.length;
//   console.log(count);

//   let leadRest = [];

//   if (count > 0 && count <= 10) {
//     leadRest = await Lead.find({
//       checked: false,
//       corredor: "" || "undefined",
//     })
//       .limit(count)
//       .exec();
//     console.log(leadRest);

//     if (leadRest.length > 0) {
//       leadRest.forEach((element) => {
//         element.corredor = email;
//         element.save();
//       });
//     }
//   }

//   return [...leadUnchecked, ...leadRest];
// };

// module.exports = getCorredorLead10;
