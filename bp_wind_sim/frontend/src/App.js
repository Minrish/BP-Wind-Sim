import { Routes, Route, Navigate, renderMatches, Router, BrowserRouter } from "react-router-dom";
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
        <div>
          <Home/>
        {/* <Switch>
          <Main>
            <Route path="/" component={Home} />
            <Route exact path="/historical" component={Historical} />
            <Route exact path="/control" component={Control} />
          </Main>
        </Switch> */}
        </div>
    );
  }
const appDiv = document.getElementById("app");
render(
<BrowserRouter>
  <App/>
</BrowserRouter>
,appDiv);