import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import AddMedicine from "./pages/AddMedicine";

// Base URL of our backend API
const API_URL = "http://localhost:5000/api/medicines";

function App() {

  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load medicines from backend when app starts
  useEffect(() => {
    fetchMedicines();
  }, []);

  // GET request - fetch all medicines
  async function fetchMedicines() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMedicines(data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    } finally {
      setLoading(false);
    }
  }

  // POST request - add a new medicine
  async function handleAdd(newMedicine) {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newMedicine)
      });
      const data = await res.json();

      // Add the medicine returned from backend (has real id) to state
      setMedicines([...medicines, data]);
    } catch (error) {
      console.error("Error adding medicine:", error);
    }
  }

  // DELETE request - remove a medicine by id
  async function handleDelete(id) {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      // Remove from local state too
      setMedicines(medicines.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Error deleting medicine:", error);
    }
  }

  if (loading) {
    return <p style={{ textAlign: "center", padding: "3rem" }}>Loading medicines...</p>;
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