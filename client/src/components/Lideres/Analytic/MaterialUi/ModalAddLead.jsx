import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddLeads } from "../../../../redux/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  textAlign: "center",
  color: "white",
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: "20px",
};

export default function ChildModal() {
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && containerRef.current) {
      inputRef.current.addEventListener("input", handleInput);
    }

    return () => {
      if (inputRef.current && containerRef.current) {
        inputRef.current.removeEventListener("input", handleInput);
      }
    };
  }, []);

  const handleInput = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [body, setBody] = useState([]);
  const [eventBody, setEventBody] = useState([]);
  const dispatch = useDispatch();
  const OnchangeTextArea = (event) => {
    setEventBody(event);
  };
  const onClickAdd = () => {
    setBody(() => {
      let updatedBody = eventBody;
      const trimmedData = updatedBody.trim();
      const dataWithoutCommas = trimmedData.replace(/,\s*$/, "");
      const objectsArray = dataWithoutCommas.split("},");
      const formattedArray = objectsArray.map((obj, index) => {
        if (index === objectsArray.length - 1) {
          return `${obj.trim()}`;
        } else {
          return `${obj.trim()}}`;
        }
      });
      const dataArray = formattedArray.map((objStr) => JSON.parse(objStr));
      dispatch(AddLeads(dataArray));
      return updatedBody;
    });
  };
  return (
    <React.Fragment>
      <Button variant="contained" sx={{}} onClick={handleOpen}>
        Añadir Clientes
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: "30%",
            backgroundColor: "#39394b",
            height: "700px",
          }}
        >
          <div className="flex flex-col gap-5 p-8 h-full ">
            <h2>Añadir Clientes</h2>
            <label>json</label>
            <div className="flex flex-col h-full text-black">
              <textarea
                onChange={(event) => {
                  OnchangeTextArea(event.target.value);
                }}
                ref={inputRef}
                type="array"
                style={{
                  width: "100%",
                  height: "400px",
                  color: "black",
                  textAlign: "start",
                  fontSize: "13px",
                  backgroundColor: "transparent",
                  border: "1px solid white",
                }}
                placeholder="Agregar json de clientes"
              />
            </div>
            <div>
              <Button
                variant="contained"
                sx={{
                  width: "50px",
                }}
                onClick={() => onClickAdd(eventBody)}
              >
                Add
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
