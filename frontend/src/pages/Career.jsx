import React, { useState } from "react";

export default function Career() {

  const [jobs] = useState([
    { id: 1, title: "Frontend Developer", location: "Remote", type: "Full Time", skills: ["React", "CSS", "JS"] },
    { id: 2, title: "Backend Engineer", location: "Dhaka", type: "Full Time", skills: ["Node", "MongoDB", "API"] },
    { id: 3, title: "AI Engineer", location: "Remote", type: "Contract", skills: ["Python", "ML", "AI"] }
  ]);

  const [search, setSearch] = useState("");

  // ✅ FIX: resume state added
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

  // ❌ FIXED: removed wrong console.log
  // console.log(resume);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const applyJob = () => {
    alert("Application Submitted 🚀");
  };

  const handleResume = (e) => {
    setResume(e.target.files[0]); // ✅ now valid
  };

  const postJob = () => {
    alert("Job Posted 🚀");
  };

  return (
    <div className="career-page">

      <h1>Career Page</h1>

      <input
        placeholder="Search job..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredJobs.map(job => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <button onClick={applyJob}>Apply</button>
        </div>
      ))}

      <input type="file" onChange={handleResume} />

      <button onClick={applyJob}>Submit</button>

    </div>
  );
}