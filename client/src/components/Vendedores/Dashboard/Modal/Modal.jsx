import * as React from "react";
import axios from "axios";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CiWarning, CiEdit } from "react-icons/ci";
import { useUser } from "@clerk/clerk-react";

import "moment/locale/es";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#39394B",
  border: "none",
  boxShadow: 24,
  pt: 4,
  px: 6,
  pb: 4,
};

function ChildModal({
  item,
  setOpen,
  statusObj,
  SendLeadAlert,
  SendErrorUpdateAlert,
  updateLeads,
}) {
  const [openChild, setOpenChild] = React.useState(false);
  const user = useUser().user;
  const { emailAddress } = user.primaryEmailAddress;
  const handleOpen = () => {
    setOpenChild(true);
  };
  const handleClose = () => {
    setOpenChild(false);
  };

  const handleUpdate = () => {
    let dataVendedor = {};
    if (statusObj.status === "No responde") {
      dataVendedor = {
        lead: item.name,
        status: statusObj.status,
        status_op: statusObj.status_op,
      };
    } else {
      dataVendedor = {
        lead: item.name,
        status: statusObj.status,
        status_op: statusObj.status_op,
      };
    }

    // console.log(dataVendedor.llamados)

    const dataLead = {
      status: statusObj.status,
      status_op: statusObj.status_op,
      vendedor: emailAddress,
      llamados: item.llamados,
    };
    const dataUpdate = {
      dataLead,
      dataVendedor,
    };

    axios
      .put(`http://localhost:3001/lead/vendedor/${item._id}`, dataUpdate)
      .then((response) => {
        // Si la respuesta es exitosa, redirige a otra página
        if (response.data.title) {
          updateLeads();
          setOpen(false);
        }
        SendLeadAlert();
      })
      .catch((error) => {
        // Si hay un error, muestra un mensaje de error
        SendErrorUpdateAlert();
      });
    setOpenChild(false);
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="flex justify-around items-center">
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={handleCancel}
        >
          Close x
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleOpen}
        >
          Save Changes
        </button>
      </div>
      <Modal
        open={openChild}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 500,
            backgroundColor: "#39394B",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h2 id="child-modal-title" className="text-white text-center">
            Update the lead?
          </h2>
          <div className="flex justify-around items-center m-5">
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleClose}
            >
              No
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleUpdate}
            >
              Yes
            </button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
