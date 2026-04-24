import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Admin Login</h2>


      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />


      <br /><br />


      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
