import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";

import LoginPopUp from "./components/login/LogInPopUp";

import "./App.css";
import { useState } from "react";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
        <div className="gradient__bg">
          <Navbar setShowLogin={setShowLogin} />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
      ;
    </>
  );
};
export default App;
