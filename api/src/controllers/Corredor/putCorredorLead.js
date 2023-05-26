const Corredor = require("../../models/Corredor");

const putCorredorLead = async (email, leadUnchecked10) => {
  try {
    const corredor = await Corredor.findOneAndUpdate(
      { email },
      { $push: { leads: leadUnchecked10 } }, // Utiliza $push para agregar el nuevo lead al array "leads"
      { new: true } // Asegúrate de obtener el documento actualizado
    );
    console.log("Información del lead agregada correctamente:", corredor);
    return corredor;
  } catch (error) {
    console.error("Error al agregar información del lead:", error);
    throw error;
  }
};

module.exports = putCorredorLead;
