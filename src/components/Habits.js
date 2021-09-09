import React from "react";
import styled from "styled-components";
import Bottom from "./Bottom";
import Header from "./Header";

export default function Habits() {
  return (
    <>
      <Header />
      <HabitsContainer>
        <HabitsBox>
          <Top>
            <Title>Meus Hábitos</Title>
            <AddHabitButton>+</AddHabitButton>
          </Top>
          <DefaultMessage>
            Você não tem nenhum hábito cadastrado ainda. Adicone um hábito para começar a trackear!
          </DefaultMessage>
        </HabitsBox>
          

      </HabitsContainer>

      <Bottom />
    </>
  );
}

const HabitsContainer = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 100vh;
  margin-top: 70px;
  margin-bottom: 70px;
`;

const HabitsBox = styled.div`
  width: calc((100vw - 36px));
  font-family: "Lexend Deca", sans-serif;
  margin: 0 auto;
`

const Top = styled.div`
  font-size: 23px;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 22px;
`

const Title = styled.div`
  color: #126BA5;
`

const AddHabitButton = styled.button`
  background-color: #52B6FF;
  width: 40px;
  height: 35px;
  border-radius: 5px;
  color: #FFFFFF;
`

const DefaultMessage = styled.div`
  font-size: 18px;
  color: #666666;
  margin-top: 28px;
  line-height: 23px;
`
