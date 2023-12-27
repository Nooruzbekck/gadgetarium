import { styled } from "@mui/material";
import React from "react";
import { GadjetatuiLogo, Gadjetatuim } from "../../assets";

export const LayoutAuth = ({ children }) => {
  return (
    <Container>
      <WrapperImage>
        <FirstImageLogo src={GadjetatuiLogo} alt="" />
        <Gadget src={Gadjetatuim} alt="" />
      </WrapperImage>
      {children}
    </Container>
  );
};

const Container = styled("div")(() => ({
  width: "100%",
  height: "100vh",
  background: "linear-gradient(107deg, #6B0FA9 13.93%, #4D0EB8 94.5%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const WrapperImage = styled("div")(() => ({
  position: "absolute",
  top: "20px",
  left: "10px",
  display: "flex",
  gap: "5px",
}));

const FirstImageLogo = styled("img")(() => ({
  width: "50px",
  hieght: "50px",
}));

const Gadget = styled("img")(() => ({
  width: "170px",
  height: "50px",
}));
