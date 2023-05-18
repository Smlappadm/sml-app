import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall(props) {
  const handleChange = props.onChange;

  return (
    <FormControl
      sx={{
        m: 1,
        width: "20%",
        height: "33px",
        margin: "0px 0px",
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "white", // Cambiar el color del borde aquí
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "white", // Cambiar el color del borde al pasar el cursor aquí
        },
        "&.focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "green", // Cambiar el color del borde cuando está enfocado aquí
        },
      }}
      size="small"
    >
      <InputLabel id="demo-select-small-label" style={{ color: "gray" }}>
        Estado
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="status"
        value={props.value}
        label="status"
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        sx={{
          color: "white",
          "& .MuiSelect-icon": {
            color: "white", // Cambiar el color de la flecha aquí
          },
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="contratado">Contratado</MenuItem>
        <MenuItem value="rechazado">Rechazado</MenuItem>
        <MenuItem value="sin-contactar">Sin Contratar</MenuItem>
        <MenuItem value="no-responde">No Responde</MenuItem>
      </Select>
    </FormControl>
  );
}
