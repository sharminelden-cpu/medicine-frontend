import { useState } from "react";
import MedicineCard from "./components/MedicineCard";
import AddMedicineForm from "./components/AddMedicineForm";

function App() {

  // Main medicines state - single source of truth
  const [medicines, setMedicines] = useState([]);

  // Add a new medicine to state
  function handleAdd(newMedicine) {
    setMedicines([...medicines, newMedicine]);
  }

  // Delete a medicine from state by id
  function handleDelete(id) {
    setMedicines(medicines.filter((m) => m.id !== id));
  }

  // Count medicines by status for dashboard
  const safeCount = medicines.filter((m) => m.status === "safe").length;
  const expiringCount = medicines.filter((m) => m.status === "expiring").length;
  const expiredCount = medicines.filter((m) => m.status === "expired").length;

  return (
    <div style={{ maxWidth: "650px", margin: "0 auto" }}>

      <h1 style={{ marginBottom: "1.5rem", color: "#1a1a2e", fontSize: "26px" }}>
        Medicine Expiry Tracker
      </h1>

      {/* Dashboard */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "2rem" }}>
        <div style={dashCardStyle}>
          <p style={{ fontSize: "13px", color: "#777" }}>Safe</p>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#155724" }}>{safeCount}</p>
        </div>
        <div style={dashCardStyle}>
          <p style={{ fontSize: "13px", color: "#777" }}>Expiring Soon</p>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#856404" }}>{expiringCount}</p>
        </div>
        <div style={dashCardStyle}>
          <p style={{ fontSize: "13px", color: "#777" }}>Expired</p>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#721c24" }}>{expiredCount}</p>
        </div>
      </div>

      {/* Add Medicine Form */}
      <AddMedicineForm onAdd={handleAdd} />

      {/* Medicine List */}
      <h2 style={{ marginBottom: "1rem", fontSize: "18px", color: "#333" }}>
        Medicine Inventory ({medicines.length})
      </h2>

      {medicines.length === 0 && (
        <p style={{ color: "#999", textAlign: "center", padding: "2rem" }}>
          No medicines added yet. Add your first medicine above!
        </p>
      )}

      {medicines.map((medicine) => (
        <MedicineCard
          key={medicine.id}
          id={medicine.id}
          name={medicine.name}
          batch={medicine.batch}
          quantity={medicine.quantity}
          unit={medicine.unit}
          expiry={medicine.expiry}
          status={medicine.status}
          onDelete={handleDelete}
        />
      ))}

    </div>
  );
}

const dashCardStyle = {
  flex: 1,
  background: "white",
  borderRadius: "10px",
  padding: "1rem",
  textAlign: "center",
  border: "1px solid #e0e0e0"
};

export default App;