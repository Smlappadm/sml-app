import React, { useState } from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    _id,
    name,
    category,
    level,
    email,
    instagram,
    telephone,
    city,
    province,
    url
  } = props


  const [filledEmail, setFilledEmail] = useState(email || "")
  const [filledInstagram, setFilledInstagram] = useState(instagram || "")
  const [filledTelephone, setFilledTelephone] = useState(telephone || "")
  const [filledLevel, setFilledLevel] = useState(level || "");
  const [filledUrl, setfilledUrl] = useState(level || "");

  const [inputVisibility, setInputVisibility] = useState({
    email: false,
    instagram: false,
    telephone: false,
    level: false,
    url: false
  })

  const handleEmailChange = (event) => {
    const updatedValue = event.target.value;
    const newValue = updatedValue !== "" ? updatedValue : email;
    setFilledEmail(newValue);
  }

  const handleInstagramChange = (event) => {
    const updatedValue = event.target.value;
    const newValue = updatedValue !== "" ? updatedValue : instagram;
    setFilledInstagram(newValue);
  }

  const handleTelephoneChange = (event) => {
    const updatedValue = event.target.value;
    const newValue = updatedValue !== "" ? updatedValue : telephone;
    setFilledTelephone(newValue);
  }

  const handleUrlChange = (event) => {
    const updatedValue = event.target.value;
    const newValue = updatedValue !== "" ? updatedValue : url;
    setfilledUrl(newValue);
  }

  const handleLevelChange = () => {
    setInputVisibility((prevState) => ({
      ...prevState,
      level: true,
    }))
  }

  const handleClose = () => {
    // Reset form values
    setFilledEmail(email || "");
    setFilledInstagram(instagram || "");
    setFilledTelephone(telephone || "");
    setFilledLevel(level || "");
    setfilledUrl(url || "");
  
    // Reset input visibility
    setInputVisibility({
      email: false,
      instagram: false,
      telephone: false,
      level: false,
      url: false
    });
  
    // Close the modal
    props.handleClose();
  };

  const handleFixClick = () => {
    const updatedData = {
      email: filledEmail,
      instagram: filledInstagram,
      telephone: filledTelephone,
      level: filledLevel,
      url: filledUrl
    }

    axios
      .put(`lead/${_id}`, updatedData)
      .then((response) => {
        console.log("Datos actualizados correctamente:", response.data)
        toast.success("✔ Lead Update!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark", 
          onClose: handleClose
        });
      })
      .catch((error) => {
        console.error("Error al actualizar los datos:", error)
        alert("Error updating data. Please try again.");
      })
  }

  return (
    
    <div>
      <ToastContainer />
      <Modal
        open={props.open}
        onClose={handleClose}
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
              <hr className="border-gray-400 w-5/6 text-center" />
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
            {!inputVisibility.level ? (
              <div className="font-semibold flex gap-3">
                <p>NIVEL: </p>
                <p className="font-normal">{level}</p>
                <button onClick={handleLevelChange} className="font-semibold">
                  Change
                </button>
              </div>
            ) : (
              <div className="font-semibold flex gap-3">
                <p>NIVEL: </p>
                <input
                  type="text"
                  value="-"
                  disabled
                  className="font-normal"
                />
              </div>
            )}
            {!inputVisibility.email ? (
              <div className="font-semibold flex gap-3">
                <p>EMAIL: </p>
                <p className="font-normal">{email}</p>
                <button
                  onClick={() =>
                    setInputVisibility({ ...inputVisibility, email: true })
                  }
                >
                  Change
                </button>
              </div>
            ) : (
              <div className="font-semibold flex gap-3">
                <p>EMAIL: </p>
                <input
                  type="text"
                  value={filledEmail}
                  onChange={handleEmailChange}
                  className="font-normal bg-gray-600"
                />
              </div>
            )}
            {!inputVisibility.instagram ? (
              <div className="font-semibold flex gap-3">
                <p>INSTAGRAM: </p>
                <p className="font-normal">{instagram}</p>
                <button
                  onClick={() =>
                    setInputVisibility({ ...inputVisibility, instagram: true })
                  }
                >
                  Change
                </button>
              </div>
            ) : (
              <div className="font-semibold flex gap-3">
                <p>INSTAGRAM: </p>
                <input
                  type="text"
                  value={filledInstagram}
                  onChange={handleInstagramChange}
                  className="font-normal bg-gray-600"
                />
              </div>
            )}
            {!inputVisibility.telephone ? (
              <div className="font-semibold flex gap-3">
                <p>TELEFONO: </p>
                <p className="font-normal">{telephone}</p>
                <button
                  onClick={() =>
                    setInputVisibility({ ...inputVisibility, telephone: true })
                  }
                >
                  Change
                </button>
              </div>
            ) : (
              <div className="font-semibold flex gap-3">
                <p>TELEFONO: </p>
                <input
                  type="text"
                  value={filledTelephone}
                  onChange={handleTelephoneChange}
                  className="font-normal bg-gray-600"
                />
              </div>
            )}
            <div className="font-semibold flex gap-3">
              <p>WEB: </p>
              <div className="font-semibold flex gap-3">
  {!inputVisibility.url ? (
    <p className="font-normal truncate text-white w-48 overflow-hidden overflow-ellipsis" title={url}>
      {url}
    </p>
  ) : (
    <input
      type="text"
      value={filledUrl}
      onChange={handleUrlChange}
      className="font-normal bg-gray-600"
    />
  )}
  {!inputVisibility.url && (
    <button
      onClick={() => setInputVisibility({ ...inputVisibility, url: true })}
      className="text-white"
    >
      Change
    </button>
  )}
</div>
            </div>


            <div>
              <button onClick={handleFixClick} className="bg-blue-500 w-44 h-9 flex justify-center items-center text-white rounded-md text-10 ml-[350px]">
                FIX
              </button>
            </div>

          </div>
        </Box>
      </Modal>
    </div>
  )
}




