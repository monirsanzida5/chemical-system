import React from "react";
import { useNavigate } from "react-router-dom";


export default function Login({ setUser }) {
  const nav = useNavigate();


  const login = async () => {
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


    // 🔥 এটা খুব important
    alert(JSON.stringify(data));


    if (data.success) {
      localStorage.setItem("token", data.token);


      // 👉 user set না করলে login হবে না
      setUser({ email });


      nav("/dashboard");
    } else {
      alert(data.message);
    }
  };


  return (
    <div className="form">
      <h2>Login</h2>


      <input id="email" placeholder="Email" />
      <input id="password" type="password" placeholder="Password" />


      <button onClick={login}>Login</button>
    </div>
  );
}
