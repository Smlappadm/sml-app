import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import store from "./redux/store"
import axios from "axios";


// axios.defaults.baseURL = "https://henry-food-api-production.up.railway.app/";
// axios.defaults.baseURL = "http://localhost:3001";


const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <IntlProvider locale="en-US" massages={{}}>
  <Provider store={store}>
    <BrowserRouter>
    <Auth0Provider
        domain="dev-p8jpj5dccyqig58k.us.auth0.com"
        clientId="FsvWNC8mE2wREIIOsDyOeOVTJgdQAQEQ"
        redirectUri={window.location.origin}
      >
      <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
  </IntlProvider>
);




// ReactDOM.createRoot(document.getElementById("root")).render(
//   <IntlProvider locale="en-US" massages={{}}>
//     <BrowserRouter>
//       <Auth0Provider
//         domain="dev-p8jpj5dccyqig58k.us.auth0.com"
//         clientId="FsvWNC8mE2wREIIOsDyOeOVTJgdQAQEQ"
//         redirectUri={window.location.origin}
//       >
//         <App />
//       </Auth0Provider>
//     </BrowserRouter>
//   </IntlProvider>
// );
