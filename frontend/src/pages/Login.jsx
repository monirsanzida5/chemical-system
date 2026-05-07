import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const nav = useNavigate();

  const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // এখন শুধু frontend demo:
    // ভবিষ্যতে এখানে backend API যোগ করবে:
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
      <div className="login-box">
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

        <div className="form-row">
          <input
            id="password"
            className="form-input"
            type="password"
            placeholder="Password"
            required
          />
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