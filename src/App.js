import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [students, setStudents] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:8000/api/students", { name, email });
    fetchStudents();
    setName("");
    setEmail("");
  };

  const fetchStudents = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/students");
    setStudents(res.data);
    
  };

  await axios.post("http://127.0.0.1:8000/api/students", { name, email });
  const res = await axios.get("http://127.0.0.1:8000/api/students");

  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>

      <h3>Student List</h3>
      <ul>
        {students.map((s) => (
          <li key={s.id}>{s.name} - {s.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
