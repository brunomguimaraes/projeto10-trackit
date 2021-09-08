import React from "react";
import styled from "styled-components";

export default function Bottom() {
  return (
    <BottomContainer>
      <BottomBox>
        <Habits>Hábitos</Habits>
        <Today>Hoje</Today>
        <History>Histórico</History>
      </BottomBox>
    </BottomContainer>
  );
}

const BottomContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #126ba5;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const BottomBox = styled.div`
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Habits = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-size: 18px;
  color: #52b6ff;
`;

const Today = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-size: 18px;
  color: #ffffff;
  background-color: #52b6ff;
  height: 91px;
  width: 91px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 45px;
`;

const History = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-size: 18px;
  color: #52b6ff;
`;
