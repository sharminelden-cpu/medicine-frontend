import MedicineCard from "./components/MedicineCard";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "1.5rem", color: "#1a1a2e" }}>
        Medicine Expiry Tracker
      </h1>

      <MedicineCard
        name="Paracetamol 500mg"
        batch="PCM-2024-001"
        expiry="2027-01-01"
      />

      <MedicineCard
        name="Ibuprofen 400mg"
        batch="IBU-2023-089"
        expiry="2025-01-01"
      />

    </div>
  );
}

export default App;