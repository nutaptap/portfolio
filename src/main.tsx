import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./normalize.css";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:lang" element={<App />} />
        <Route path="*" element={<Navigate to="/en" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
