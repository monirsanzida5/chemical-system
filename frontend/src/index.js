import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";        // ✅ তুমি যে CSS ফাইল ইতিমধ্যে ব্যবহার করছ রেখেছি
import "./css/global.css";  // ✅ নতুন global style (navbar, button, card, dark, chat-btn ইত্যাদি)
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();