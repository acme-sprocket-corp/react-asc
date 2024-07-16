import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.scss";

const element = document.querySelector("#root") ?? new Element();

// eslint-disable-next-line vitest/require-hook
ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
