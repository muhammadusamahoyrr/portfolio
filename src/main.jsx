import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router  future={{ v7_startTransition: true }}>
     <Routes>
     <Route path="/" element={<App/>} />
     </Routes>
    </Router>
  </StrictMode>
);
