import React, { useState, useEffect, createContext } from "react"; // ✅ ADD createContext
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

// ✅ NEW (GLOBAL LANGUAGE CONTEXT)
export const LanguageContext = createContext();


// 🌐 TRANSLATION
const text = {
  en: {
    home:"Home", products:"Products", career:"Career", about:"About",
    services:"Services", contact:"Contact", signup:"Signup", login:"Login",
    dashboard:"Dashboard", logout:"Logout"
  },
  bn: {
    home:"হোম", products:"পণ্য", career:"ক্যারিয়ার", about:"আমাদের সম্পর্কে",
    services:"সার্ভিস", contact:"যোগাযোগ", signup:"সাইনআপ", login:"লগইন",
    dashboard:"ড্যাশবোর্ড", logout:"লগআউট"
  },
  jp: {
    home:"ホーム", products:"製品", career:"キャリア", about:"私たちについて",
    services:"サービス", contact:"連絡先", signup:"サインアップ", login:"ログイン",
    dashboard:"ダッシュボード", logout:"ログアウト"
  },
  cn: {
    home:"主页", products:"产品", career:"职业", about:"关于我们",
    services:"服务", contact:"联系", signup:"注册", login:"登录",
    dashboard:"仪表板", logout:"退出"
  }
};


// 🧭 NAVBAR
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
        <li><Link to="/chat">AI Chat</Link></li>

        {!user && <li><Link to="/signup">{text[lang].signup}</Link></li>}
        {!user && <li><Link to="/login">{text[lang].login}</Link></li>}

        {user && <li><Link to="/dashboard">{text[lang].dashboard}</Link></li>}

        {user && (
          <li>
            <button className="logout-btn" onClick={logout}>
              {text[lang].logout}
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


// 🔐 SIGNUP
function Signup(){
  const nav = useNavigate();

  const signup = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:5000/signup", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ name,email,password })
    });

    const data = await res.json();

    if(data.success){
      alert("Signup Success");
      nav("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="form">
      <input id="name" placeholder="Name"/>
      <input id="email" placeholder="Email"/>
      <input id="password" placeholder="Password"/>
      <input id="address" placeholder="Address"/>
      <button onClick={signup}>Signup</button>
    </div>
  );
}

// 🔐 LOGIN
function Login({ setUser }){
  const nav = useNavigate();

  const login = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:5000/login", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ email,password })
    });

    const data = await res.json();

    if(data.success){
      setUser(data.user);
      nav("/dashboard");
    } else {
      alert("Wrong Email or Password");
    }
  };

  return (
    <div className="form">
      <input id="email" placeholder="Email"/>
      <input id="password" placeholder="Password"/>
      <button onClick={login}>Login</button>
    </div>
  );
}

// 📊 DASHBOARD
function Dashboard({ user, setUser }){
  const [edit, setEdit] = useState(false);

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: user?.address || "",
    city: user?.city || "",
    country: user?.country || "",
    phone: user?.phone || "",
    photo: user?.photo || ""
  });

  if(!user) return <Navigate to="/login" />;

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setForm({ ...form, photo: reader.result });
    };

    if(file) reader.readAsDataURL(file);
  };

  const saveProfile = () => {
    setUser(form);
    localStorage.setItem("user", JSON.stringify(form));
    setEdit(false);
    alert("Profile Updated ✅");
  };

  return (
    <div className="profile-container">
      <h1>👤 My Profile</h1>

      <div className="profile-photo">
        <img src={form.photo || "https://via.placeholder.com/120"} alt="profile"/>
        {edit && <input type="file" onChange={handleImage}/>}
      </div>

      <div className="profile-info">
        <input disabled={!edit} value={form.name}
          onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input disabled value={form.email}/>
        <input disabled={!edit} value={form.phone}
          onChange={(e)=>setForm({...form,phone:e.target.value})}/>
        <input disabled={!edit} value={form.address}
          onChange={(e)=>setForm({...form,address:e.target.value})}/>
      </div>

      <div className="profile-actions">
        {!edit ? (
          <button onClick={()=>setEdit(true)}>Edit Profile</button>
        ) : (
          <button onClick={saveProfile}>Save</button>
        )}
      </div>
    </div>
  );
}

// 🚀 APP
export default function App(){

  const [darkMode, setDarkMode] = useState(false);
  const [admin, setAdmin] = useState(false);
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

  const [lang,setLang] = useState("en");
  const [cart, setCart] = useState([]);

  const sendMessage = () => {
    if(!input) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev,
        { from: "bot", text: "Just wait we will contact you soon 😊" }
      ]);
    }, 800);
  };

  useEffect(() => {
    if(user){
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}> {/* ✅ ADD */}
      <div className={darkMode ? "dark" : ""}>

        {loading && <div className="loader">Loading...</div>}

        <Router>

          <Navbar lang={lang} setLang={setLang} user={user} setUser={setUser} cart={cart} />

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              position: "fixed",
              top: "80px",
              right: "20px",
              zIndex: 9999
            }}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <Routes>
            <Route path="/" element={<Home lang={lang}/>}/>
            <Route path="/products" element={<Products lang={lang} cart={cart} setCart={setCart}/>}/>
            <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart}/>}/>
            <Route path="/about" element={<About lang={lang}/>}/>
            <Route path="/career" element={<Career lang={lang}/>}/>
            <Route path="/services" element={<Services lang={lang}/>}/>
            <Route path="/contact" element={<Contact lang={lang}/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login setUser={setUser}/>}/>
            <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser}/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>

            <Route path="/admin" element={
              <ProtectedRoute user={user}>
                <Admin />
              </ProtectedRoute>
            }/>

            <Route path="/admin-login" element={<AdminLogin setAdmin={setAdmin} />}/>
          </Routes>

        </Router>

        {chatOpen && (
          <div className="chat-box">
            <div className="chat-header">
              <span>🤖 AI Support</span>
              <button onClick={() => setChatOpen(false)}>X</button>
            </div>

            <div className="chat-body">
              {messages.map((msg, i) => (
                <div key={i} className={msg.from === "user" ? "msg user" : "msg bot"}>
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type message..."/>
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        )}

        <div className="chat-btn" onClick={() => setChatOpen(true)}>
          💬
        </div>

      </div>
    </LanguageContext.Provider>
  );
}