import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory
        domain="dev-dt5w73xr4ennm0m8.us.auth0.com"
        clientId="R1zXdRueowUoNic6GPp4IYjdeUtZzdSF"
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: "https://rbm7x5e9gl.execute-api.us-east-1.amazonaws.com/",
          scope: "read:current_user update:current_user_metadata"
        }}
        >
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>
);
