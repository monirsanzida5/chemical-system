import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

export default function Login({ setUser }) {
  const nav = useNavigate();

  const login = async () => {
    try {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        alert("Email & Password required");
        return;
      }

      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      // ❌ debug alert remove করা হলো (production এ দরকার নাই)
      // alert(JSON.stringify(data));

      if (data.success) {
        // ✅ token save
        localStorage.setItem("token", data.token);

        // ✅ user properly save (IMPORTANT FIX)
        const userData = data.user || { email };
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);

        alert("Login Success ✅");

        nav("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌ (backend চালু আছে কিনা চেক কর)");
    }
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h2>🔑 User Login</h2>
        <p>Please sign in to your account</p>

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
            onKeyUp={(e) => e.key === "Enter" && login()}
          />
        </div>

        <div className="submit-row">
          <button
            className="btn-primary full-width"
            onClick={login}
          >
            Login
          </button>
        </div>

      </div>

    </div>
  );
}