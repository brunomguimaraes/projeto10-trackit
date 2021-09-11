import React, { useState } from "react";
import styled from "styled-components";
import Bottom from "./Bottom";
import Header from "./Header";

export default function Habits() {
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [habitName, setHabitName] = useState("");
  const [startHabitCreation, setStartHabitCreation] = useState(false);

  function startCreation() {
    setStartHabitCreation(true);
  }

  function cancelCreation() {
    setStartHabitCreation(false);
  }

  return (
    <>
      <Header />
      <HabitsContainer>
        <HabitsBox>
          <Top>
            <Title>Meus Hábitos</Title>
            <AddHabitButton onClick={startCreation}>+</AddHabitButton>
          </Top>
          <HabitCreationForm startHabitCreation={startHabitCreation}>
            <HabitNameInput
              type="text"
              placeholder="nome do hábito"
              onChange={(e) => setHabitName(e.target.value)}
              value={habitName}
              required
            ></HabitNameInput>
            <Weekdays>
              <Day7>D</Day7>
              <Day1>S</Day1>
              <Day2>T</Day2>
              <Day3>Q</Day3>
              <Day4>Q</Day4>
              <Day5>S</Day5>
              <Day6>S</Day6>
            </Weekdays>
            <Buttons>
              <Cancel type="button" onClick={cancelCreation}>
                Cancelar
              </Cancel>
              <Save type={"submit"}>Salvar</Save>
            </Buttons>
          </HabitCreationForm>
          <SingleHabitBox>
            <Icon>
              <ion-icon name="trash-outline"></ion-icon>
            </Icon>
            <Name>Ler 1 capítulo de livro</Name>
            <HabitWeekdays>
              <Day7>D</Day7>
              <Day1>S</Day1>
              <Day2>T</Day2>
              <Day3>Q</Day3>
              <Day4>Q</Day4>
              <Day5>S</Day5>
              <Day6>S</Day6>
            </HabitWeekdays>
          </SingleHabitBox>
          <DefaultMessage>
            Você não tem nenhum hábito cadastrado ainda. Adicone um hábito para
            começar a trackear!
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
`;

const Top = styled.div`
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 22px;
`;

const Title = styled.div`
  color: #126ba5;
`;

const AddHabitButton = styled.button`
  background-color: #52b6ff;
  width: 40px;
  height: 35px;
  border-radius: 5px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(108%);
    cursor: pointer;
  }
`;

const DefaultMessage = styled.div`
  font-size: 18px;
  color: #666666;
  margin-top: 28px;
  line-height: 23px;
`;

const HabitCreationForm = styled.form`
  width: calc((100vw - 36px));
  height: 180px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-top: 20px;
  display: ${(props) => (props.startHabitCreation ? "inherit" : "none")};
`;

const HabitNameInput = styled.input`
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  width: calc(100% - 36px);
  height: 45px;
  margin: 18px 18px 8px 18px;
  color: #666666;
  padding-left: 11px;
  font-size: 20px;

  ::placeholder {
    color: #dbdbdb;
  }

  :focus {
    outline: none;
  }
`;

const Weekdays = styled.div`
  width: calc(100% - 36px);
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
`;

const HabitWeekdays = Weekdays;

const Day1 = styled.div`
  color: #dbdbdb;
  font-size: 20px;
  text-align: center;
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-right: 4px;

  :hover {
    background-color: #cfcfcf;
    color: #ffffff;
    cursor: pointer;
  }
`;

const Day2 = Day1;
const Day3 = Day1;
const Day4 = Day1;
const Day5 = Day1;
const Day6 = Day1;
const Day7 = Day1;

const Buttons = styled.div`
  font-size: 16px;
  width: calc(100% - 36px);
  display: flex;
  justify-content: flex-end;
  margin-top: 29px;
  margin-left: 18px;
`;

const Cancel = styled.button`
  color: #52b6ff;
  margin-right: 8px;
  background-color: #ffffff;
  height: 35px;
  border-radius: 5px;
  width: 84px;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

const Save = styled.button`
  color: #ffffff;
  background-color: #52b6ff;
  width: 84px;
  height: 35px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    filter: brightness(108%);
  }
`;

const SingleHabitBox = styled.div`
  width: calc((100vw - 36px));
  height: 91px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-top: 20px;
  margin-bottom: 10px;
  display: ${1 > 0 ? "inherit" : "none"};
  position: relative;
`;
const Name = styled.p`
  color: #666666;
  font-size: 20px;
  line-height: 25px;
  padding-left: 18px;
  margin-bottom: 8px;
  padding-top: 13px;
`;

const Icon = styled.div`
  width: 13px;
  height: 13px;
  background-color: #ffffff;
  position: absolute;
  top: 11px;
  right: 10px;

  :hover {
    cursor: pointer;
  }
`;
