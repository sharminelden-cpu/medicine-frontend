import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();

  const linkStyle = (path) => ({
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    color: location.pathname === path ? "white" : "#333",
    background: location.pathname === path ? "#4a90e2" : "transparent"
  });

  return (
    <nav style={{
      background: "white",
      padding: "1rem 1.5rem",
      marginBottom: "2rem",
      borderRadius: "10px",
      border: "1px solid #e0e0e0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <span style={{ fontWeight: "bold", fontSize: "16px", color: "#1a1a2e" }}>
        💊 MediTrack
      </span>

      <div style={{ display: "flex", gap: "8px" }}>
        <Link to="/" style={linkStyle("/")}>Dashboard</Link>
        <Link to="/inventory" style={linkStyle("/inventory")}>Inventory</Link>
        <Link to="/add" style={linkStyle("/add")}>Add Medicine</Link>
      </div>
    </nav>
  );
}

export default Navbar;