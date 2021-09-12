import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);
  return promise;
}

function postCreateHabit(body, config) {
  const promise = axios.post(`${BASE_URL}/habits`, body, config)
  return promise;
}

function getListHabits(config) {
  const promise = axios.get(`${BASE_URL}/habits`, config)
  return promise;
}

export { postLogin, postSignUp, postCreateHabit, getListHabits };
