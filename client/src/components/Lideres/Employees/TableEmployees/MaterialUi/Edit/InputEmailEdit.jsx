import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputEmailEdit({
  itemEmail,
  inputEmail,
  setInputEmail,
}) {
  const handleChange = (event) => {
    setInputEmail(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "50%",
        maxWidth: "100%",
        color: "white",
      }}
    >
      <TextField
        fullWidth
        label={itemEmail}
        id={itemEmail}
        value={inputEmail}
        onChange={handleChange}
        InputProps={{
          style: {
            color: "white",
          },
        }}
        InputLabelProps={{
          style: {
            color: "white",
          },
        }}
      />
    </Box>
  );
}
