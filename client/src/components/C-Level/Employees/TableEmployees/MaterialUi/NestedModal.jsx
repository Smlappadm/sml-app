import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import BasicSelect from "./BasicSelect";
import InputName from "./InputName";
import InputEmail from "./InputEmail";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  getAllClevel,
  getAllCorredores,
  getAllLeader,
  getAllVendedores,
} from "../../../../../redux/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  textAlign: "center",
  color: "white",
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({
  inputName,
  inputEmail,
  selectEmployees,
  handleReset,
  CreateEmployees,
  ErrorCreateEmployees,
}) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleCreate = async () => {
    if (!inputName) {
      alert("El campo Name es requerido");
      setOpen(false);
      return;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!inputEmail || !emailRegex.test(inputEmail)) {
      alert("El campo Email debe ser un correo electrónico válido");
      setOpen(false);
      return;
    }

    if (!selectEmployees) {
      alert("El campo Employees es obligatorio");
      setOpen(false);
      return;
    }

    let url;
    switch (selectEmployees) {
      case "clevel":
        url = "/clevel";
        break;
      case "leader":
        url = "/leader";
        break;
      case "corredor":
        url = "/corredor";
        break;
      case "vendedor":
        url = "/vendedor";
        break;
      default:
        alert("El campo 'rol' no es válido");
        return;
    }

    try {
      const response = await axios.post(url, {
        name: inputName,
        email: inputEmail,
        rol: selectEmployees,
        deleted: false,
      });
      CreateEmployees(inputName);
      console.log(response.data);
    } catch (error) {
      ErrorCreateEmployees(inputName);
      console.log(`No se pudo enviar el post de ${selectEmployees}`);
    }

    try {
      const emailData = {
        clientName: inputName,
        recipientEmail: inputEmail,
        message: `Hola ${inputName}, te damos la bienvenida a nuestra empresa. ¡Esperamos que tengas una gran experiencia trabajando con nosotros!`,
      };

      const response = await axios.post(
        "/corredor/sendHiringEmail",
        // "http://localhost:3001/corredor/sendHiringEmail",
        emailData
      );
      console.log(response.data);
      console.log("Correo electrónico de contratación enviado correctamente");
    } catch (error) {
      console.error(
        "Error al enviar el correo electrónico de contratación:",
        error.message
      );
    }

    try {
      const responseEmployees = await axios.post(
        "/employees",
        {
          name: inputName,
          email: inputEmail,
          rol: selectEmployees,
          deleted: false,
        }
      );
      console.log(responseEmployees.data);
    } catch (error) {
      console.log(`No se pudo enviar el post de Employees`);
    }

    dispatch(getAllCorredores());
    dispatch(getAllVendedores());
    dispatch(getAllLeader());
    dispatch(getAllClevel());
    setOpen(false);
    handleReset();
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        sx={{ marginTop: "2rem" }}
        onClick={handleOpen}
      >
        Create Employ
      </Button>
      <Modal
        open={open}
        onClose={handleCreate}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "20%", backgroundColor: "#39394b" }}>
          <div className="flex flex-col gap-5 p-8">
            <h2 id="child-modal-title">Confirm employee creation</h2>
            <div className="flex flex-col gap-2 justify-start items-start">
              <h2 id="child-modal-description">Name</h2>
              <p id="child-modal-description">{inputName}</p>
              <h2 id="child-modal-description">Email</h2>
              <p id="child-modal-description">{inputEmail}</p>
              <h2 id="child-modal-description">Rol</h2>
              <p id="child-modal-description">{selectEmployees}</p>
            </div>
            <p id="child-modal-description">
              Are you sure about creating this employee?
            </p>
            <Button variant="contained" onClick={handleCreate}>
              Create Employ
            </Button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({ CreateEmployees, ErrorCreateEmployees }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [selectEmployees, setSelectEmployees] = useState("");

  const handleReset = () => {
    setInputName("");
    setInputEmail("");
    setSelectEmployees("");
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add Employees
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "30%", height: "50%", bgcolor: "#39394b" }}>
          <div>
            <div className="flex flex-col gap-5 my-5">
              <h2 id="parent-modal-title">New Employees</h2>
              <p id="parent-modal-description">Employee registration</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <InputName name={inputName} setName={setInputName} />
              <InputEmail email={inputEmail} setEmail={setInputEmail} />

              <BasicSelect
                employees={selectEmployees}
                setEmployees={setSelectEmployees}
              />
            </div>
          </div>
          <ChildModal
            inputName={inputName}
            inputEmail={inputEmail}
            selectEmployees={selectEmployees}
            handleReset={handleReset}
            CreateEmployees={CreateEmployees}
            ErrorCreateEmployees={ErrorCreateEmployees}
          />
        </Box>
      </Modal>
    </div>
  );
}