function IncidenceModal({ setOpen, SendIncidenceAlert }) {
  const [openIncidenceChild, setOpenIncidenceChild] = React.useState(false);
  const handleOpen = () => {
    // setOpenChild(true);
  };
  const handleClose = () => {
    setOpenIncidenceChild(false);
  };
  const confirmSendIncidence = () => {
    // setOpenChild(false);
    setOpen(false);
    // SendLeadAlert();
    SendIncidenceAlert();
  };
  const handleCancel = () => {
    // setOpen(false);
  };

  const sendIncidence = () => {
    setOpenIncidenceChild(true);
  };
  return (
    <React.Fragment>
      <div className="flex justify-around items-center">
        <CiWarning
          className="text-[#ffffff] p-0 text-[35px] font-bold cursor-pointer"
          onClick={sendIncidence}
        />
      </div>
      <Modal
        open={openIncidenceChild}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 500,
            backgroundColor: "#39394B",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h2 id="child-modal-title" className="text-white text-center mb-5">
            Send Incidence?
          </h2>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Observation"
            className="bbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
          <div className="flex justify-around items-center m-5">
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleClose}
            >
              No
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={confirmSendIncidence}
            >
              Yes
            </button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({
  item,
  SendLeadAlert,
  SendIncidenceAlert,
  SendErrorUpdateAlert,
  updateLeads,
}) {
  const [open, setOpen] = React.useState(false);

  const [statusObj, setStatusObj] = React.useState({
    status: item.status,
    status_op: item.status_op,
    llamados: item.llamados,
  });

  useEffect(() => {
    setStatusObj({
      ...statusObj,
      status: item.status,
    });
    // if(statusObj.status === "No responde" || statusObj.status === "Sin contratar") {
    //   setStatusObj({
    //     ...statusObj,
    //     status: statusObj.status,
    //     status_op: ""

    //   });
    // }
  }, [setStatusObj]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    const property = event.target.name;
    if (value === "No responde" || value === "Sin contactar") {
      setStatusObj({
        ...statusObj,
        [property]: value,
        status_op: "",
      });
    } else if (value === "Contratado") {
      setStatusObj({
        ...statusObj,
        [property]: value,
        status_op: "",
      });
    } else {
      setStatusObj({ ...statusObj, [property]: value });
    }
  };

  // console.log(item.updatedAt)
  const formattedUpdate = () => {
    let fechaYear = "";
    let fechaMonth = "";
    let fechaDay = "";
    let time = "";
    for (let i = 0; i < item.updatedAt.length; i++) {
      if (i < 4) {
        fechaYear += item.updatedAt[i];
      } else if (i >= 5 && i < 7) {
        fechaMonth += item.updatedAt[i];
      } else if (i >= 8 && i < 10) {
        fechaDay += item.updatedAt[i];
      }
      if (i >= 11 && i < 19) {
        time += item.updatedAt[i];
      }
    }

    return (
      <p htmlFor="" className="text-white m-2">
        {`Date: ${fechaDay}/${fechaMonth}/${fechaYear} - Hour: ${time}`}
      </p>
    );
  };

  return (
    <div>
      <CiEdit
        className="bg-[#6254ff] text-1 text-white w-10 h-8 rounded-md cursor-pointer"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 550, height: 480, borderRadius: 5 }}>
          <div className="w-full flex justify-center items-center mt-3 mb-10">
            <h2 id="parent-modal-title" className="text-center text-white">
              {item.name}
            </h2>
            <div className="flex flex-col absolute right-4 top-4">
              <div className="bg-[#8d8b0c] text-[#e8e8e9] w-[40px] rounded-md h-9 text-[35px] drop-shadow-xl hover:bg-[#c94219] ">
                <IncidenceModal
                  setOpen={setOpen}
                  SendIncidenceAlert={SendIncidenceAlert}
                />
              </div>
            </div>
            {/* <div className="mt-2">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>

              <input
                type="text"
                id="last_name"
                className="bbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder={item.email}
                placeholder={item.email}
                value={item.email}
                required
                disabled
              />
            </div> */}
            {/* <div className="mt-5">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Instagram
              </label>
              <input
                type="text"
                id="last_name"
                className="bbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder={item.email}
                placeholder={item.instagram}
                value={item.instagram}
                required
                disabled
              />
            </div> */}
            {/* <div className="mt-5">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                type="text"
                id="last_name"
                className="bbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder={item.email}
                placeholder={item.telephone}
                value={item.telephone}
                required
                disabled
              />
            </div> */}
          </div>

          <div className="h-52 flex items-center justify-start flex-col mb-10">
            <div className="">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                onChange={handleSelectChange}
                name="status"
                defaultValue={statusObj.status}
                id="select1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {/* <option selected>Choose a country</option> */}
                <option value="Sin contactar">Sin Contactar</option>
                <option value="Contratado">Contratado</option>
                <option value="Rechazado">Rechazadado</option>
                <option value="No responde">No Responde</option>
              </select>
            </div>
            {statusObj.status === "Rechazado" && (
              <div className="m-5">
                <label
                  htmlFor="Motivo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Motivo
                </label>
                <select
                  id="Motivo"
                  onChange={handleSelectChange}
                  name="status_op"
                  defaultValue={statusObj.status_op ? statusObj.status_op : "default"}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {/* <option selected>Choose a country</option> */}
                  <option disabled="disabled" value="default">
                    Elige uno...
                  </option>
                  <option value="Sin dinero">Sin Dinero</option>
                  <option value="Sin interes">Sin Interes</option>
                  <option value="Otro servicio">Otro Servicio</option>
                  {/* <option value="Otro servicio">Sin respuesta - 3 llamados</option> */}
                  {/* <option value="DE">Germany</option> */}
                </select>
              </div>
            )}
            {statusObj.status === "Contratado" && (
              <div className="flex flex-col justify-center items-center mt-5">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm text-center font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <div className="flex justify-center items-center">
                  <label htmlFor="" className="text-white m-2">
                    USD
                  </label>
                  <input
                    onChange={handleSelectChange}
                    type="text"
                    id="last_name"
                    name="status_op"
                    // defaultValue={item.status_op}
                    value={statusObj.status_op}
                    className="bbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // placeholder={item.email}
                    placeholder=""
                    // value="USD"
                    required
                  />
                </div>
              </div>
            )}
            {item.llamados > 0 && statusObj.status === "No responde" && (
              <div className="flex flex-col justify-center items-center mt-5">
                <div className="flex justify-center items-center flex-col">
                  <p htmlFor="" className="text-white m-2">
                    {`Llamados: ${item.llamados}`}
                  </p>
                  {formattedUpdate()}
                </div>
              </div>
            )}
          </div>

          <div className="">
            <ChildModal
              item={item}
              statusObj={statusObj}
              setOpen={setOpen}
              SendLeadAlert={SendLeadAlert}
              SendErrorUpdateAlert={SendErrorUpdateAlert}
              updateLeads={updateLeads}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
