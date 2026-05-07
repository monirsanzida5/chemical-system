import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

export default function Signup() {
  const nav = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const signup = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
      alert("Please fill Name, Email and Password");
      return;
    }

    const res = await fetch("https://chemical-backend-vx21.onrender.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (data.success) {
      alert("Signup Success ✅");
      nav("/login");
    } else {
      alert(data.message || "Signup failed");
    }
  };

  return (
    <div className="signup-page">
      {/* LEFT: ACCOUNT SIGNUP TIPS */}
      <div className="signup-info">
        <h2>📝 Account Signup Tips</h2>

        <ul className="info-list">
          <li>Use a valid email address that you can access.</li>
          <li>Choose a strong password with letters, numbers, and symbols.</li>
          <li>Never use the same password for multiple accounts.</li>
          <li>Make sure your name is easy to remember and spell.</li>
          <li>Store your password safely (write it down or use a password manager).</li>
        </ul>

        <div className="tip-bottom">
          <p>
            After signup, you’ll be redirected to the Login page and asked to sign in.
          </p>
        </div>
      </div>

      {/* RIGHT: SIGNUP CARD (মাঝারি hover card) */}
      <div className="signup-card">
        <h2>📝 Signup</h2>
        <p>Create an account to get started.</p>

        <div className="form-row">
          <input
            id="name"
            className="form-input"
            type="text"
            placeholder="Name"
            required
          />
        </div>

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

        <div className="submit-row">
          <button
            className="form-input full-width btn-submit"
            onClick={signup}
          >
            Signup
          </button>
        </div>

        <div className="extra-links">
          <p>
            Already have an account?{" "}
            <button
              className="link-btn"
              onClick={() => nav("/login")}
            >
              Login
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