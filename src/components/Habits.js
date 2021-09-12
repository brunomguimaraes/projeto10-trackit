import React, { useState, useContext } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import Bottom from "./Bottom";
import Header from "./Header";
import UserContext from "../contexts/UserContext";
import { postCreateHabit } from "../services/API";
import { useHistory } from "react-router-dom";

export default function Habits() {
  const days = [
    {
      name: "D",
      id: 7,
      isSelected: false,
    },
    {
      name: "S",
      id: 1,
      isSelected: false,
    },
    {
      name: "T",
      id: 2,
      isSelected: false,
    },
    {
      name: "Q",
      id: 3,
      isSelected: false,
    },
    {
      name: "Q",
      id: 4,
      isSelected: false,
    },
    {
      name: "S",
      id: 5,
      isSelected: false,
    },
    {
      name: "S",
      id: 6,
      isSelected: false,
    },
  ];
  const [habitName, setHabitName] = useState("");
  const [startHabitCreation, setStartHabitCreation] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const user = useContext(UserContext);

  function startCreation() {
    setStartHabitCreation(true);
  }

  function cancelCreation() {
    setStartHabitCreation(false);
  }

  function selectDay(day) {
    if (selectedDays.includes(day.id)) {
      day.isSelected = false;
      const filteredDays = selectedDays.filter((d) => d !== day.id);
      setSelectedDays(filteredDays);
    } else {
      day.isSelected = true;
      setSelectedDays([...selectedDays, day.id]);
    }
    console.log(selectedDays);
  }

  function CreateHabit(event) {
    event.preventDefault();
    setLoading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const body = {
      name: `${habitName}`,
      days: selectedDays,
    };

    postCreateHabit(body, config)
      .then((res) => {
        console.log("criar hábito", res.data);
        setLoading(false);
        setHabitName("");
        setSelectedDays([]);
        history.push("/habits");
      })
      .catch(() => {
        alert(
          "Ocorreu um erro durante a criação do seu hábito. Por favor, repita o procedimento."
        );
        setLoading(false);
        setHabitName("");
        setSelectedDays([]);
      });
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
          <HabitCreationForm
            startHabitCreation={startHabitCreation}
            onSubmit={CreateHabit}
          >
            <HabitNameInput
              type="text"
              placeholder="nome do hábito"
              onChange={(e) => setHabitName(e.target.value)}
              value={habitName}
              required
              disabled={loading ? true : false}
            ></HabitNameInput>
            <Weekdays>
              {days.map((day) => (
                <CreateHabitDay
                  key={day.id}
                  onClick={() => selectDay(day)}
                  selectedDay={selectedDays.find((d) =>
                    d === day.id ? true : false
                  )}
                >
                  {day.name}
                </CreateHabitDay>
              ))}
            </Weekdays>
            <Buttons>
              <Cancel
                type="button"
                onClick={cancelCreation}
                disabled={loading ? true : false}
              >
                Cancelar
              </Cancel>
              <Save type={"submit"} disabled={loading ? true : false}>
                {loading ? (
                  <Loader
                    type="ThreeDots"
                    color="#ffffff"
                    height={80}
                    width={80}
                    timeout={5000}
                  />
                ) : (
                  "Salvar"
                )}
              </Save>
            </Buttons>
          </HabitCreationForm>
          <SingleHabitBox>
            <Icon>
              <ion-icon name="trash-outline"></ion-icon>
            </Icon>
            <Name>Ler 1 capítulo de livro</Name>
            <HabitWeekdays>
              {days.map((day, index) => (
                <Day key={index}> {day.name} </Day>
              ))}
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

  &:disabled {
    opacity: 0.5;
  }
`;

const Weekdays = styled.div`
  width: calc(100% - 36px);
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
`;

const HabitWeekdays = Weekdays;

const CreateHabitDay = styled.div`
  color: ${(props) => (props.selectedDay ? "#ffffff" : "#dbdbdb")};
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
  background-color: ${(props) => (props.selectedDay ? "#cfcfcf" : "#FFFFFF")};

  &:hover {
    background-color: #cfcfcf;
    color: #ffffff;
    cursor: pointer;
  }
`;

const Day = styled.div`
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
`;

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

  &:disabled {
    opacity: 0.5;
  }
`;

const Save = styled.button`
  color: #ffffff;
  background-color: #52b6ff;
  width: 84px;
  height: 35px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    filter: brightness(108%);
  }

  &:disabled {
    opacity: 0.5;
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
