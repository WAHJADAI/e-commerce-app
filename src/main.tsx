import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";
import LoadingProvider from "context/LoadingProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
