function Dashboard({ medicines }) {

  const safeCount = medicines.filter((m) => m.status === "safe").length;
  const expiringCount = medicines.filter((m) => m.status === "expiring").length;
  const expiredCount = medicines.filter((m) => m.status === "expired").length;

  const cardStyle = {
    flex: 1,
    background: "white",
    borderRadius: "10px",
    padding: "1.5rem",
    textAlign: "center",
    border: "1px solid #e0e0e0"
  };

  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem", color: "#333" }}>Dashboard</h2>

      <div style={{ display: "flex", gap: "12px", marginBottom: "2rem" }}>
        <div style={cardStyle}>
          <p style={{ fontSize: "13px", color: "#777", marginBottom: "8px" }}>Safe</p>
          <p style={{ fontSize: "36px", fontWeight: "bold", color: "#155724" }}>{safeCount}</p>
        </div>
        <div style={cardStyle}>
          <p style={{ fontSize: "13px", color: "#777", marginBottom: "8px" }}>Expiring Soon</p>
          <p style={{ fontSize: "36px", fontWeight: "bold", color: "#856404" }}>{expiringCount}</p>
        </div>
        <div style={cardStyle}>
          <p style={{ fontSize: "13px", color: "#777", marginBottom: "8px" }}>Expired</p>
          <p style={{ fontSize: "36px", fontWeight: "bold", color: "#721c24" }}>{expiredCount}</p>
        </div>
      </div>

      <div style={{
        background: "white",
        borderRadius: "10px",
        padding: "1.5rem",
        border: "1px solid #e0e0e0"
      }}>
        <p style={{ fontSize: "14px", color: "#555" }}>
          Total medicines tracked: <strong>{medicines.length}</strong>
        </p>
        <p style={{ fontSize: "14px", color: "#555", marginTop: "8px" }}>
          Medicines needing attention: <strong style={{ color: "#e74c3c" }}>
            {expiringCount + expiredCount}
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Dashboard;