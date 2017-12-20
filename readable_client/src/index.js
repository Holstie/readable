import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from './store'
import history from './history'



ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
