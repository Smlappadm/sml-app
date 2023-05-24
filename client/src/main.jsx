import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import store from "./redux/store"
import axios from "axios";

//comnetarioaosiorisoirosi
axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = "https://sml-app-api.onrender.com";


const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <IntlProvider locale="en-US" massages={{}}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </IntlProvider>
);

