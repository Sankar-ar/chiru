import React from "react";

export default function PasswordStrength({ password }) {
  const getStrength = (pwd) => {
    if (!pwd) return "";
    if (pwd.length < 8) return "Weak — add more characters and a number.";
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNum = /[0-9]/.test(pwd);
    const hasSpecial = /[!@#$%^&*]/.test(pwd);
    if (!hasUpper || !hasNum)
      return "Good — add a special character for extra security.";
    if (hasUpper && hasNum && hasSpecial)
      return "Strong — nice! your password is strong.";
    return "Strong — nice! your password is strong.";
  };

  return <p style={{ fontSize: "0.85rem", color: "gray" }}>{getStrength(password)}</p>;
}
