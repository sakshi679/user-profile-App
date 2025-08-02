import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await res.json();
      setUsers(data);
      setError(false);
    } catch (err) {
      console.log("Fetch error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: "30px", fontFamily: "sans-serif" }}>
      <h1>👥 User Profiles</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px", width: "250px" }}
      />

      {loading ? (
        <p>⏳ Loading users...</p>
      ) : error ? (
        <p style={{ color: "red" }}>❌ Failed to load user data. Please try again later.</p>
      ) : (
        filteredUsers.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))
      )}
    </div>
  );
}

export default App;
