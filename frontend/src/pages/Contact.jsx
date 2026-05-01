import React, { useState } from "react";
import "../css/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const whatsappNumber = "8801XXXXXXXXX";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendMessage = () => {
    if (!validateForm()) return;

    const old = JSON.parse(localStorage.getItem("messages") || "[]");

    localStorage.setItem(
      "messages",
      JSON.stringify([
        ...old,
        { ...form, date: new Date().toLocaleString() }
      ])
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

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? "invalid" : ""}
            />
            {errors.name && (
              <p className="error">{errors.name}</p>
            )}
          </div>

          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "invalid" : ""}
            />
            {errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>

          <div className="form-row">
            <textarea
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              className={errors.message ? "invalid" : ""}
            />
            {errors.message && (
              <p className="error">{errors.message}</p>
            )}
          </div>

          <button
            className="send-btn"
            onClick={sendMessage}
          >
            🚀 Send Message
          </button>

          {sent && (
            <p className="success">✅ Message Sent Successfully</p>
          )}
        </div>

        {/* INFO */}
        <div className="contact-info">
          <h2>📍 Company Info</h2>

          <p>📧 <strong>adilbaxoon@gmail.com</strong></p>
          <p>📞 <strong>+8801XXXXXXXXX</strong></p>
          <p>🏭 <strong>Dhaka, Bangladesh</strong></p>

          <div className="quick-actions">
            <a href="tel:+8801XXXXXXXXX">
              <button type="button" className="quick-btn call-btn">
                📞 Call Now
              </button>
            </a>

            <a href="mailto:adilbaxoon@gmail.com">
              <button type="button" className="quick-btn email-btn">
                📧 Email
              </button>
            </a>
          </div>
        </div>

      </div>

      {/* MAP */}
      <div className="map-section">
        <h2>🗺️ Location</h2>

        <iframe
          className="map"
          title="Our office in Dhaka, Bangladesh"
          src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
          loading="lazy"
        ></iframe>
      </div>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        className="whatsapp-float"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>

    </div>
  );
}