import { useState, useEffect } from "react";
import MedicineCard from "./components/MedicineCard";
import AddMedicineForm from "./components/AddMedicineForm";

function App() {

  const [medicines, setMedicines] = useState([]);

  // useEffect 1 — runs ONCE when app first loads
  // Reads saved medicines from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("medicines");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.length > 0) {
        setMedicines(parsed);
      }
    }
  }, []);

  // useEffect 2 — runs every time medicines changes
  // Only saves when medicines has items — prevents overwriting on first load
  useEffect(() => {
    if (medicines.length > 0) {
      localStorage.setItem("medicines", JSON.stringify(medicines));
    }
  }, [medicines]);

  // Add a new medicine
  function handleAdd(newMedicine) {
    setMedicines([...medicines, newMedicine]);
  }

  // Delete a medicine by id
  function handleDelete(id) {
    const updated = medicines.filter((m) => m.id !== id);
    if (updated.length === 0) {
      localStorage.removeItem("medicines");
    }
    setMedicines(updated);
  }

  // Dashboard counts
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
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#155724" }}>
            {safeCount}
          </p>
        </div>
        <div style={dashCardStyle}>
          <p style={{ fontSize: "13px", color: "#777" }}>Expiring Soon</p>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#856404" }}>
            {expiringCount}
          </p>
        </div>
        <div style={dashCardStyle}>
          <p style={{ fontSize: "13px", color: "#777" }}>Expired</p>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#721c24" }}>
            {expiredCount}
          </p>
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