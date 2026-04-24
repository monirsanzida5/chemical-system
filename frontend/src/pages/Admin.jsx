import React, { useState, useEffect } from "react";

export default function Admin() {

  const [activeTab, setActiveTab] = useState("dashboard");

  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    messages: 0,
    revenue: 0
  });

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [messages, setMessages] = useState([]);

  // 🔥 LOAD DATA (fake now, later backend connect)
  useEffect(() => {
    setStats({
      users: 120,
      products: 45,
      messages: 12,
      revenue: 5400
    });

    setUsers([
      { id:1, name:"Rahim", email:"rahim@gmail.com" },
      { id:2, name:"Karim", email:"karim@gmail.com" }
    ]);

    setProducts([
      { id:1, name:"Chemical A", price:50 },
      { id:2, name:"Chemical B", price:200 }
    ]);

    setMessages([
      { id:1, text:"Need help", status:"unread" },
      { id:2, text:"Order issue", status:"read" }
    ]);
  }, []);

  // 🔥 DELETE USER
  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  // 🔥 DELETE PRODUCT
  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // 🔥 MARK MESSAGE
  const markRead = (id) => {
    setMessages(messages.map(m =>
      m.id === id ? { ...m, status:"read" } : m
    ));
  };

  return (
    <div className="admin-container">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>⚡ Admin Pro</h2>

        <button onClick={()=>setActiveTab("dashboard")}>Dashboard</button>
        <button onClick={()=>setActiveTab("users")}>Users</button>
        <button onClick={()=>setActiveTab("products")}>Products</button>
        <button onClick={()=>setActiveTab("messages")}>Messages</button>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* DASHBOARD */}
        {activeTab === "dashboard" && (
          <>
            <h1>📊 Dashboard</h1>

            <div className="stats-grid">

              <div className="card">
                <h3>Users</h3>
                <p>{stats.users}</p>
              </div>

              <div className="card">
                <h3>Products</h3>
                <p>{stats.products}</p>
              </div>

              <div className="card">
                <h3>Messages</h3>
                <p>{stats.messages}</p>
              </div>

              <div className="card">
                <h3>Revenue</h3>
                <p>${stats.revenue}</p>
              </div>

            </div>
          </>
        )}

        {/* USERS */}
        {activeTab === "users" && (
          <>
            <h1>👥 Users</h1>

            {users.map(user => (
              <div className="card" key={user.id}>
                <p>{user.name} - {user.email}</p>
                <button className="btn-danger" onClick={()=>deleteUser(user.id)}>Delete</button>
              </div>
            ))}
          </>
        )}

        {/* PRODUCTS */}
        {activeTab === "products" && (
          <>
            <h1>🧪 Products</h1>

            {products.map(p => (
              <div className="card" key={p.id}>
                <p>{p.name} - ${p.price}</p>
                <button className="btn-danger" onClick={()=>deleteProduct(p.id)}>Delete</button>
              </div>
            ))}
          </>
        )}

        {/* MESSAGES */}
        {activeTab === "messages" && (
          <>
            <h1>💬 Messages</h1>

            {messages.map(m => (
              <div className={`card ${m.status}`} key={m.id}>
                <p>{m.text}</p>

                {m.status === "unread" && (
                  <button className="btn-success" onClick={()=>markRead(m.id)}>
                    Mark as Read
                  </button>
                )}
              </div>
            ))}
          </>
        )}

      </div>
    </div>
  );
}