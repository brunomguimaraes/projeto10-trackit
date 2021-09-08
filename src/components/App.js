import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../css/reset.css";
import Bottom from "./Bottom";
import Habits from "./Habits";
import Header from "./Header";
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
      </Switch>
    </BrowserRouter>
  );
}
