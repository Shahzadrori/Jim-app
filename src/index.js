import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import App from "./App";
import history from "./history";
import { Store } from "./Redux/Store";

ReactDOM.render(
  <>
    <Router history= {history} >
      <Provider store={Store}>
        <App />
      </Provider>
    </Router>
  </>,
  document.getElementById("root")
);
