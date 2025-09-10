import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Settings() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = (e) => {
    e.preventDefault();
    setUser({ name, email });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Settings ⚙️</h1>
      <form onSubmit={handleUpdate} style={{ display: "inline-block", textAlign: "left" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
export default Settings;
