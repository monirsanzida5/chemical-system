import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const whatsappNumber = "8801XXXXXXXXX";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessage = () => {
    if (!form.name || !form.email || !form.message) {
      alert("সব ফিল্ড পূরণ করো");
      return;
    }

    const old = JSON.parse(localStorage.getItem("messages") || "[]");

    localStorage.setItem(
      "messages",
      JSON.stringify([...old, { ...form, date: new Date().toLocaleString() }])
    );

    setSent(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <h1>📞 Contact Us</h1>
        <p>We reply within few minutes 🚀</p>
      </div>

      {/* MAIN */}
      <div className="contact-container">

        {/* FORM */}
        <div className="contact-form">
          <h2>📩 Send Message</h2>

          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
          />

          <button onClick={sendMessage}>
            🚀 Send Message
          </button>

          {sent && (
            <p className="success">✅ Message Sent Successfully</p>
          )}
        </div>

        {/* INFO */}
        <div className="contact-info">
          <h2>📍 Company Info</h2>

          <p>📧 support@company.com</p>
          <p>📞 +8801XXXXXXXXX</p>
          <p>🏭 Dhaka, Bangladesh</p>

          <div className="quick-actions">
            <a href="tel:+8801XXXXXXXXX">
              <button>📞 Call Now</button>
            </a>

            <a href="mailto:support@company.com">
              <button>📧 Email</button>
            </a>
          </div>
        </div>

      </div>

      {/* MAP */}
      <div className="map-section">
        <h2>🗺️ Location</h2>

        <iframe
          className="map"
          title="map"
          src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
        ></iframe>
      </div>

      {/* 🔥 FLOATING WHATSAPP BUTTON */}
      <a
        className="whatsapp-float"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>

    </div>
  );
}