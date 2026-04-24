const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  read: { type: Boolean, default: false }, // 🔥 NEW
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Message", messageSchema);