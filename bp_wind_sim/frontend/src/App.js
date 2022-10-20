import {BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { Redirect } from "react";
import Home from "./pages/Home";
import ReactDOM from "react-dom";
import Historical from "./pages/Historical";
import Control from "./pages/Control";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import React, { Component } from "react";
import { render } from "react-dom";
import Switch from "react";
export default function App(){  
    return (
       <div className="App">
       <Main>
       <Routes>
        <Route path="/dashboard" element={<Home />}> </Route>
        <Route path="/historical" element={<Historical />}> </Route>
        <Route path="/control" element={<Control />} ></Route>
        {/* <Redirect from="*" to="/dashboard" /> */}
      </Routes>
      </Main>
      </div>
    );
  }
const appDiv = document.getElementById("app");
render(
<Router>
  <App />
</Router>
, appDiv);