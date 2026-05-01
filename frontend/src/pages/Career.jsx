import React, { useState } from "react";
import "../css/career.css";

export default function Career() {
  // ======================
  // JOB DATA
  // ======================
  const [jobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full Time",
      skills: ["React", "CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "Backend Engineer",
      location: "Dhaka",
      type: "Full Time",
      skills: ["Node.js", "MongoDB", "REST API"]
    },
    {
      id: 3,
      title: "AI Engineer",
      location: "Remote",
      type: "Contract",
      skills: ["Python", "ML", "AI"]
    }
  ]);

  // ======================
  // STATE
  // ======================
  const [search, setSearch] = useState("");
  const [resume, setResume] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: ""
  });
  const [adminJob, setAdminJob] = useState({
    title: "",
    location: "",
    type: ""
  });

  // ======================
  // FILTER JOBS
  // ======================
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  // ======================
  // APPLY
  // ======================
  const applyJob = () => {
    alert("Application Submitted 🚀");
  };

  // ======================
  // RESUME HANDLER
  // ======================
  const handleResume = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setResume(file);
    }
  };

  // ======================
  // ADMIN POST JOB
  // ======================
  const postJob = () => {
    alert("Job Posted (Frontend UI) 🚀");
  };

  return (
    <div className="career-page">

      {/* HERO */}
      <div className="career-hero">
        <h1>🚀 Build Your Career</h1>
        <p>Find Jobs | Apply | Upload Resume | AI Match</p>
      </div>

      {/* SEARCH */}
      <div className="career-controls">
        <input
          placeholder="Search job..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* JOB LIST */}
      <div className="job-list">
        {filteredJobs.length === 0 ? (
          <p>No jobs found matching "{search}"</p>
        ) : (
          filteredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p>📍 {job.location} | ⏳ {job.type}</p>

              <div className="skills">
                {job.skills.map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>

              <button
                className="apply-btn"
                onClick={applyJob}
              >
                Apply
              </button>
            </div>
          ))
        )}
      </div>

      {/* AI MATCH */}
      <div className="career-form ai-match-form">
        <h2>🤖 AI Job Match</h2>
        <p>System will match your skills automatically (frontend demo)</p>
        <button className="btn-primary">Run AI Match</button>
      </div>

      {/* APPLY FORM */}
      <div className="career-form application-form">
        <h2>📝 Apply Now</h2>

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          placeholder="Position"
          value={form.position}
          onChange={(e) =>
            setForm({ ...form, position: e.target.value })
          }
        />

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleResume}
        />

        {resume && (
          <p className="resume-name">
            Selected: {resume.name}
          </p>
        )}

        <button
          className="btn-primary apply-btn"
          onClick={applyJob}
        >
          Submit Application
        </button>
      </div>

      {/* ADMIN PANEL */}
      <div className="career-form admin-job-form">
        <h2>🛠 Admin Job Panel</h2>

        <input
          placeholder="Job Title"
          value={adminJob.title}
          onChange={(e) =>
            setAdminJob({ ...adminJob, title: e.target.value })
          }
        />

        <input
          placeholder="Location"
          value={adminJob.location}
          onChange={(e) =>
            setAdminJob({ ...adminJob, location: e.target.value })
          }
        />

        <input
          placeholder="Job Type (Full Time / Part Time / Contract)"
          value={adminJob.type}
          onChange={(e) =>
            setAdminJob({ ...adminJob, type: e.target.value })
          }
        />

        <button
          className="btn-primary"
          onClick={postJob}
        >
          Post Job
        </button>
      </div>

    </div>
  );
}