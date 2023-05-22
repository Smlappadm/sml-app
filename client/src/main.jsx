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

//comnetarioaosiorisoirosi
// axios.defaults.baseURL = "https://henry-food-api-production.up.railway.app/";
// axios.defaults.baseURL = "https://sml-app-api.onrender.com";


const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <IntlProvider locale="en-US" massages={{}}>
    <Provider store={store}>
      <BrowserRouter>
        {/* <Auth0Provider
        domain="dev-nzhxzzb0uswslgg5.us.auth0.com"
        clientId="H73gErJkGH4rcXsfGsbuCHZwAkoC7lUK"
        redirectUri={window.location.origin}
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: "http://localhost:5173",
          scope: "read:current_user update:current_user_metadata c-level"
        }}
      > 
            </Auth0Provider>
      */}
        <App />

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
