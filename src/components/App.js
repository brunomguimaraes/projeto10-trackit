import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../css/reset.css";
import Habits from "./Habits";
import HabitsToday from "./HabitsToday";
import History from "./History";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import UserContext from "../contexts/UserContext";
import DailyProgressContext from "../contexts/DailyProgressContext";

export default function App() {
  const [user, setUser] = useState(null);
  const [dailyProgress, setDailyProgress] = useState(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/sign-up">
            <SignUpPage />
          </Route>
          <DailyProgressContext.Provider value={{dailyProgress, setDailyProgress}}>
            <Route exact path="/habits">
              <Habits />
            </Route>
            <Route exact path="/today">
              <HabitsToday />
            </Route>
            <Route exact path="/history">
              <History />
            </Route>
          </DailyProgressContext.Provider>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
