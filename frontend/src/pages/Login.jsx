import React from "react";

export default function Login({ setUser }) {
  const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // তুমি পরে এখানে backend API যোগ করবে:
    // fetch("https://chemical-backend-vx21.onrender.com/login", { ... })

    // এখন শুধু frontend demo:
    alert("Login success (demo only) ✅");

    setUser({
      name: "User",
      email,
      address: "Dhaka, Bangladesh"
    });

    // ভবিষ্যতে nav("/dashboard") যোগ করবে
  };

  return (
    <div className="form login-form">
      <h2>Login</h2>

      <input
        id="email"
        type="email"
        placeholder="Email"
        required
      />

      <input
        id="password"
        type="password"
        placeholder="Password"
        required
      />

      <button onClick={login}>Login</button>
    </div>
  );
}