import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../css/reset.css";
import Habits from "./Habits";
import HabitsToday from "./HabitsToday";
import History from "./History";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import UserContext from "../contexts/UserContext";

export default function App() {
  const [user, setUser] = useState(null);
  const [dailyProgress, setDailyProgress] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginPage setUser={setUser} />
          </Route>
          <Route exact path="/sign-up">
            <SignUpPage />
          </Route>
          <Route exact path="/habits">
            <Habits />
          </Route>
          <Route exact path="/today">
            <HabitsToday setDailyProgress={setDailyProgress}/>
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
