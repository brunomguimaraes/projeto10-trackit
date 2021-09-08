import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../css/reset.css";
import Habits from "./Habits";
import History from "./History";
import Login from "./Login";
import Registration from "./Registration";


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <Login />
        </Route>
        <Route exact path="/register">
            <Registration />
        </Route>
        <Route exact path="/habits">
            <Habits />
        </Route>
        <Route exact path="/history">
            <History />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}