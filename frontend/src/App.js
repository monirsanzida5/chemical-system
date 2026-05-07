import React, { useState, useEffect, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Career from "./pages/Career";
import About from "./pages/About";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import AdminJobs from "./pages/AdminJobs";

// 🌐 CONTEXT
export const LanguageContext = createContext();

// 🌐 TRANSLATION
const text = {
  en: {
    home: "Home",
    products: "Products",
    career: "Career",
    about: "About",
    services: "Services",
    contact: "Contact",
    signup: "Signup",
    login: "Login",
    dashboard: "Dashboard",
    logout: "Logout"
  },
  bn: {
    home: "হোম",
    products: "পণ্য",
    career: "ক্যারিয়ার",
    about: "আমাদের সম্পর্কে",
    services: "সার্ভিস",
    contact: "যোগাযোগ",
    signup: "সাইনআপ",
    login: "লগইন",
    dashboard: "ড্যাশবোর্ড",
    logout: "লগআউট"
  },
  jp: {
    home: "ホーム",
    products: "製品",
    career: "キャリア",
    about: "私たちについて",
    services: "サービス",
    contact: "連絡先",
    signup: "サインアップ",
    login: "ログイン",
    dashboard: "ダッシュボード",
    logout: "ログアウト"
  },
  cn: {
    home: "主页",
    products: "产品",
    career: "职业",
    about: "关于我们",
    services: "服务",
    contact: "联系",
    signup: "注册",
    login: "登录",
    dashboard: "仪表板",
    logout: "退出"
  }
};

// 🧭 NAVBAR
function Navbar({ lang, setLang, user, setUser, cart }) {
  const nav = useNavigate();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    nav("/");
  };

  return (
    <nav className="navbar sticky-nav">
      <h2 className="logo">MONIR & SANZIDA</h2>

      <ul className="menu">
        {user?.email === "admin@gmail.com" && (
          <li><Link to="/admin">Admin</Link></li>
        )}

        <li><Link to="/cart">Cart ({cart.length})</Link></li>
        <li><Link to="/">{text[lang]?.home}</Link></li>
        <li><Link to="/products">{text[lang]?.products}</Link></li>
        <li><Link to="/career">{text[lang]?.career}</Link></li>
        <li><Link to="/about">{text[lang]?.about}</Link></li>
        <li><Link to="/services">{text[lang]?.services}</Link></li>
        <li><Link to="/contact">{text[lang]?.contact}</Link></li>
        <li><Link to="/chat">AI Chat</Link></li>

        {!user && <li><Link to="/signup">{text[lang]?.signup}</Link></li>}
        {!user && <li><Link to="/login">{text[lang]?.login}</Link></li>}

        {user && <li><Link to="/dashboard">{text[lang]?.dashboard}</Link></li>}
        {user && <li><Link to="/profile">Profile</Link></li>}

        {user && (
          <li>
            <button className="logout-btn" onClick={logout}>
              {text[lang]?.logout}
            </button>
          </li>
        )}
      </ul>

      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">EN</option>
        <option value="bn">BN</option>
        <option value="jp">JP</option>
        <option value="cn">CN</option>
      </select>
    </nav>
  );
}

// 🔐 LOGIN (EXTERNAL PAGE)
function Login({ setUser }) {
  const nav = useNavigate();

  const login = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("https://chemical-backend-vx21.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) {
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      nav("/dashboard");
    } else {
      alert("Wrong Email or Password");
    }
  };

  return (
    <div className="form">
      <input id="email" placeholder="Email" />
      <input id="password" placeholder="Password" />
      <button onClick={login}>Login</button>
    </div>
  );
}

// 📊 DASHBOARD
function Dashboard({ user, setUser }) {
  const [edit, setEdit] = useState(false);

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: user?.address || ""
  });

  if (!user) return <Navigate to="/login" />;

  const saveProfile = () => {
    setUser(form);
    localStorage.setItem("user", JSON.stringify(form));
    setEdit(false);
    alert("Profile Updated ✅");
  };

  return (
    <div className="profile-container">
      <h1>👤 My Profile</h1>

      <input disabled={!edit}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input disabled value={form.email} />

      <input disabled={!edit}
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      {!edit
        ? <button onClick={() => setEdit(true)}>Edit</button>
        : <button onClick={saveProfile}>Save</button>
      }
    </div>
  );
}

// 🚀 MAIN APP
export default function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello 👋 How can I help you?" }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [lang, setLang] = useState("en");
  const [cart, setCart] = useState([]);

  const sendMessage = () => {
    if (!input) return;

    setMessages(prev => [...prev, { from: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages(prev => [...prev,
        { from: "bot", text: "We will contact you soon 😊" }
      ]);
    }, 800);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className={darkMode ? "dark" : ""}>

        {loading && <div className="loader">Loading...</div>}

        <Router>

          <Navbar lang={lang} setLang={setLang} user={user} setUser={setUser} cart={cart} />

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{ position: "fixed", top: "80px", right: "20px" }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/products" element={<Products lang={lang} cart={cart} setCart={setCart} />} />
            <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/career" element={<Career />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/signup" element={<SignupPage setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />

            <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />

            <Route path="/chat" element={<Chat />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

            <Route path="/admin" element={
              <ProtectedRoute user={user}>
                <Admin />
              </ProtectedRoute>
            } />

            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/adminjobs" element={<AdminJobs />} />
          </Routes>

        </Router>

        {chatOpen && (
          <div className="chat-box">
            {messages.map((m, i) => (
              <div key={i}>{m.text}</div>
            ))}
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
          </div>
        )}

        <div className="chat-btn" onClick={() => setChatOpen(true)}>💬</div>

      </div>
    </LanguageContext.Provider>
  );
}