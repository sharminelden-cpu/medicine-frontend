function MedicineCard({ name, batch, quantity, unit, expiry, status, onDelete, id }) {

  // Badge color based on status
  const badgeStyle = {
    display: "inline-block",
    marginTop: "10px",
    padding: "4px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
    background: status === "safe" ? "#d4edda" : status === "expiring" ? "#fff3cd" : "#f8d7da",
    color: status === "safe" ? "#155724" : status === "expiring" ? "#856404" : "#721c24"
  };

  return (
    <div style={{
      background: "white",
      borderRadius: "10px",
      padding: "1.2rem 1.5rem",
      marginBottom: "1rem",
      border: "1px solid #e0e0e0",
      position: "relative"
    }}>
      <button
        onClick={() => onDelete(id)}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: "white",
          color: "#e74c3c",
          border: "1px solid #e74c3c",
          borderRadius: "6px",
          padding: "4px 12px",
          fontSize: "12px",
          cursor: "pointer"
        }}
      >
        Delete
      </button>

      <h3 style={{ marginBottom: "6px", color: "#222" }}>{name}</h3>
      <p style={{ fontSize: "14px", color: "#555", margin: "3px 0" }}>
        Batch: <strong>{batch}</strong>
      </p>
      <p style={{ fontSize: "14px", color: "#555", margin: "3px 0" }}>
        Quantity: <strong>{quantity} {unit}</strong>
      </p>
      <p style={{ fontSize: "14px", color: "#555", margin: "3px 0" }}>
        Expiry: <strong>{expiry}</strong>
      </p>
      <span style={badgeStyle}>
        {status === "safe" ? "Safe" : status === "expiring" ? "Expiring Soon" : "Expired"}
      </span>
    </div>
  );
}

export default MedicineCard;