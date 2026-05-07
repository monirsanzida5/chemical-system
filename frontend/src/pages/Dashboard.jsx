import React, { useState } from "react";
import "../css/dashboard.css";

export default function Dashboard({ user, setUser }) {
  const [edit, setEdit] = useState(false);

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: user?.address || ""
  });

  if (!user) {
    return (
      <div className="dashboard-placeholder">
        <h2>Please Login First</h2>
      </div>
    );
  }

  const saveProfile = () => {
    setUser(form);
    localStorage.setItem("user", JSON.stringify(form));
    setEdit(false);
    alert("Profile updated ✅");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>👤 My Profile</h1>
        <p>Manage your account information here</p>
      </div>

      <div className="dashboard-card">
        <div className="user-info">
          <label>Name</label>
          <input
            disabled={!edit}
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

        <div className="user-info">
          <label>Email</label>
          <input disabled value={form.email} />
        </div>

        <div className="user-info">
          <label>Address</label>
          <input
            disabled={!edit}
            value={form.address}
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
            }
          />
        </div>

        <div className="dashboard-actions">
          {!edit ? (
            <button
              className="btn btn-outline"
              onClick={() => setEdit(true)}
            >
              ✏️ Edit
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={saveProfile}
            >
              💾 Save
            </button>
          )}
        </div>
      </div>

      <div className="dashboard-stats">
        <p><strong>Orders:</strong> 0</p>
        <p><strong>Wishlist Items:</strong> 0</p>
      </div>
    </div>
  );
}