import React, { useState } from "react";

export default function Career() {

  const [jobs] = useState([
    { id: 1, title: "Frontend Developer" },
    { id: 2, title: "Backend Engineer" }
  ]);

  const [search, setSearch] = useState("");

  // ❌ unused variable remove
  // form, adminJob remove করা হয়েছে

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const applyJob = () => alert("Applied 🚀");

  return (
    <div>

      <h1>Career</h1>

      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredJobs.map(job => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <button onClick={applyJob}>Apply</button>
        </div>
      ))}

    </div>
  );
}