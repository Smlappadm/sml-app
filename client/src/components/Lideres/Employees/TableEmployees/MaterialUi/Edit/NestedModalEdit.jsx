import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InputEmailEdit from "./InputEmailEdit";
import InputNameEdit from "./InputNameEdit";
import InputPhoneEdit from "./InputPhoneEdit";
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

function ChildModal({ inputName, inputEmail, inputPhone, itemRol, itemId }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleCreate = async () => {
    alert("se inicia el cambio");
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
    console.log(itemId);
    console.log(itemRol);
    console.log(inputName);
    console.log(inputEmail);
    console.log(inputPhone);

    try {
      const response = await axios.put(
        `http://localhost:3001/${itemRol}/${itemId}`,
        {
          name: inputName,
          email: inputEmail,
          contactNumber: inputPhone,
        }
      );
      alert("cambiado con exito");
      console.log(response.data);
    } catch (error) {
      console.log(`No se pudo enviar el post de ${itemRol}`);
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        sx={{ marginTop: "2rem" }}
        onClick={handleOpen}
      >
        Update Employ
      </Button>
      <Modal
        open={open}
        onClose={handleCreate}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "20%", backgroundColor: "#39394b" }}>
          <h2 id="child-modal-title">Confirm employee update</h2>
          <Button variant="contained" onClick={handleCreate}>
            Update Employ
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModalEdit({
  itemId,
  itemName,
  itemEmail,
  itemPhone,
  itemRol,
}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  const handleOpen = () => {
    setInputName(itemName);
    setInputEmail(itemEmail);
    setInputPhone(itemPhone);
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>...</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "30%", height: "40%", bgcolor: "#39394b" }}>
          <div>
            <div className="flex flex-col gap-5 my-5">
              <h2 id="parent-modal-title">Edit Employ {inputName}</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <InputNameEdit
                inputName={inputName}
                setInputName={setInputName}
              />
              <InputPhoneEdit
                inputPhone={inputPhone}
                setInputPhone={setInputPhone}
              />
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <ChildModal
              inputName={inputName}
              inputEmail={inputEmail}
              inputPhone={inputPhone}
              itemRol={itemRol}
              itemId={itemId}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
