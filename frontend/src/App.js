import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
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

const text = {
  en: {
    home:"Home", products:"Products", career:"Career", about:"About",
    services:"Services", contact:"Contact", signup:"Signup", login:"Login",
    dashboard:"Dashboard", logout:"Logout"
  }
};

function Navbar({ lang, setLang, user, setUser, cart }) {
  const nav = useNavigate();

  const logout = () => {
    setUser(null);
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
        <li><Link to="/">{text[lang].home}</Link></li>
        <li><Link to="/products">{text[lang].products}</Link></li>
        <li><Link to="/career">{text[lang].career}</Link></li>
        <li><Link to="/about">{text[lang].about}</Link></li>
        <li><Link to="/services">{text[lang].services}</Link></li>
        <li><Link to="/contact">{text[lang].contact}</Link></li>

        {!user && <li><Link to="/signup">Signup</Link></li>}
        {!user && <li><Link to="/login">Login</Link></li>}

        {user && <li><Link to="/dashboard">Dashboard</Link></li>}

        {user && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>

      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">EN</option>
      </select>
    </nav>
  );
}

export default function App(){

  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [lang,setLang] = useState("en");
  const [cart, setCart] = useState([]);

  // ✅ FIX (admin use)
  useEffect(()=>{
    console.log("Admin:", admin);
  },[admin]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>

      <Router>
        <Navbar lang={lang} setLang={setLang} user={user} setUser={setUser} cart={cart} />

        <Routes>
          <Route path="/" element={<Home lang={lang}/>}/>
          <Route path="/products" element={<Products lang={lang} cart={cart} setCart={setCart}/>}/>
          <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart}/>}/>
          <Route path="/about" element={<About lang={lang}/>}/>
          <Route path="/career" element={<Career/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>

      </Router>

    </LanguageContext.Provider>
  );
}