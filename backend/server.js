require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// =======================
// 🔧 MIDDLEWARE
// =======================
app.use(cors());
app.use(express.json());

// =======================
// ✅ DB CONNECT
// =======================
connectDB();

// =======================
// 📦 MODELS
// =======================
const Product = require("./models/Product");
const Application = require("./models/Application");
const User = require("./models/User");

// =======================
// 🔐 LIBS
// =======================
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// =======================
// 🚀 ROUTES IMPORT
// =======================
const jobRoutes = require("./routes/jobRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

// =======================
// 🔥 ROUTES USE (ONLY ONCE)
// =======================
app.use("/api/jobs", jobRoutes);
app.use("/api/upload", uploadRoutes);

// =======================
// 🔐 AUTH
// =======================

// SIGNUP
app.post("/signup", async (req, res) => {
  const { name, email, password, address } = req.body;

  try {
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      address
    });

    await newUser.save();

    res.json({ success: true });

  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user._id },
      "SECRET123",
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token,
      user
    });

  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

// =======================
// 📦 PRODUCT API
// =======================
app.get("/products", async (req, res) => {
  const data = await Product.find();
  res.json(data);
});

app.post("/add-product", async (req, res) => {
  await new Product(req.body).save();
  res.json({ success: true });
});

app.delete("/delete-product/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// =======================
// 📄 APPLICATION
// =======================
app.post("/apply-job", async (req, res) => {
  await new Application(req.body).save();
  res.json({ success: true });
});

app.get("/all-applications", async (req, res) => {
  const data = await Application.find();
  res.json(data);
});

app.delete("/delete-application/:id", async (req, res) => {
  await Application.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// =======================
// 📩 MESSAGES
// =======================
let messages = [];

app.get("/messages", (req, res) => {
  res.json(messages);
});

app.post("/send-message", (req, res) => {
  const msg = {
    _id: Date.now().toString(),
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    read: false
  };

  messages.push(msg);
  res.json({ success: true });
});

app.delete("/delete-message/:id", (req, res) => {
  messages = messages.filter(m => m._id !== req.params.id);
  res.json({ success: true });
});

app.put("/mark-read/:id", (req, res) => {
  messages = messages.map(m =>
    m._id === req.params.id ? { ...m, read: true } : m
  );
  res.json({ success: true });
});

// =======================
// 🛠 SERVICES
// =======================
let services = [];

app.get("/services", (req, res) => {
  res.json(services);
});

app.post("/add-service", (req, res) => {
  const newService = {
    _id: Date.now().toString(),
    name: req.body.name,
    detail: req.body.detail,
    full: req.body.full
  };

  services.push(newService);
  res.json({ success: true });
});

app.delete("/delete-service/:id", (req, res) => {
  services = services.filter(s => s._id !== req.params.id);
  res.json({ success: true });
});

// =======================
// 🚀 SERVER START
// =======================
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});