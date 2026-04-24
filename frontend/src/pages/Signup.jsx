import React from "react";
import { useNavigate } from "react-router-dom";




export default function Signup({ setUser }) {
  const nav = useNavigate();




  const signup = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();




    const res = await fetch("http://localhost:5000/signup", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ name,email,password })
    });




    const data = await res.json();




    if(data.success){
      alert("Signup Success");
      nav("/login"); // 🔥 login page এ যাবে (dashboard না)
    } else {
      alert(data.message);
    }
  };




  return (
    <div className="form">
      <input id="name" placeholder="Name"/>
      <input id="email" placeholder="Email"/>
      <input id="password" placeholder="Password"/>
      <button onClick={signup}>Signup</button>
    </div>
  );
}


