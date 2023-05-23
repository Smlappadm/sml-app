import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "rgb(55 65 81)",
  boxShadow: 24,
  p: 4,
  textColor: "white",
  color: "white",
  height: 700,
  borderRadius: "20px",
};

export default function BasicModal(props) {
  const {
    name,
    category,
    level,
    email,
    instagram,
    telephone,
    status,
    city,
    province,
    corredor,
    vendedor,
    op,
  } = props;

  // State variables to track the filled values
  const [filledEmail, setFilledEmail] = useState(email || "");
  const [filledInstagram, setFilledInstagram] = useState(instagram || "");
  const [filledTelephone, setFilledTelephone] = useState(telephone || "");
  const [filledOp, setFilledOp] = useState(op || "");
  const [filledLevel, setFilledLevel] = useState(level || "");

  const handleEmailChange = (e) => {
    setFilledEmail(e.target.value);
  };

  const handleInstagramChange = (e) => {
    setFilledInstagram(e.target.value);
  };

  const handleTelephoneChange = (e) => {
    setFilledTelephone(e.target.value);
  };

  const handleOpChange = (e) => {
    setFilledOp(e.target.value);
  };

  const handleLevelClick = () => {
    setFilledLevel("");
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(00, 00, 00, 0.3)",
          },
        }}
      >
        <Box sx={style}>
          <div className="flex flex-col justify-between h-full">
            <div className="font-semibold flex flex-col gap-3 items-center text-24 mb-5">
              <h1>{name} </h1>
              <hr className=" border-gray-400 w-5/6 text-center" />
            </div>
            <div className="font-semibold flex gap-3">
              <p>CATEGORIA: </p>
              <p className="font-normal">{category} </p>
            </div>
            <div className="font-semibold flex gap-3">
              <p>CIUDAD: </p>
              <p className="font-normal">
                {province}, {city}{" "}
              </p>
            </div>
            {level ? (
              <div className="font-semibold flex gap-3">
                <p>NIVEL: </p>
                <p className="font-normal">{level} </p>
              </div>
            ) : (
              <div className="font-semibold flex gap-3">
                <p>NIVEL: </p>
                <p className="font-normal" onClick={handleLevelClick}>
                  {filledLevel}
                </p>
              </div>
            )}
            {email === "" ? (
              <div className="font-semibold flex gap-3">
                <p>EMAIL: </p>
                <input
                  type="text"
                  value={filledEmail}
                  onChange={handleEmailChange}
                  className="font-normal"
                />
              </div>
            ) : (
              <div className="font-semibold flex gap-3">
                <p>EMAIL: </p>
                <p className="font-normal">{email}</p>
              </div>
            )}
            <div className="font-semibold flex gap-3">
              <p>INSTAGRAM: </p>
              {instagram ? (
                <p className="font-normal">{instagram}</p>
              ) : (
                <input
                  type="text"
                  value={filledInstagram}
                  onChange={handleInstagramChange}
                  className="font-normal"
                />
              )}
            </div>
            <div className="font-semibold flex gap-3">
              <p>TELEFONO: </p>
              {telephone ? (
                <p className="font-normal">{telephone}</p>
              ) : (
                <input
                  type="text"
                  value={filledTelephone}
                  onChange={handleTelephoneChange}
                  className="font-normal"
                />
              )}
            </div>
            <div className="font-semibold flex gap-3">
              <p>CORREDOR: </p>
              <p className="font-normal">{corredor}</p>
            </div>
            <div className="font-semibold flex gap-3">
              <p>VENDEDOR: </p>
              <p className="font-normal">{vendedor}</p>
            </div>
            <div className="font-semibold flex gap-3">
              <p>ESTADO: </p>
              <p className="font-normal">{status} </p>
            </div>
            <div className="font-semibold flex gap-3">
              <p>DETALLE: </p>
              {op ? (
                <p className="font-normal">{op}</p>
              ) : (
                <input
                  type="text"
                  value={filledOp}
                  onChange={handleOpChange}
                  className="font-normal"
                />
              )}
            </div>
            <button className="bg-blue-500 w-44 h-9 flex justify-center items-center text-white rounded-md text-10">
              FIX
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}