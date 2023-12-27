import { styled } from "@mui/material";
import React from "react";
import { Button } from "../../components/UI/button/Button";
import { Input } from "../../components/UI/input/Input";
import { LayoutAuth } from "./LayoutAuth";

export const SigUpPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <LayoutAuth>
      <Form onSubmit={handleSubmit}>
        <h2>Войти</h2>
        <Input type="text" placeholder="Напишите ваше имя" />
        <Input type="text" placeholder="Напишите вашу фамилию" />
        <Input type="number" placeholder="+996 (_ _ _) _ _  _ _  _ _" />
        <Input type="email" placeholder="Напишите email" />
        <Input type="password" placeholder="Напишите пароль" />
        <Input type="password" placeholder="Подтвердите пароль" />
        <StyledButton type="submit">Войти</StyledButton>
        <Guestion>
          У вас уже есть аккаунт?<a href=""> Войти</a>
        </Guestion>
      </Form>
    </LayoutAuth>
  );
};

const Form = styled("form")(() => ({
  width: "580px",
  padding: "50px 0",
  margin: "0 auto",
  background: "#FFF",
  borderRadius: "4px",
  boxShadow: "0px 10px 30px 0px rgba(133, 143, 164, 0.10)",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  alignItems: "center",
  justifyContent: "center",
  color: "#292929",

  "& h2": {
    fontSize: "28px",
    fontWeight: "500",
  },
}));

const StyledButton = styled(Button)(() => ({
  width: "460px",
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
