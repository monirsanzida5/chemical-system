import React, { useState } from "react";

export default function Career() {

  const [jobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full Time",
      skills: ["React", "CSS", "JS"]
    },
    {
      id: 2,
      title: "Backend Engineer",
      location: "Dhaka",
      type: "Full Time",
      skills: ["Node", "MongoDB", "API"]
    },
    {
      id: 3,
      title: "AI Engineer",
      location: "Remote",
      type: "Contract",
      skills: ["Python", "ML", "AI"]
    }
  ]);

  const [search, setSearch] = useState("");

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

  // ✅ FIX: resume state added
  const [resume, setResume] = useState(null);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const applyJob = () => {
    alert("Application Submitted 🚀");
  };

  const handleResume = (e) => {
    setResume(e.target.files[0]);
  };

  const postJob = () => {
    alert("Job Posted 🚀");
  };

  return (
    <div className="career-page">

      <div className="career-hero">
        <h1>🚀 Build Your Career</h1>
        <p>Find Jobs | Apply | Upload Resume | AI Match</p>
      </div>

      <div className="career-controls">
        <input
          placeholder="Search job..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="job-list">
        {filteredJobs.map(job => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>
            <p>📍 {job.location}</p>
            <p>⏳ {job.type}</p>

            <div>
              {job.skills.map((s, i) => (
                <span key={i}>{s} </span>
              ))}
            </div>

            <button onClick={applyJob}>Apply</button>
          </div>
        ))}
      </div>

      <div className="career-form">
        <h2>📝 Apply Now</h2>

        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Position"
          onChange={(e) => setForm({ ...form, position: e.target.value })}
        />

        <input type="file" onChange={handleResume} />

        <button onClick={applyJob}>Submit Application</button>
      </div>

      <div className="career-form">
        <h2>🛠 Admin Panel</h2>

        <input
          placeholder="Job Title"
          onChange={(e) => setAdminJob({ ...adminJob, title: e.target.value })}
        />

        <input
          placeholder="Location"
          onChange={(e) => setAdminJob({ ...adminJob, location: e.target.value })}
        />

        <input
          placeholder="Type"
          onChange={(e) => setAdminJob({ ...adminJob, type: e.target.value })}
        />

        <button onClick={postJob}>Post Job</button>
      </div>

    </div>
  );
}