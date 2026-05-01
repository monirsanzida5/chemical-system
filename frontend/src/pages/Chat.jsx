import React, { useState, useRef, useEffect } from "react";
import "../css/ai-chat.css";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([
    { type: "ai", text: "Hello 👋 How can I help you?" }
  ]);
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef(null);

  // 🔽 AUTO SCROLL
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🎤 VOICE INPUT
  const startVoice = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (e) => {
      setMsg(e.results[0][0].transcript);
    };

    recognition.start();
  };

  // 🔊 VOICE OUTPUT
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  // 📩 SEND
  const sendMessage = async () => {
    if (!msg.trim()) return;

    const userText = msg;

    setMessages((prev) => [...prev, { type: "user", text: userText }]);
    setMsg("");
    setTyping(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userText })
      });

      const data = await res.json();

      setTyping(false);

      const reply = data.reply || "No reply";

      setMessages((prev) => [...prev, { type: "ai", text: reply }]);

      speak(reply);
    } catch {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: "Server error" }
      ]);
    }
  };

  return (
    <div className="chat-container">

      {/* HEADER */}
      <div className="chat-header">
        🤖 AI Support Chat
      </div>

      {/* BODY */}
      <div className="chat-box">

        {messages.map((m, i) => (
          <div key={i} className={`msg-row ${m.type}`}>
            <div className={m.type === "user" ? "user-msg" : "ai-msg"}>
              {m.text}
            </div>
          </div>
        ))}

        {/* ⏳ TYPING */}
        {typing && (
          <div className="msg-row ai">
            <div className="ai-msg typing-dot">Typing...</div>
          </div>
        )}

        <div ref={chatEndRef}></div>

      </div>

      {/* INPUT */}
      <div className="chat-input">

        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type message..."
        />

        <button
          className="send-btn"
          onClick={sendMessage}
        >
          ➤
        </button>

        <button
          className="voice-btn"
          onClick={startVoice}
        >
          🎤
        </button>

      </div>

    </div>
  );
}