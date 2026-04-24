import React, { useState } from "react";

export default function AdminJobs() {

  const [job, setJob] = useState({
    title: "",
    location: "",
    skills: ""
  });

  const postJob = async () => {
    await fetch("http://localhost:5000/admin/job", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job)
    });

    alert("Job Posted ✅");
  };

  return (
    <div className="admin-panel">

      <h1>🛠 Admin Job Panel</h1>

      <input placeholder="Job Title"
        onChange={(e)=>setJob({...job,title:e.target.value})} />

      <input placeholder="Location"
        onChange={(e)=>setJob({...job,location:e.target.value})} />

      <input placeholder="Skills (comma)"
        onChange={(e)=>setJob({...job,skills:e.target.value.split(",")})} />

      <button onClick={postJob}>
        Post Job
      </button>

    </div>
  );
}