import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import BasicSelect from "./BasicSelect";
import InputName from "./InputName";
import InputEmail from "./InputEmail";
import axios from "axios";

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

function ChildModal({ inputName, inputEmail, selectEmployees, handleReset }) {
  const [open, setOpen] = React.useState(false);
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
        url = "http://localhost:3001/clevel";
        break;
      case "leader":
        url = "http://localhost:3001/leader";
        break;
      case "corredor":
        url = "http://localhost:3001/corredor";
        break;
      case "vendedor":
        url = "http://localhost:3001/vendedor";
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
      });
      console.log(response.data);
    } catch (error) {
      console.log(`No se pudo enviar el post de ${selectEmployees}`);
    }

    try {
      const responseEmployees = await axios.post(
        "http://localhost:3001/employees",
        {
          name: inputName,
          email: inputEmail,
          rol: selectEmployees,
        }
      );
      console.log(responseEmployees.data);
    } catch (error) {
      console.log(`No se pudo enviar el post de Employees`);
    }
    // handleReset();
    setOpen(false);
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
            <div className="flex flex-col gap-2 justify-center items-start">
              <p id="child-modal-description">Name: {inputName}</p>
              <p id="child-modal-description">Email: {inputEmail}</p>
              <p id="child-modal-description">Rol: {selectEmployees}</p>
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

export default function NestedModal(name, email, employees) {
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
              <select name="" id="">
                <option value="leader">leader</option>
                <option value="corredor">corredor</option>
                <option value="vendedor">vendedor</option>
              </select>
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
          />
        </Box>
      </Modal>
    </div>
  );
}
