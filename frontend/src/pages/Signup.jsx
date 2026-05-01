import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

export default function Signup({ setUser }) {
  const nav = useNavigate();

  const signup = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
      alert("Please fill Name, Email and Password");
      return;
    }

    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (data.success) {
      alert("Signup Success ✅");
      nav("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="signup-page">

      <div className="signup-box">

        <h2>📝 Signup</h2>
        <p>Fill your details to create an account</p>

        <div className="form-row">
          <input
            id="name"
            placeholder="Name"
            className="form-input"
          />
        </div>

        <div className="form-row">
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="form-input"
          />
        </div>

        <div className="form-row">
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="form-input"
            onKeyUp={(e) => e.key === "Enter" && signup()}
          />
        </div>

        <div className="submit-row">
          <button
            className="btn-primary full-width"
            onClick={signup}
          >
            Signup
          </button>
        </div>

      </div>

    </div>
  );
}