import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg("Backend reachable"));
  }, []);

  return (
    <div>
      <h1>Frontend + Backend Test</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
