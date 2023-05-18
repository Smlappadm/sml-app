const Lead = require("../../models/Lead");
const Vendedor = require("../../models/Vendedor");

const getLeadVendedorById = async (id, updatedData) => {
  console.log("entro2");
  try {
    const lead = await Lead.findByIdAndUpdate(id, updatedData, {
      new: true,
    });



    const vendedor = await Vendedor.findOne({ _id: "646569025e5d71d4bf530368"});

    // Obtener el usuario relacionado
    const leadResult = await Lead.find({ vendedor_id: vendedor._id });
    console.log(leadResult)
    // // Combinar los datos de la publicación y el usuario
    const data = {
      lead: leadResult,
      Vendedor_Name: vendedor.name,
    };
    
    // Imprimir la publicación completa
    return data;







    // return lead;
  } catch (error) {
    throw new Error(`Error updating lead with id ${id}: ${error.message}`);
  }
};

module.exports = getLeadVendedorById;