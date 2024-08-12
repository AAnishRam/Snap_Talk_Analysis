import React from "react";
import ReactDOM from "react-dom/client";
import "regenerator-runtime/runtime"; // Ensure regenerator-runtime is imported
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
