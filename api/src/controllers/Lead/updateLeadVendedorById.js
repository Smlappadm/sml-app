const Lead = require("../../models/Lead");

const updateLeadVendedorById = async (id, updatedData) => {
  console.log("entro2");
  try {
    const lead = await Lead.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    const resultado = await Lead.aggregate([
      {
        $lookup: {
          from: "vendedor",
          localField: "name",
          foreignField: "_id",
          as: "leadVendedor",
        },
      },
      {
        $unwind: "$leadVendedor",
      }
    ]);
    console.log("**** Resultados ****", resultado);

    return lead;
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
