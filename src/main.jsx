import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LofiPlayerProvider } from "./components/LofiPlayerProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LofiPlayerProvider>
    <App />
  </LofiPlayerProvider>
);
