import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TAppBar from "../COMPONENTS/AppBar";

import AddProduct from "./AddProduct";
import MainPage from "./MainPage";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import Data from "../API/axios";
import ProducerLogin from "./ProducerLogin";
import UploadButtons from "../COMPONENTS/UploadButton";
import SignUp from "./SignUp";


export default function RouterPage() {
  return (
    <Router>
      <div>
      <TAppBar/>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route> 
          <Route exact path="/Anasayfa">
            <MainPage />
          </Route>
          <Route exact path="/UserLogin">
            <UserLogin />
          </Route>
          <Route exact path="/UserSignUp">
            <SignUp />
          </Route>
          <Route exact path="/üretici kayıt">
            <SignUp />
          </Route>
          <Route exact path="/ProducerLogin">
            <ProducerLogin />
          </Route>
          <Route exact path="/üretici giriş">
            <ProducerLogin />
          </Route>
          <Route exact path="/AddProduct">
            <AddProduct />
          </Route>
          <Route exact path="/deneme">
            <UploadButtons/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
