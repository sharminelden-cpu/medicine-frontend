import { useState } from "react";

function AddMedicineForm({ onAdd }) {

  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("tablets");
  const [expiry, setExpiry] = useState("");

  function handleSubmit() {
    // Validate all fields filled
    if (!name || !batch || !quantity || !expiry) {
      alert("Please fill in all fields!");
      return;
    }

    // Create medicine object
    const newMedicine = {
      id: Date.now(),
      name,
      batch,
      quantity,
      unit,
      expiry,
      status: getStatus(expiry)
    };

    // Pass it up to parent
    onAdd(newMedicine);

    // Clear form
    setName("");
    setBatch("");
    setQuantity("");
    setExpiry("");
  }

  function getStatus(expiryDate) {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffDays = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return "expired";
    if (diffDays <= 30) return "expiring";
    return "safe";
  }

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    marginTop: "5px",
    outline: "none"
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: "bold",
    color: "#555",
    marginTop: "12px"
  };

  return (
    <div style={{
      background: "white",
      borderRadius: "12px",
      padding: "1.5rem",
      marginBottom: "2rem",
      border: "1px solid #e0e0e0"
    }}>
      <h2 style={{ marginBottom: "1rem", fontSize: "18px", color: "#333" }}>
        Add New Medicine
      </h2>

      <label style={labelStyle}>Medicine Name</label>
      <input
        style={inputStyle}
        type="text"
        placeholder="e.g. Paracetamol 500mg"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label style={labelStyle}>Batch Number</label>
      <input
        style={inputStyle}
        type="text"
        placeholder="e.g. PCM-2024-001"
        value={batch}
        onChange={(e) => setBatch(e.target.value)}
      />

      <label style={labelStyle}>Quantity</label>
      <input
        style={inputStyle}
        type="number"
        placeholder="e.g. 100"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <label style={labelStyle}>Unit</label>
      <select
        style={inputStyle}
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      >
        <option value="tablets">Tablets</option>
        <option value="capsules">Capsules</option>
        <option value="ml">ML</option>
        <option value="strips">Strips</option>
      </select>

      <label style={labelStyle}>Expiry Date</label>
      <input
        style={inputStyle}
        type="date"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "12px",
          background: "#4a90e2",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "15px",
          cursor: "pointer",
          marginTop: "1rem"
        }}
      >
        Add Medicine
      </button>
    </div>
  );
}

export default AddMedicineForm;