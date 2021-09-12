import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";
import Bottom from "./Bottom";
import Header from "./Header";

export default function HabitsToday() {
  const day = (dayjs().date());
  const month = ((dayjs().month())) + 1;
  const year = (dayjs().year())
  const numberWeekday = (dayjs().day())
  let weekday = "";

  switch (numberWeekday) {
    case 0: 
      weekday = "Domingo";  
      break;
      case 1: 
      weekday = "Segunda";  
      break;
      case 2: 
      weekday = "Terça";  
      break;
      case 3: 
      weekday = "Quarta";  
      break;
      case 4: 
      weekday = "Quinta";  
      break;
      case 5: 
      weekday = "Sexta";  
      break;
      case 6: 
      weekday = "Sábado";  
      break;
  
    default: weekday = "";
      break;
  }

  console.log(`${weekday}, ${day}/${month}/${year}`)
  return (
    <>
      <Header />
      <Container>
        <TodayHeader>
          <Weekday>{`${weekday}, ${day}/${month}/${year}`}</Weekday>
          <TodayMessage>{"Nenhum hábito concluído ainda"}</TodayMessage>
        </TodayHeader>
        <HabitBox>
          <Info>
            <HabitName>{"Ler capítulo do livro mágico"}</HabitName>
            <Sequency>Sequência atual: {3} dias</Sequency>
            <Record>Seu recorde: {3} dias</Record>
          </Info>
          <Check>
            <ion-icon name="checkbox"></ion-icon>
          </Check>
        </HabitBox>
      </Container>
      <Bottom />
    </>
  );
}

const Container = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 100vh;
  margin-top: 70px;
  margin-bottom: 70px;
  font-family: "Lexend Deca", sans-serif;
`;

const TodayHeader = styled.div`
  width: calc((100vw - 36px));
  border-radius: 5px;
  padding-top: 28px;
  margin-left: 18px;
`;

const Weekday = styled.div`
  font-size: 23px;
  color: #126ba5;
  line-height: 29px;
`;
const TodayMessage = styled.div`
  font-size: 18px;
  color: #bababa;
  line-height: 23px;
`;

const HabitBox = styled.div`
  width: calc((100vw - 36px));
  height: 94px;
  border-radius: 5px;
  background-color: #ffffff;
  margin: 28px auto 19px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
`;

const HabitName = styled.p`
  color: #666666;
  font-size: 20px;
  margin-bottom: 7px;
`;

const Sequency = styled.p`
  color: #666666;
  font-size: 13px;
`;

const Record = Sequency;

const Check = styled.div`
  margin-right: 8px;
  ion-icon {
    color: #ebebeb;
    border-radius: 5px;
    width: 69px;
    height: 69px;
    
    :hover {
      color: #8fc549;
      cursor: pointer;
    }
  }
`;
