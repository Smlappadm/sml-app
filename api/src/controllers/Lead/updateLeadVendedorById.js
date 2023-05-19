const Lead = require("../../models/Lead");
const Vendedor = require("../../models/Vendedor");

const updateLeadVendedorById = async (id, updatedData) => {
  // console.log(updatedData.dataLead);
    const lead = await Lead.findByIdAndUpdate(id, updatedData.dataLead, {
      new: true,
    });

    const valor = updatedData.dataVendedor;
    console.log(updatedData.dataLead.status);

    let property = "";
    if (updatedData.dataLead.status === "Contratado") {
      property = "leads_contacted";
    } else if (updatedData.dataLead.status === "Rechazado") {
      property = "declined_leads";
    } else if (updatedData.dataLead.status === "No responde") {
      property = "unanswered_leads";
    } else {
      property = "hired_leads";
    }

    const vendedor = await Vendedor.findOneAndUpdate(
      { email: updatedData.dataLead.vendedor },
      { $push: { [property]: { $each: [valor] } } },
      { new: true }
    );

    const data = {
      lead,
      vendedor,
    };

    // Imprimir la publicación completa
    return data;
    // return lead;

};

module.exports = updateLeadVendedorById;

