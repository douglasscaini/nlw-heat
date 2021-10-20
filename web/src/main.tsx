import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { AuthProvider } from "./contexts/auth";

import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);