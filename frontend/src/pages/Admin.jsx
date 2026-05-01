import React, { useState, useEffect } from "react";
import "../css/admin.css";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  // State সবই রাখা
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    messages: 0,
    revenue: 0,
  });

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [messages, setMessages] = useState([]);

  // 🔥 LOAD DATA (fake, later backend)
  useEffect(() => {
    setStats({
      users: 120,
      products: 45,
      messages: 12,
      revenue: 5400,
    });

    setUsers([
      { id: 1, name: "Rahim", email: "rahim@gmail.com" },
      { id: 2, name: "Karim", email: "karim@gmail.com" },
      { id: 3, name: "Monir", email: "monir@chemicals.com" },
      { id: 4, name: "Sanzida", email: "sanzida@chemicals.com" },
    ]);

    setProducts([
      { id: 1, name: "Chemical A", price: 50, stock: 1200 },
      { id: 2, name: "Chemical B", price: 200, stock: 800 },
      { id: 3, name: "Chemical C", price: 150, stock: 2300 },
    ]);

    setMessages([
      { id: 1, text: "Need help – order issue", status: "unread" },
      { id: 2, text: "Invoice not received", status: "read" },
      { id: 3, text: "Product inquiry", status: "unread" },
    ]);
  }, []);

  // 🔥 DELETE USER
  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  // 🔥 DELETE PRODUCT
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // 🔥 MARK MESSAGE
  const markRead = (id) => {
    setMessages(
      messages.map((m) =>
        m.id === id ? { ...m, status: "read" } : m
      )
    );
  };

  // 🔥 DARK MODE TOGGLE
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`admin-container ${darkMode ? "dark" : ""}`}>

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>⚡ Admin Pro</h2>

        <button
          onClick={() => setActiveTab("dashboard")}
          className={activeTab === "dashboard" ? "active-tab" : ""}
        >
          Dashboard
        </button>

        <button
          onClick={() => setActiveTab("users")}
          className={activeTab === "users" ? "active-tab" : ""}
        >
          Users
        </button>

        <button
          onClick={() => setActiveTab("products")}
          className={activeTab === "products" ? "active-tab" : ""}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab("messages")}
          className={activeTab === "messages" ? "active-tab" : ""}
        >
          Messages
        </button>

        <hr />

        {/* DARK MODE TOGGLE */}
        <button
          onClick={toggleDarkMode}
          className="btn-primary"
          style={{ width: "100%", marginTop: "10px" }}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* DASHBOARD */}
        {activeTab === "dashboard" && (
          <>
            <div style={{ marginBottom: "20px" }}>
              <h1>📊 Dashboard</h1>
              <p>
                Quick overview of your business performance
              </p>
            </div>

            <div className="stats-grid">

              <div className="card">
                <h3>Users</h3>
                <p className="large">{stats.users}</p>
              </div>

              <div className="card">
                <h3>Products</h3>
                <p className="large">{stats.products}</p>
              </div>

              <div className="card">
                <h3>Messages</h3>
                <p className="large">{stats.messages}</p>
              </div>

              <div className="card">
                <h3>Revenue</h3>
                <p className="large">${stats.revenue}</p>
              </div>

            </div>
          </>
        )}

        {/* USERS */}
        {activeTab === "users" && (
          <>
            <h1>👥 Users</h1>

            {users.length === 0 ? (
              <p>No users found.</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className="btn-danger"
                          onClick={() => deleteUser(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}

        {/* PRODUCTS */}
        {activeTab === "products" && (
          <>
            <h1>🧪 Products</h1>

            {products.length === 0 ? (
              <p>No products found.</p>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>${p.price}</td>
                        <td>{p.stock}</td>
                        <td>
                          <button
                            className="btn-danger"
                            onClick={() => deleteProduct(p.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* MESSAGES */}
        {activeTab === "messages" && (
          <>
            <h1>💬 Messages</h1>

            {messages.length === 0 ? (
              <p>No messages.</p>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Message</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((m) => (
                      <tr key={m.id} className={m.status}>
                        <td>{m.text}</td>
                        <td>
                          <span
                            className={`badge ${
                              m.status === "unread"
                                ? "badge-unread"
                                : "badge-read"
                            }`}
                          >
                            {m.status.toUpperCase()}
                          </span>
                        </td>
                        <td>
                          {m.status === "unread" && (
                            <button
                              className="btn-success"
                              onClick={() => markRead(m.id)}
                            >
                              Mark as Read
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}