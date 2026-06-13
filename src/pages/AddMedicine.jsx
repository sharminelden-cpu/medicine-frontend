import AddMedicineForm from "../components/AddMedicineForm";
import { useNavigate } from "react-router-dom";

function AddMedicine({ onAdd }) {

  const navigate = useNavigate();

  async function handleAdd(medicine) {
    await onAdd(medicine);
    navigate("/inventory");
  }

  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem", color: "#333" }}>Add New Medicine</h2>
      <AddMedicineForm onAdd={handleAdd} />
    </div>
  );
}

export default AddMedicine;