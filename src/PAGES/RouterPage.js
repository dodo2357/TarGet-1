import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TAppBar from "../COMPONENTS/AppBar";

import ContactUs from "./ContactUs";
import MainPage from "./MainPage";
import Login from "./Login";
import ProducerProfile from "./ProducerProfile";

import UploadButtons from "../COMPONENTS/UploadButton";
import SignUp from "./SignUp";
<<<<<<< HEAD
import ContactForm from "./BizeUlaşın";

=======
import Footer from "../Footer/Footer";
>>>>>>> 19bf58045b7bb92af8c488bf84137a0fbd489a0b

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
          <Route exact path="/kullanıcı kayıt">
            <Login />
          </Route>
          <Route exact path="/kullanıcı giriş">
            <SignUp />
          </Route>
          <Route exact path="/üretici kayıt">
            <SignUp />
          </Route>
          <Route exact path="/üretici giriş">
            <Login />
          </Route>
          <Route exact path="/BizeUlaşın">
            <ContactUs />
          </Route>
          <Route exact path="/üreticiProfil">
            <ProducerProfile />
          </Route>
          <Route exact path="/bizeUlaşın">
            <ContactForm/>
          </Route>
          <Route exact path="/deneme">
            <UploadButtons/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}
