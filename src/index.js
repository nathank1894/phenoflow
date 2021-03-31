/** @format */

import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";

import "./index.css";
import App from "./App";

const loggerMiddleware = createLogger();

const reduxStore = createStore(
  compose(
    applyMiddleware(
      loggerMiddleware
    )  )
);
ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
