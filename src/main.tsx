import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import List from "./List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./user";
import DemoUser from "./UserView";
ReactDOM.render(
  <React.StrictMode>
    <DemoUser />
  </React.StrictMode>,
  document.getElementById("root")
);
