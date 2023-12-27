import { styled } from "@mui/material";
import React from "react";
import { Button } from "../../components/UI/button/Button";
import { Input } from "../../components/UI/input/Input";
import { LayoutAuth } from "./LayoutAuth";

export const SiginPage = () => {
  return (
    <LayoutAuth>
      <Form>
        <h2>Войти</h2>
        <Input type="email" placeholder="Напишите email" />
        <Input type="password" placeholder="Напишите пароль" />
        <StyledButton type="submit">Войти</StyledButton>
        <Guestion>
          Нет аккаунта? <a href="">Зарегистрироваться</a>
        </Guestion>
      </Form>
    </LayoutAuth>
  );
};

const Form = styled("form")(() => ({
  width: "580px",
  height: "380px",
  margin: "0 auto",
  background: "#FFF",
  borderRadius: "4px",
  boxShadow: "0px 10px 30px 0px rgba(133, 143, 164, 0.10)",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "center",
  justifyContent: "center",
  color: "#292929",

  "& h2": {
    fontSize: "28px",
    fontWeight: "500",
    marginBottom: "8px",
  },
}));

const StyledButton = styled(Button)(() => ({
  width: "460px",
  marginTop: "8px",
}));

const Guestion = styled("p")(() => ({
  fontSize: "14px",
  fontWeight: "400",

  "& a": {
    color: "#2C68F5",
    fontWeight: "600",
    textDecoration: "none",
  },
}));
