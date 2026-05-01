import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/profile.css";

export default function Profile({ user, setUser }) {
  const nav = useNavigate();

  if (!user) {
    return (
      <div className="center-profile">
        <h2>Please Login First</h2>
      </div>
    );
  }

  // ধরো এখন userInfo আর profile তথ্য একই রকম (তোমার app কার্যকরী হলে সেটা বাকি)
  const [formData, setFormData] = React.useState({
    name: user.name,
    email: user.email,
    phone: user.phone || "",
    address: user.address || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    // 👉 ফ্রন্টএন্ড demo only
    // তুমি পরে এখানে API যোগ করবে: PUT /profile
    alert("Profile updated (frontend only) 🚀");

    // তোমার app যদি স্থানীয় পরিবর্তন দেখাতে চাও
    if (setUser) {
      setUser({ ...user, name: formData.name });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    nav("/login");
  };

  const fullName = user.name || "No name";

  return (
    <div className="profile-page">

      <header className="profile-header">
        <h1>👤 Profile</h1>
        <p>
          Manage your personal information and preferences
        </p>
      </header>

      <section className="profile-card">
        <div className="avatar">
          {fullName.charAt(0).toUpperCase()}
        </div>

        <div className="user-info">
          <h2>{fullName}</h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> Customer
          </p>
        </div>

        <div className="profile-actions">
          <button
            className="btn btn-outline"
            onClick={() => nav("/orders")}
          >
            🧾 Orders
          </button>

          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        </div>
      </section>

      <section className="profile-form">
        <h2>✏️ Edit Profile</h2>

        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            disabled // Usually email cannot be changed without backend
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          className="btn btn-primary"
          onClick={handleSave}
        >
          💾 Save Changes
        </button>
      </section>

      <section className="profile-stats">
        <h2>📊 Account Info</h2>

        <div className="stats-row">
          <p>
            <strong>Orders Placed:</strong> 0
          </p>
          <p>
            <strong>Wishlist Items:</strong> 0
          </p>
        </div>
      </section>

    </div>
  );
}