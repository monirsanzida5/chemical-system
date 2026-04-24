import React from "react";


export default function Dashboard({ user }) {
  if(!user) return <h2 className="center">Please Login First</h2>;


  return (
    <div className="center">
      <h1>Dashboard</h1>
      <h2>Name: {user.name}</h2>
      <h3>Email: {user.email}</h3>
    </div>
  );
}