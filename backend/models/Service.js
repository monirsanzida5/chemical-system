const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: String,
  detail: String,
  full: String,
});

module.exports = mongoose.model("Service", serviceSchema);