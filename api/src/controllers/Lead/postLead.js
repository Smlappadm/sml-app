const Lead = require("../../models/Lead");

const postLead = async (data) => {
  const client = await data.map(
    ({ City, Province, Name, Category, email, Telephone, Url }) => {
      const lead = Lead.create({
        name: Name,
        category: Category,
        city: City,
        province: Province,
        url: Url ? Url : "-",
        telephone: Telephone ? Telephone : "-",
        email: email ? email : "-",
        instagram: "",
        level: "-",
        status: "Sin contactar",
        statusoptions: "",
        vendedor_id:"",
        corredor_id:"",
        checked: false,
        view: false,
        deleted: false,
      });
      return lead;
    }
  );
  return client;
};

module.exports = postLead;
