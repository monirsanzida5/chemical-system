import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/profile.css";

export default function Profile({ user, setUser }) {
  const nav = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });

  const [avatar, setAvatar] = useState(user?.avatar || null);
  const [editMode, setEditMode] = useState(false);

  if (!user) {
    return (
      <div className="center-profile">
        <h2>Please Login First</h2>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = () => {
    setAvatar(null);
  };

  const handleSave = () => {
    alert("Profile updated (frontend only) ✅");

    if (setUser) {
      const updatedUser = {
        ...user,
        ...formData,
        avatar,
      };

      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
    setEditMode(false);
  };

  const handleEditToggle = () => {
    if (!editMode) setFormData({ ...user, ...user });
    setEditMode(!editMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    nav("/login");
  };

  const fullName = formData.name || "User Name";

  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1>👤 Profile</h1>
        <p>Manage your personal information and preferences</p>
      </header>

      <section className="profile-card">
        <div className="card-avatar-section">
          <div className="avatar-box">
            {avatar ? (
              <img src={avatar} alt="Profile" className="avatar-preview" />
            ) : (
              <div className="avatar-fallback">
                {fullName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <div className="avatar-actions">
            <label className="btn btn-outline btn-upload">
              📷 Upload Photo
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleAvatarChange}
              />
            </label>

            {avatar && (
              <button
                className="btn btn-danger btn-remove"
                onClick={handleRemoveAvatar}
              >
                🗑 Remove Photo
              </button>
            )}
          </div>
        </div>

        <div className="card-info-section">
          <div className="user-info">
            <h2>{fullName}</h2>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Role:</strong> Customer</p>
          </div>

          <div className="card-buttons">
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
        </div>
      </section>

      <section className="profile-form">
        <div className="form-header">
          <h2>✏️ Edit Profile</h2>
          {!editMode && (
            <button className="btn btn-outline" onClick={handleEditToggle}>
              ✏️ Edit
            </button>
          )}
          {editMode && (
            <button className="btn btn-primary" onClick={handleEditToggle}>
              ❌ Cancel
            </button>
          )}
        </div>

        <div className="form-row">
          <label>Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>

        <div className="form-row">
          <label>Email *</label>
          <input type="email" value={formData.email} disabled readOnly />
        </div>

        <div className="form-row">
          <label>Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>

        <div className="form-row">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>

        {editMode && (
          <button className="btn btn-primary" onClick={handleSave}>
            💾 Save Changes
          </button>
        )}
      </section>

      <section className="profile-stats">
        <h2>📊 Account Info</h2>
        <p><strong>Orders:</strong> 0</p>
        <p><strong>Wishlist Items:</strong> 0</p>
      </section>

      <section className="profile-note">
        <p className="note">🔒 Email cannot be changed here.</p>
      </section>
    </div>
  );
}