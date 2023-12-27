import React, { forwardRef } from "react";
import { Checkbox, styled } from "@mui/material";

export const CheckBox = forwardRef(({ checked, onChange, ...props }, ref) => {
  return (
    <StyledCheckbox
      ref={ref}
      checked={checked}
      onChange={onChange}
      {...props}
    />
  );
});

const StyledCheckbox = styled(Checkbox)(() => ({
  width: "20px",
  height: "20px",
  "&.Mui-checked": {
    color: "#CB11AB",
  },
}));
