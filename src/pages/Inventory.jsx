import MedicineCard from "../components/MedicineCard";

function Inventory({ medicines, onDelete }) {
  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem", color: "#333" }}>
        Medicine Inventory ({medicines.length})
      </h2>

      {medicines.length === 0 && (
        <p style={{ color: "#999", textAlign: "center", padding: "3rem" }}>
          No medicines added yet. Go to Add Medicine to get started!
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
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Inventory;