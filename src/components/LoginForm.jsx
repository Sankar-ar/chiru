// import React, { useState } from "react";
// import PasswordStrength from "./PasswordStrength";
// import { auth, googleProvider } from "./firebaseConfig"; // make sure this file exists and exports auth & googleProvider
// import { signInWithPopup } from "firebase/auth";

// export default function LoginForm({ setView, setToast }) {
//   const [form, setForm] = useState({
//     emailOrMobile: "",
//     password: "",
//     agree: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const validateEmail = (email) =>
//     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

//   const validateMobile = (mobile) => /^\d{10}$/.test(mobile);

//   const validatePassword = (pwd) => {
//     const hasUpper = /[A-Z]/.test(pwd);
//     const hasNum = /[0-9]/.test(pwd);
//     const hasSpecial = /[!@#$%^&*]/.test(pwd);
//     return pwd.length >= 8 && hasUpper && hasNum && hasSpecial;
//   };

//   const handleLogin = () => {
//     if (!form.emailOrMobile) return setToast("Enter email or mobile number");

//     if (
//       !validateEmail(form.emailOrMobile) &&
//       !validateMobile(form.emailOrMobile)
//     )
//       return setToast("Enter valid email or 10-digit mobile number");

//     if (!form.password) return setToast("Enter password");

//     if (!validatePassword(form.password))
//       return setToast(
//         "Password must be at least 8 characters with uppercase, number & special char"
//       );

//     if (!form.agree) return setToast("Please agree to terms");

//     // Replace with your login API call if needed
//     setToast("Login successful");
//     setView("home");
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
//       console.log("Google login succeeded:", user);
//       setToast("Google login successful");
//       setView("home");
//     } catch (err) {
//       console.error("Google login error:", err);
//       setToast("Google login failed");
//     }
//   };

//   return (
//     <div className="form-card" style={{ maxWidth: 400, margin: "auto", padding: "1rem" }}>
//       <h2>Cashback — Login</h2>
//       <p>Welcome back — please sign in to continue</p>

//       {/* Email/Mobile Input */}
//       <div
//         className="input-wrapper"
//         style={{ position: "relative", marginBottom: "1rem" }}
//       >
//         <span
//           style={{
//             position: "absolute",
//             left: "10px",
//             top: "50%",
//             transform: "translateY(-50%)",
//           }}
//         >
//           📧
//         </span>
//         <input
//           type="text"
//           name="emailOrMobile"
//           placeholder="Email or mobile number"
//           value={form.emailOrMobile}
//           onChange={handleChange}
//           style={{
//             paddingLeft: "2rem",
//             width: "100%",
//             height: "40px",
//             boxSizing: "border-box",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//       </div>

//       {/* Password Input */}
//       <div
//         className="password-wrapper"
//         style={{ position: "relative", marginBottom: "0.5rem" }}
//       >
//         <input
//           type={showPassword ? "text" : "password"}
//           name="password"
//           placeholder="Enter your password"
//           value={form.password}
//           onChange={handleChange}
//           maxLength={32}
//           style={{
//             paddingLeft: "2rem",
//             paddingRight: "2rem",
//             width: "100%",
//             height: "40px",
//             boxSizing: "border-box",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//         <span
//           onClick={() => setShowPassword(!showPassword)}
//           style={{
//             position: "absolute",
//             right: "10px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             cursor: "pointer",
//             userSelect: "none",
//           }}
//         >
//           {showPassword ? "🙈" : "👁️"}
//         </span>
//       </div>

//       {/* Password Strength */}
//       <PasswordStrength password={form.password} />

//       {/* Terms & Conditions on one line */}
//       <div
//          style={{
//            display: "flex",
//           alignItems: "center",
//            marginTop: "1rem",
//            fontSize: "0.9rem",
//         }}
//       >
//         <input
//           type="checkbox"
//           name="agree"
//           checked={form.agree}
//           onChange={handleChange}
//           style={{ marginRight: "8px" }}
//         />
//         <span>
//           I agree to the  terms and conditions
//  {" "}
//           <a href="#" style={{ color: "#FF5722", textDecoration: "none" }}>
        
//           </a>
//         </span>
//       </div>

//       {/* Login Button */}
//       <button
//         onClick={handleLogin}
//         style={{
//           marginTop: "1rem",
//           width: "100%",
//           padding: "0.6rem",
//           backgroundColor: "#FF5722",
//           color: "#fff",
//           border: "none",
//           borderRadius: "4px",
//           cursor: "pointer",
//           fontWeight: "bold",
//           fontSize: "16px",
//         }}
//       >
//         Login
//       </button>

//       {/* Google Sign-In Button */}
//       <button
//         onClick={handleGoogleLogin}
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "12px",
//           justifyContent: "center",
//           width: "100%",
//           padding: "0.6rem 1rem",
//           border: "1px solid #dadce0",
//           borderRadius: "4px",
//           marginTop: "1rem",
//           backgroundColor: "#fff",
//           boxShadow: "0 1px 2px rgb(60 64 67 / 0.3)",
//           fontSize: "16px",
//           color: "#3c4043",
//           cursor: "pointer",
//           fontWeight: 500,
//           userSelect: "none",
//         }}
//       >
//         <img
//           src="https://developers.google.com/identity/images/g-logo.png"
//           alt="Google Logo"
//           style={{ width: "18px", height: "18px" }}
//         />
//         <span>Continue with Google</span>
//       </button>

