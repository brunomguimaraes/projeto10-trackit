import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../css/reset.css";
import Bottom from "./Bottom";
import Header from "./Header";
import Login from "./Login";
import Registration from "./Registration";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
            <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
