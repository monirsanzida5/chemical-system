import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

export default function Signup() {
  const nav = useNavigate();

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

      <div className="signup-box">

        <h2>📝 Signup</h2>

        <input id="name" placeholder="Name" />
        <input id="email" placeholder="Email" />
        <input id="password" placeholder="Password" />

        <button onClick={signup}>Signup</button>

      </div>

    </div>
  );
}