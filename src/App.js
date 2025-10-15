import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import ForgotPassword from "./components/ForgotPassword";
import HomePage from "./components/HomePage";
import Toast from "./components/Toast";
import "./App.css";

export default function App() {
  const [view , setView ] = useState("login"); 
  const [toast , setToast ] = useState("");

  return (
    <div className="app-container">
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
      {view === "login" && <LoginForm setView={setView} setToast={setToast} />}
      {view === "signup" && <SignupForm setView={setView} setToast={setToast} />}
      {view === "forgot" && <ForgotPassword setView={setView} setToast={setToast} />}
      {view === "home" && <HomePage setView={setView} setToast={setToast} />}
    </div>
  );
}
