import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./Input.scss";
export function CustomInput(props) {
  const { label, onChange, value, error, type } = props;

  return (
    <div className="custom-input-container">
      <TextField
        type={type}
        error={error === "" ? false : true}
        sx={{ width: "100%" }}
        margin="dense"
        value={value}
        onChange={onChange}
        id="outlined-basic"
        label={label}
        variant="outlined"
      />
      <span className="form-input-errors">{error && error}</span>
    </div>
  );
}

export function PasswordInput(props) {
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const { label, placeHolder, onChange, value, error } = props;
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="custom-input-container">
      <TextField
        type={values.showPassword ? "text" : "password"}
        error={error === "" ? false : true}
        sx={{ width: "100%" }}
        margin="dense"
        value={value}
        onChange={onChange}
        id="outlined-basic"
        label={label}
        variant="outlined"
      />

      <div className="passowrd-eye">
        <InputAdornment sx={{ width: "100%" }}>
          <IconButton
            sx={{ width: "100%" }}
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {values.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      </div>

      <span className="form-input-errors">{error && error}</span>
    </div>
  );
}
