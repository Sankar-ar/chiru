import React, { useState } from "react";
import PasswordStrength from "./PasswordStrength";

export default function SignupForm({ setView, setToast }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    referral: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = () => {
    if (!form.firstName || !form.email || !form.password)
      return setToast("Please fill all required fields");
    if (form.password !== form.confirmPassword)
      return setToast("Passwords do not match");
    setToast("Account created successfully!");
    setView("login");
  };

  return (
    <div className="form-card">
      <h2>Create your agent account</h2>
      <input
        name="firstName"
        placeholder="First name"
        value={form.firstName}
        onChange={handleChange}
      />
      <input
        name="lastName"
        placeholder="Last name"
        value={form.lastName}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="mobile"
        placeholder="Mobile number"
        value={form.mobile}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={handleChange}
      />
      <PasswordStrength password={form.password} />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        value={form.confirmPassword}
        onChange={handleChange}
      />
      <input
        name="referral"
        placeholder="Referral code (optional)"
        value={form.referral}
        onChange={handleChange}
      />

      <button onClick={handleSignup}>Verify & Continue</button>

      <p>
        Already have an account?{" "}
        <button className="link" onClick={() => setView("login")}>
          Back to Login
        </button>
      </p>
    </div>
  );
}
