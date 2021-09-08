import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo-image" />
        <Title>TrackIt</Title>
      </Link>
      <Form>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="senha"></input>
      </Form>
      <Link to="/habits">
      <EnterButton>Entrar</EnterButton>
      </Link>
      <Link to="/register">
        <Register>Não tem uma conta? Cadastre-se!</Register>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const Title = styled.div`
  font-family: "Playball", cursive;
  font-size: 69px;
  color: #126ba5;
`;

const Logo = styled.img`
  width: 180px;
  height: 90px;
  margin-bottom: 8px;
`;

const Form = styled.div`
  width: 303px;
  margin: 0 auto;

  input {
    width: 303px;
    height: 45px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin-top: 6px;
    padding-left: 11px;
  }
`;

const EnterButton = styled.button`
  width: 303px;
  height: 45px;
  color: #ffffff;
  background-color: #52b6ff;
  border: none;
  border-radius: 5px;
  margin: 6px 0 25px 0;
  font-size: 20px;
  font-family: "Lexend Deca", sans-serif;
`;

const Register = styled.p`
  font-size: 14px;
  color: #52b6ff;
  text-decoration-line: underline;
  font-family: "Lexend Deca", sans-serif;
`;
