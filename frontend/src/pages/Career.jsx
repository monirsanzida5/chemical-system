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

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const applyJob = () => {
    alert("Application Submitted 🚀");
  };

  return (
    <div className="career-page">

      <div className="career-hero">
        <h1>🚀 Build Your Career</h1>
      </div>

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

      <div>
        <input placeholder="Name"
          onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input placeholder="Position"
          onChange={(e)=>setForm({...form,position:e.target.value})}/>

        <button onClick={applyJob}>Submit</button>
      </div>

    </div>
  );
}