//       {/* Forgot Password */}
//       <button
//         type="button"
//         className="link"
//         onClick={() => setView("forgot")}
//         style={{
//           marginTop: "0.5rem",
//           background: "none",
//           border: "none",
//           color: "#7e59d9ff",
//           cursor: "pointer",
//         }}
//       >
//         Forgot password?
//       </button>

//       {/* Signup Link */}
//       <p style={{ marginTop: "1rem" }}>
//         New here?{" "}
//         <button
//           className="link"
//           type="button"
//           onClick={() => setView("signup")}
//           style={{
//             background: "none",
//             border: "none",
//             color: "#6952ecff",
//             cursor: "pointer",
//           }}
//         >
//           Create your agent account
//         </button>
//       </p>
//     </div>
//   );
// }    






import React, { useState } from "react";
import PasswordStrength from "./PasswordStrength";
import { auth, googleProvider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";

export default function LoginForm({ setView, setToast }) {
  const [form, setForm] = useState({
    emailOrMobile: "",
    password: "",
    agree: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateEmail = (email) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

  const validateMobile = (mobile) => /^\d{10}$/.test(mobile);

  const validatePassword = (pwd) => {
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNum = /[0-9]/.test(pwd);
    const hasSpecial = /[!@#$%^&*]/.test(pwd);
    return pwd.length >= 8 && hasUpper && hasNum && hasSpecial;
  };

  const handleLogin = () => {
    if (!form.emailOrMobile) return setToast("Enter email or mobile number");

    if (
      !validateEmail(form.emailOrMobile) &&
      !validateMobile(form.emailOrMobile)
    )
      return setToast("Enter valid email or 10-digit mobile number");

    if (!form.password) return setToast("Enter password");

    if (!validatePassword(form.password))
      return setToast(
        "Password must be at least 8 characters with uppercase, number & special char"
      );

    if (!form.agree) return setToast("Please agree to terms");

    setToast("Login successful");
    setView("home");
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google login succeeded:", user);

      setToast(`Welcome, ${user.displayName || user.email}`);
      setView("home"); // Redirect or change view on success
    } catch (error) {
      console.error("Google login error:", error);
      setToast("Google login failed. Please try again.");
    }
  };

  return (
    <div className="form-card" style={{ maxWidth: 400, margin: "auto", padding: "1rem" }}>
      <h2>Cashback — Login</h2>
      <p>Welcome back — please sign in to continue</p>

      {/* Email/Mobile Input */}
      <div style={{ position: "relative", marginBottom: "1rem" }}>
        <span style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }}>
          📧
        </span>
        <input
          type="text"
          name="emailOrMobile"
          placeholder="Email or mobile number"
          value={form.emailOrMobile}
          onChange={handleChange}
          style={{
            paddingLeft: "2rem",
            width: "100%",
            height: "40px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* Password Input */}
      <div style={{ position: "relative", marginBottom: "0.5rem" }}>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          maxLength={32}
          style={{
            paddingLeft: "2rem",
            paddingRight: "2rem",
            width: "100%",
            height: "40px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          {showPassword ? "🙈" : "👁️"}
        </span>
      </div>

      <PasswordStrength password={form.password} />

      {/* Terms & Conditions on one line */}
      <div style={{ display: "flex", alignItems: "center", marginTop: "1rem", fontSize: "0.9rem" }}>
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          style={{ marginRight: "8px" }}
        />
        <span>
          I agree to the{" "}
          <a href="#" style={{ color: "#FF5722", textDecoration: "none" }}>
            terms and conditions
          </a>
        </span>
      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        style={{
          marginTop: "1rem",
          width: "100%",
          padding: "0.6rem",
          backgroundColor: "#FF5722",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Login
      </button>

      {/* Google Sign-In Button */}
      <button
        onClick={handleGoogleLogin}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          justifyContent: "center",
          width: "100%",
          padding: "0.6rem 1rem",
          border: "1px solid #dadce0",
          borderRadius: "4px",
          marginTop: "1rem",
          backgroundColor: "#fff",
          boxShadow: "0 1px 2px rgb(60 64 67 / 0.3)",
          fontSize: "16px",
          color: "#3c4043",
          cursor: "pointer",
          fontWeight: 500,
          userSelect: "none",
        }}
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google Logo"
          style={{ width: "18px", height: "18px" }}
        />
        <span>Continue with Google</span>
      </button>

      {/* Forgot Password */}
      <button
        type="button"
        className="link"
        onClick={() => setView("forgot")}
        style={{
          marginTop: "0.5rem",
          background: "none",
          border: "none",
          color: "#FF5722",
          cursor: "pointer",
        }}
      >
        Forgot password?
      </button>

      {/* Signup Link */}
      <p style={{ marginTop: "1rem" }}>
        New here?{" "}
        <button
          className="link"
          type="button"
          onClick={() => setView("signup")}
          style={{
            background: "none",
            border: "none",
            color: "#FF5722",
            cursor: "pointer",
          }}
        >
          Create your agent account
        </button>
      </p>
    </div>
  );
}










