import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Profile</h1>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
    </div>
  );
}
export default Profile;
