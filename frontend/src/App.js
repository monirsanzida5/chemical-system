import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
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

export const LanguageContext = createContext();

// 🧭 NAVBAR
function Navbar({ lang, setLang, user, setUser, cart }) {

  const nav = useNavigate();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    nav("/");
  };

  const text = {
    en: {
      home:"Home", products:"Products", career:"Career", about:"About",
      services:"Services", contact:"Contact", signup:"Signup", login:"Login",
      dashboard:"Dashboard", logout:"Logout"
    }
  };

  return (
    <nav className="navbar sticky-nav">

      <h2 className="logo">MONIR & SANZIDA</h2>

      <ul className="menu">

        <li><Link to="/">{text[lang]?.home || "Home"}</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/chat">AI Chat</Link></li>

        <li><Link to="/cart">Cart ({cart.length})</Link></li>

        {!user && <li><Link to="/signup">Signup</Link></li>}
        {!user && <li><Link to="/login">Login</Link></li>}

        {user && <li><Link to="/dashboard">Dashboard</Link></li>}

        {user?.email === "admin@gmail.com" && (
          <li><Link to="/admin">Admin</Link></li>
        )}

        {user && (
          <li>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </li>
        )}

      </ul>

      <select value={lang} onChange={(e)=>setLang(e.target.value)}>
        <option value="en">EN</option>
        <option value="bn">BN</option>
        <option value="jp">JP</option>
        <option value="cn">CN</option>
      </select>

    </nav>
  );
}

// 🚀 APP
export default function App() {

  const [lang, setLang] = useState("en");
  const [cart, setCart] = useState([]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>

      <Router>

        <Navbar cart={cart} />

        <Routes>

          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/career" element={<Career />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />

          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>

      </Router>

    </LanguageContext.Provider>
  );
}