import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      <nav style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/profile" style={{ margin: "0 10px" }}>Profile</Link>
        <Link to="/settings" style={{ margin: "0 10px" }}>Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
export default App;
