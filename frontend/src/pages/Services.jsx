import React, { useEffect, useState } from "react";
import "../css/services.css";

export default function Services({ lang = "en" }) {
  const [services, setServices] = useState([]);
  const [selected, setSelected] = useState(null);
  const [requests, setRequests] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: ""
  });

  const text = {
    en: {
      title: "Industrial Chemical Solutions",
      subtitle: "Lab • Industrial • Export Worldwide",
      quote: "Request Quote",
      send: "Send Request",
      history: "Your Requests",
      close: "Close"
    },
    bn: {
      title: "ইন্ডাস্ট্রিয়াল কেমিক্যাল সলিউশন",
      subtitle: "ল্যাব • ইন্ডাস্ট্রি • এক্সপোর্ট",
      quote: "কোট অনুরোধ",
      send: "পাঠান",
      history: "আপনার রিকোয়েস্ট",
      close: "বন্ধ"
    }
  };

  const t = text[lang] ? text[lang] : text["en"];

  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(() => setServices([]));

    const saved = localStorage.getItem("requests");
    if (saved) setRequests(JSON.parse(saved));
  }, []);

  const aiSuggest = (category) => {
    if (category === "industrial")
      return "Best for factories & large production systems";
    if (category === "lab")
      return "Best for testing, R&D and quality control";
    if (category === "export")
      return "Best for international shipping & trade";
    return "Premium chemical solution";
  };

  const sendRequest = () => {
    if (!form.name || !form.email || !form.service)
      return alert("Fill all fields");

    const newReq = {
      ...form,
      id: Date.now(),
      date: new Date().toLocaleString()
    };

    const updated = [...requests, newReq];
    setRequests(updated);
    localStorage.setItem("requests", JSON.stringify(updated));

    alert("Request Sent 🚀");
    setForm({ name: "", email: "", service: "" });
  };

  return (
    <div className="services-page">
      {/* HERO */}
      <div className="services-hero">
        <h1>⚗️ {t.title}</h1>
        <p>{t.subtitle}</p>
      </div>

      {/* DASHBOARD */}
      <div className="service-dashboard">
        <div>
          🏭 Industrial:{" "}
          {services.filter((s) => s.category === "industrial").length}
        </div>
        <div>
          🧪 Lab: {services.filter((s) => s.category === "lab").length}
        </div>
        <div>
          🌍 Export: {services.filter((s) => s.category === "export").length}
        </div>
      </div>

      {/* SERVICES */}
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <span className={`badge ${s.category}`}>{s.category}</span>
            <h3>{s.name}</h3>
            <p>{s.detail?.slice(0, 80)}...</p>
            <button onClick={() => setSelected(s)}>🔍 Details</button>
          </div>
        ))}
      </div>

      {/* REQUEST FORM */}
      <div className="quote-box">
        <h2>📦 {t.quote}</h2>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <input
          placeholder="Service name"
          value={form.service}
          onChange={(e) =>
            setForm({ ...form, service: e.target.value })
          }
        />
        <button onClick={sendRequest}>
          🚀 {t.send}
        </button>
      </div>

      {/* REQUEST HISTORY */}
      <div className="history-box">
        <h2>📊 {t.history}</h2>

        {requests.length === 0 ? (
          <p>No requests yet</p>
        ) : (
          requests.map((r) => (
            <div key={r.id} className="history-card">
              <p>👤 {r.name}</p>
              <p>📧 {r.email}</p>
              <p>⚗️ {r.service}</p>
              <p>⏰ {r.date}</p>
            </div>
          ))
        )}
      </div>

      {/* POPUP */}
      {selected && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>{selected.name}</h2>
            <p>{selected.full || selected.detail}</p>
            <div className="ai-box">
              🤖 {aiSuggest(selected.category)}
            </div>
            <button onClick={() => setSelected(null)}>
              ❌ {t.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}