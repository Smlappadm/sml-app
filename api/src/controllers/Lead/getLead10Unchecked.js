const Lead = require("../../models/Lead");

let leadUnchecked = [];
let limitedLeadRest = [];
let leadRest = [];

const getLead10Unchecked = async (query) => {
  if (!query.category && !query.province) {

    leadUnchecked = await Lead.find({
      corredor: query.email,
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

    leadRest = await Lead.find({
      checked: false,
      view: false,
      corredor: "",
    })
      .limit(count)
      .exec();

    limitedLeadRest = leadRest.slice(0, count);

    if (limitedLeadRest.length > 0) {
      limitedLeadRest.forEach((element) => {
        element.corredor = email;
        element.view = true;
        element.save();
      });
    }

  } else {

    await Lead.updateMany(
      { corredor: query.email },
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

    let provinceRegex = query.province
      ? new RegExp(query.province, "i")
      : /.*/;
    let categoryRegex = query.category
      ? new RegExp(query.category, "i")
      : /.*/;
    leadUnchecked = await Lead.find({
      corredor: query.email,
      checked: false,
      view: true,
      province: provinceRegex,
      category: categoryRegex,
    })
      .limit(10)
      .exec();

      
      let count;
      if (leadUnchecked.length > 0) {
      count = 10 - leadUnchecked.length;
    } else {
      count = 10;
    }

    
  
    leadRest = await Lead.find({
      checked: false,
      view: false,
      corredor: "",
      province: provinceRegex,
      category: categoryRegex,
    })
      .limit(count)
      .exec();
      
      limitedLeadRest = leadRest.slice(0, count);


    if (limitedLeadRest.length > 0) {
      limitedLeadRest.forEach((element) => {
        element.corredor = query.email;
        element.view = true;
        element.save();
      });
    }
    
  }
  console.log([...leadUnchecked, ...limitedLeadRest]);

  return [...leadUnchecked, ...limitedLeadRest];
};

module.exports = getLead10Unchecked;
