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
function Navbar({ cart }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart ({cart.length})</Link></li>
      </ul>
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