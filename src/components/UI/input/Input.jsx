import React, { useState } from "react";
import { InputAdornment, IconButton, styled, TextField } from "@mui/material";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";

export const Input = ({ type, value, placeholder, onChange, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === "password";
  const isSearchType = type === "search";

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {isPasswordType || isSearchType ? (
        <StyledInput
          type={isPasswordType && showPassword ? "text" : type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
          InputProps={{
            endAdornment: isPasswordType ? (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
                </IconButton>
              </InputAdornment>
            ) : isSearchType ? (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <StyledRiSearch2Line />
                </IconButton>
              </InputAdornment>
            ) : (
              {}
            ),
          }}
        />
      ) : (
        <StyledInput
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
      )}
    </div>
  );
};

const StyledInput = styled(TextField)(({ error, type }) => ({
  width: "460px",
  height: "46px",
  border: `1px solid ${
    error ? "#F10000" : type === "search" ? "white" : "#CDCDCD"
  }`,
  borderRadius: type === "search" ? "10px" : "6px",
  background: type === "search" ? "#1A1A25" : "#F6F6F6",
  paddingLeft: "10px",
  display: "flex",
  justifyContent: "center",
  color: "white",
  "& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active":
    {
      WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
      WebkitTransitionDelay: "9999s",
    },
  ".MuiInputBase-input": {
    color: type === "search" ? "#FFFF" : "#91969E",
    fontSize: "16px",
    fontWeight: "400",
    position: "relative",
  },
  "& fieldset": { border: "none" },
  "& ::-webkit-input-placeholder": {
    color: "#FFFF",
  },
  "input[type='search']::-webkit-search-cancel-button": {
    display: "none",
  },

  "input::-webkit-outer-spin-button,input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: "0",
  },
}));

const StyledRiSearch2Line = styled(RiSearch2Line)(() => ({
  color: "#FFFF",
  paddingRight: "2px",
}));
