import React from "react";
import { useNavigate } from "react-router-dom"; // চাইলে লগআউটে ব্যবহার হবে
import "../css/dashboard.css";

export default function Dashboard({ user }) {
  const nav = useNavigate();

  if (!user) {
    return (
      <div className="center-dashboard">
        <h2>Please Login First</h2>
      </div>
    );
  }

  // PREPARE FULL NAME
  const fullName = user.name || "No name";

  return (
    <div className="dashboard-page">

      <header className="dashboard-header">
        <h1>🏠 Welcome to Dashboard</h1>
        <p>Manage your account and orders easily</p>
      </header>

      <section className="user-profile-card">
        <div className="avatar">
          {fullName.charAt(0).toUpperCase()}
        </div>

        <div className="user-info">
          <h2>{fullName}</h2>
          <p className="text-muted">
            <strong>Email: {user.email}</strong>
          </p>
        </div>

        <div className="user-actions">
          <button
            className="btn btn-primary"
            onClick={() => nav("/profile")}
          >
            👤 Profile
          </button>

          <button
            className="btn btn-outline"
            onClick={() => nav("/orders")}
          >
            🧾 Orders
          </button>

          <button
            className="btn btn-danger"
            onClick={() => {
              // 👉 তোমার অ্যাপে ধরে নাও localStorage থেকে token remove
              localStorage.removeItem("token");
              nav("/login");
            }}
          >
            🚪 Logout
          </button>
        </div>
      </section>

      {/* QUICK STATS / INFO CARD */}
      <section className="quick-info-cards">
        <div className="info-card">
          <h3>🛒 Orders</h3>
          <p>You have 0 active orders</p>
        </div>

        <div className="info-card">
          <h3>💰 Wallet / Balance</h3>
          <p>Balance: $0.00</p>
        </div>

        <div className="info-card">
          <h3>📩 Messages</h3>
          <p>0 unread messages</p>
        </div>
      </section>

      {/* CTA FOR PRODUCT PAGES */}
      <section className="dashboard-cta">
        <p>
          Want to explore our products? Go to{" "}
          <button
            className="btn btn-link"
            onClick={() => nav("/products")}
          >
            Products Page
          </button>
        </p>
      </section>

    </div>
  );
}