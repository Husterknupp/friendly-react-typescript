import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const element = document.getElementById("root");
if (element === null) throw new Error("Missing React root element 'root'");

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
