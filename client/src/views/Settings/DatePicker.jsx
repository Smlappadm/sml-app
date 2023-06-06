import * as React from 'react';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label=""
          value={selectedDate}
          onChange={handleChange}
          sx={{
            width: 350,
            borderRadius: 5,
            backgroundColor: "#39394B",
            color: "white",

            "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input":
              {
                color: "white",
              },
            "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
              color: "white",
            },

            "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
                backgroundColor: "#222131",
              color: "white",
              border: "1px solid white",
              borderRadius: "15px"
            },
            "& .css-1cb9e0w-MuiFormControl-root-MuiTextField-root .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
                backgroundColor: "#222131",
              color: "white",
              border: "1px solid white",
              borderRadius: "15px"
            },


            "& .css-i4bv87-MuiSvgIcon-root": {
              color: "white",
            },
          }}

        //   value={selectedDate}
        //   onChange={handleDateChange}

          renderInput={(params) => (
            <input
              {...params.inputProps}
              value={selectedDate ? selectedDate.format('DD/MM/YYYY') : ''}
              readOnly
              placeholder="Fecha de nacimiento"
            />
          )}
          format="DD/MM/YYYY"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}