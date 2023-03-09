import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { BrowserRouter } from "react-router-dom";
import { ArtProvider } from "./art_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ArtProvider>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </ArtProvider>
  </BrowserRouter>
);
