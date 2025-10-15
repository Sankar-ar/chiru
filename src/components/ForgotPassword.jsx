
import React, { useState } from "react";

export default function ForgotPassword({ setView, setToast }) {
  const [emailOrMobile, setEmailOrMobile] = useState("");

  const handleSubmit = () => {
    if (!emailOrMobile) return setToast("Enter email or mobile");
    setToast("Password reset link sent!");
    setView("login");
  };

  return (
    <div className="form-card">
      <h2>Forgot Password</h2>
      <p>Enter your email or mobile number to reset your password</p>

      <input
        type="text"
        placeholder="Email or mobile number"
        value={emailOrMobile}
        onChange={(e) => setEmailOrMobile(e.target.value)}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.6rem" }}
      />

      <button onClick={handleSubmit} style={{ width: "100%", padding: "0.6rem" }}>
        Send Reset Link
      </button>

      <p style={{ marginTop: "1rem" }}>
        Back to{" "}
        <button className="link" type="button" onClick={() => setView("login")}>
          Login
        </button>
      </p>
    </div>
  );
}
