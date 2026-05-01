import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/admin-login.css";
export default function AdminLogin({ setAdmin }) {
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = () => {
    // 👉 demo password
    if (password === "1234") {
      setAdmin(true);
      nav("/admin");
    } else {
      alert("Wrong Password ❌");
    }
  };

  return (
    <div className="admin-login-page">

      <div className="login-box">

        <h2>🔑 Admin Login</h2>

        <p>Please enter your admin password</p>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password-input"
          onKeyUp={(e) => e.key === "Enter" && handleLogin()}
        />

        <button
          className="btn-primary login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  );
}