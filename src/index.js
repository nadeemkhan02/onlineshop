import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
)
