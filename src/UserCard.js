import React from "react";

function UserCard({ name, email, city }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    margin: "10px auto",
    borderRadius: "8px",
    maxWidth: "400px",
    textAlign: "left"
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
}

export default UserCard;
