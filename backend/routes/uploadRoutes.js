const express = require("express");
const router = express.Router();

// TEST ROUTE
router.get("/", (req, res) => {
  res.json({ message: "Upload route working" });
});

// EXPORT MUST
module.exports = router;
