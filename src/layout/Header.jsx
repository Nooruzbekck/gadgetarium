import { styled } from "@mui/material";
import React from "react";
import {
  BasketHeader,
  CubeButton,
  Faceebok,
  Gadjetatuim,
  HeartHeader,
  Instagram,
  ShoppingCard,
  Users,
  Watsapp,
} from "../assets";
import { Button } from "../components/UI/button/Button";
import { Input } from "../components/UI/input/Input";

export const Header = ({ message = 100 }) => {
  const count = message < 100 ? message : 99;
  return (
    <StyledHeader>
      <Container>
        <ContainerFirst>
          <ContainerLogo>
            <GadjetariumD src="../../public/gadgetarium-logo.png" alt="" />
            <TextLogo src={Gadjetatuim} />
          </ContainerLogo>
          <ContainerFirstNav>
            <a href="#">Главная</a>
            <a href="#">O магазине</a>
            <a href="#">Доставка</a>
            <a href="#">FAG</a>
            <a href="#">Контакты</a>
          </ContainerFirstNav>
          <ContainerPhoneUser>
            <PhoneUser>+996 (400) 00-00-00</PhoneUser>
            <img src={Users} alt="" />
          </ContainerPhoneUser>
        </ContainerFirst>
        <ContainerSecond>
          <Button>
            <img src={CubeButton} alt="" />
            Каталог
          </Button>
          <Input placeholder="Поиск по каталогу магазина" type="search" />
          <SocialNetwork>
            <a href="#">
              <img src={Faceebok} alt="" />
              <i>{count}</i>
            </a>
            <a href="#">
              <img src={Instagram} alt="" />
              <i>{count}</i>
            </a>
            <a href="#">
              <img src={Watsapp} alt="" />
              <i>{count}</i>
            </a>
          </SocialNetwork>
          <SocialNetwork>
            <a href="#">
              <img src={ShoppingCard} alt="" />
              <i>{count}</i>
            </a>
            <a href="#">
              <img src={HeartHeader} alt="" />
              <i>{count}</i>
            </a>
            <a href="#">
              <i>{count}</i>

              <img src={BasketHeader} alt="" />
            </a>
          </SocialNetwork>
        </ContainerSecond>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")(() => ({
  height: "173px",
  background: "#1A1A25",
}));

const Container = styled("div")(() => ({
  width: "90%",
  margin: "0 auto",
}));

const ContainerFirst = styled("section")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid gray",
  height: "75.5px",
}));

const ContainerLogo = styled("div")(() => ({
  display: "flex",
  gap: "5px",
  cursor: "pointer",
}));

const TextLogo = styled("img")(() => ({
  width: "150px",
}));

const GadjetariumD = styled("img")(() => ({
  width: "35px",
  height: "35px",
}));

const ContainerFirstNav = styled("nav")(() => ({
  display: "flex",
  gap: "8px",
  "& a": {
    padding: "12px 14px",
    borderRadius: "4px",
    color: "#FFF",
    fontSize: "16px",
    fontWeight: "400",
    textDecoration: "none",
    ":hover": {
      background: "rgba(133, 143, 164, 0.15)",
    },
  },
}));

const PhoneUser = styled("p")(() => ({
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: "500",
  paddingTop: "2px",
}));

const ContainerPhoneUser = styled("div")(() => ({
  display: "flex",
  gap: "25px",
}));

// second container

const ContainerSecond = styled("section")(() => ({
  display: "flex",
  height: "96.5px",
  alignItems: "center",
  justifyContent: "space-between",
}));

const SocialNetwork = styled("div")(() => ({
  display: "flex",
  gap: "24px",

  "& a": {
    position: "relative",
  },

  "& i": {
    position: "absolute",
    top: "-9px",
    right: "-9px",
    background: "#F10000",
    borderRadius: "100%",
    padding: "2px 3px",
    color: "#FFFF",
    fontSize: "14px",
    fontWeight: "800px",
  },
}));
