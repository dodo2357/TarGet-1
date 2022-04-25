import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduct from "./AddProduct";

import MainPage from "./MainPage";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";

export default function RouterPage() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/UserLogin">
            <UserLogin />
          </Route>
          <Route exact path="/UserRegister">
            <UserRegister />
          </Route>
          <Route exact path="/AddProduct">
            <AddProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
