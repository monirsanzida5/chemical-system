const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const Application = require("../models/Application");
const multer = require("multer");

// ======================
// FILE UPLOAD SETUP
// ======================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// ======================
// GET ALL JOBS
// ======================
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// ======================
// ADMIN: POST JOB
// ======================
router.post("/add", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json({ success: true, job });
});

// ======================
// APPLY JOB + RESUME
// ======================
router.post("/apply", upload.single("resume"), async (req, res) => {
  const newApp = new Application({
    name: req.body.name,
    email: req.body.email,
    position: req.body.position,
    resume: req.file ? req.file.path : ""
  });

  await newApp.save();
  res.json({ success: true });
});

// ======================
// GET APPLICATIONS (ADMIN)
// ======================
router.get("/applications", async (req, res) => {
  const apps = await Application.find();
  res.json(apps);
});

module.exports = router;