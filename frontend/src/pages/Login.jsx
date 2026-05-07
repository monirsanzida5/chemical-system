import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

export default function Login({ setUser }) {
  const nav = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // এখন শুধু frontend demo:
    // ভবিষ্যতে backend API যোগ করবে:
    // fetch("https://chemical-backend-vx21.onrender.com/login", { ... })

    alert("Login success (demo only) ✅");

    const mockUser = {
      name: "User",
      email,
      address: "Dhaka, Bangladesh"
    };

    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));

    nav("/dashboard"); // ভবিষ্যতে backend চালু হলে redirect ঠিক থাকবে
  };

  const handleForgotPassword = () => {
    alert(
      "Password reset link will be sent to your email (backend not implemented yet)."
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  return (
    <div
      className="login-page"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* LEFT: ACCOUNT LOGIN TIPS */}
      <div className="login-info">
        <h2>🔐 Account Login Tips</h2>

        <ul className="info-list">
          <li>Use the same email and password you used to sign up.</li>
          <li>
            Use a strong password combining uppercase, lowercase,
            numbers, and symbols.
          </li>
          <li>Never share your password with anyone.</li>
          <li>
            Enable 2‑step verification (Google Authenticator, OTP)
            where possible.
          </li>
          <li>Use a trusted, updated browser for better security.</li>
        </ul> {/* এই </ul> হারানো গিয়েছিল – এটা লাগে এখানে */}

        <div className="tip-bottom">
          <p>If you forget your password, use the “Forgot Password” option to reset it.</p>
        </div>
      </div>

      {/* RIGHT: LOGIN CARD (মাঝারি hover card) */}
      <div className="login-card">
        <h2>🔐 Login</h2>
        <p>Sign in to your account to continue.</p>

        <div className="form-row">
          <input
            id="email"
            className="form-input"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="form-row password-input-wrap">
          <input
            id="password"
            className="form-input password-input"
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            required
          />
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
            aria-label={
              passwordVisible ? "Hide password" : "Show password"
            }
          >
            {passwordVisible ? "🙈" : "👁️"}
          </button>
        </div>

        <div className="password-row">
          <button
            className="link-btn small"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </button>
        </div>

        <div className="submit-row">
          <button
            className="form-input full-width btn-submit"
            onClick={login}
          >
            Login
          </button>
        </div>

        <div className="extra-links">
          <p>
            Don’t have an account?{" "}
            <button
              className="link-btn"
              onClick={() => nav("/signup")}
            >
              Sign up
            </button>
          </p>

          <p>
            <button
              className="link-btn"
              onClick={() => nav("/")}
            >
              Back to Home
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}