import { Button as MuiButton, styled } from "@mui/material";
import React from "react";

export const Button = ({ onClick, children, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)(props => ({
  padding: props.padding || "10px 19px",
  background: "#CB11AB",
  borderRadius: "4px",
  color: "#FFFFFF",
  textTransform: "none",
  fontWeight: props.fontWeight || "600",
  fontSize: props.fontSize || "16px",
  display: "flex",
  gap: "10px",
  ":hover": {
    background: "#CB11AB",
    webkitBoxShadow: "-2px -1px 19px -1px rgba(0,0,0,0.73)",
    mozBoxShadow: "-2px -1px 19px -1px rgba(0,0,0,0.73)",
    boxShadow: "-2px -1px 19px -1px rgba(0,0,0,0.73)",
  },
}));
