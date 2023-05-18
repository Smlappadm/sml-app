const Lead = require("../../models/Lead");
const Vendedor = require("../../models/Vendedor");

const updateLeadVendedorById = async (id, updatedData) => {
  console.log(updatedData.dataLead.vendedor_id);
  try {
    const lead = await Lead.findByIdAndUpdate(id, updatedData.dataLead, {
      new: true,
    });

    console.log(updatedData.dataVendedor)

    const valor = updatedData.dataVendedor

    const vendedor = await Vendedor.findByIdAndUpdate(updatedData.dataLead.vendedor_id, {
     $push: { leads_contacted: { $each: [valor] } },
    }, { 
      new: true,
    });



    // const vendedor = await Vendedor.findOne({ _id: "646569025e5d71d4bf530368"});

    // Obtener el usuario relacionado
    // const leadResult = await Lead.findOne({ vendedor_id: vendedor._id });
    // console.log(leadResult)
    // // Combinar los datos de la publicación y el usuario
    const data = {
      lead,
      vendedor
    }
    
    // Imprimir la publicación completa
    return data;
    // return lead;
  } catch (error) {
    throw new Error(`Error updating lead with id ${id}: ${error.message}`);
  }
};

module.exports = updateLeadVendedorById;

// const ArticulosConPaises = async () => {
//   const resultado = await Articulos.aggregate(
//     [
//       {
//         $lookup:
//         {
//           from: "paises",
//           localField: "origen",
//           foreignField: "_id",
//           as: "articuloPais"
//         }
//       },
//       {
//         $unwind: "$articuloPais"

//       },
//       {
//         $match: {precio: 500}
//       }
//     ]
//   );
//   console.log("**** Resultados ****", resultado)
// };
// ArticulosConPaises()



// const resultado = await Lead.aggregate([
//   {
//     $lookup: {
//       from: "vendedor",
//       localField: "name",
//       foreignField: "_id",
//       as: "leadVendedor",
//     },
//   },
//   {
//     $unwind: "$leadVendedor",
//   }
// ]);
// console.log("**** Resultados ****", resultado);
