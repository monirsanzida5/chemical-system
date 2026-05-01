import React, { useState } from "react";
import "../css/adminjobs.css";
export default function AdminJobs() {
  const [job, setJob] = useState({
    title: "",
    location: "",
    skills: ""
  });

  const handlePostJob = async () => {
    const res = await fetch("http://localhost:5000/admin/job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: job.title,
        location: job.location,
        skills: job.skills
          ? job.skills
              .split(",")
              .map((s) => s.trim())
              .filter((s) => s !== "")
          : []
      })
    });

    if (res.ok) {
      alert("Job Posted ✅");
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="admin-panel admin-jobs">

      <h1>🛠 Admin Job Posting Panel</h1>

      <p>
        Use this panel to create new job openings for your team.
      </p>

      <div className="form-row">
        <label>Job Title</label>
        <input
          placeholder="E.g. Chemical Lab Assistant"
          value={job.title}
          onChange={(e) =>
            setJob({ ...job, title: e.target.value })
          }
        />
      </div>

      <div className="form-row">
        <label>Location</label>
        <input
          placeholder="E.g. Dhaka, Bangladesh"
          value={job.location}
          onChange={(e) =>
            setJob({ ...job, location: e.target.value })
          }
        />
      </div>

      <div className="form-row">
        <label>Required Skills (comma separated)</label>
        <input
          placeholder="React, Node, Chemistry"
          value={job.skills}
          onChange={(e) =>
            setJob({ ...job, skills: e.target.value })
          }
        />
        <p className="hint">
          Separate multiple skills with commas: “React, Node, Chemistry”
        </p>
      </div>

      <div className="submit-row">
        <button
          className="btn-primary"
          onClick={handlePostJob}
          disabled={!job.title || !job.location}
        >
          Post Job
        </button>
      </div>

    </div>
  );
}