const Lead = require("../../models/Lead");
const Vendedor = require("../../models/Vendedor");

const getLeadVendedorById = async (id, updatedData) => {
  
  // Obtener el usuario relacionado
  const leadResult = await Lead.findOne({ _id: id });
  const vendedor = await Vendedor.findOne({ email: leadResult.vendedor});

    // // Combinar los datos de la publicación y el usuario
    const data = {
      lead: leadResult,
      Vendedor_Name: {
        name: vendedor.name,
        email: vendedor.email,
        _id: vendedor._id
      }
    };
    
    // Imprimir la publicación completa
    return data;

};

module.exports = getLeadVendedorById;