import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { postSignUp } from "../services/API"



export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");

  function CreateUser() {
    const body = {
      email,
      password,
      name,
      picture
    }

    postSignUp(body)
    .then(res => console.log(res.data))
}

  console.log(email)

  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo-image" />
        <Title>TrackIt</Title>
      </Link>
      <Form>
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
        <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password}></input>
        <input type="text" placeholder="nome" onChange={(e) => setName(e.target.value)} value={name}></input>
        <input type="text" placeholder="foto" onChange={(e) => setPicture(e.target.value)} value={picture}></input>
      </Form>
      <RegisterButton onClick={CreateUser}>Cadastrar</RegisterButton>
      <Link to="/">
        <Login>Já tem uma conta? Faça login!</Login>
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

const RegisterButton = styled.button`
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

const Login = styled.p`
  font-size: 14px;
  color: #52b6ff;
  text-decoration-line: underline;
  font-family: "Lexend Deca", sans-serif;
`;
