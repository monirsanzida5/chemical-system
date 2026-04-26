import React, { useState } from "react";

export default function Career() {

  const [jobs] = useState([
    { id: 1, title: "Frontend Developer", location: "Remote", type: "Full Time", skills: ["React", "CSS"] },
    { id: 2, title: "Backend Engineer", location: "Dhaka", type: "Full Time", skills: ["Node"] }
  ]);

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

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const applyJob = () => alert("Application Submitted 🚀");

  const handleResume = (e) => {
    setResume(e.target.files[0]);
  };

  const postJob = () => alert("Job Posted 🚀");

  return (
    <div>

      <input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />

      {filteredJobs.map(job => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <button onClick={applyJob}>Apply</button>
        </div>
      ))}

      <input type="file" onChange={handleResume} />

      <button onClick={postJob}>Post Job</button>

    </div>
  );
}