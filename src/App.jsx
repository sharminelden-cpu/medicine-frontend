import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import AddMedicine from "./pages/AddMedicine";

function App() {

  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("medicines");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.length > 0) {
        setMedicines(parsed);
      }
    }
  }, []);

  useEffect(() => {
    if (medicines.length > 0) {
      localStorage.setItem("medicines", JSON.stringify(medicines));
    }
  }, [medicines]);

  function handleAdd(newMedicine) {
    setMedicines([...medicines, newMedicine]);
  }

  function handleDelete(id) {
    const updated = medicines.filter((m) => m.id !== id);
    if (updated.length === 0) {
      localStorage.removeItem("medicines");
    }
    setMedicines(updated);
  }

  return (
    <BrowserRouter>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>

        <h1 style={{ margin: "1.5rem 0 1rem", color: "#1a1a2e", fontSize: "26px" }}>
          Medicine Expiry Tracker
        </h1>

        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard medicines={medicines} />} />
          <Route path="/inventory" element={<Inventory medicines={medicines} onDelete={handleDelete} />} />
          <Route path="/add" element={<AddMedicine onAdd={handleAdd} />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;