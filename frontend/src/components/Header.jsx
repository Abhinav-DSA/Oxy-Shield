import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");
  return (
    <header className="header glass">
      <div>
        <h1>Health Risk Overview</h1>
        <p>AI-assisted triage decision support</p>
      </div>
      <input placeholder="Search Soldier ID or Name" value={search} onChange={(e) => setSearch(e.target.value)} />
    </header>
  );
}
