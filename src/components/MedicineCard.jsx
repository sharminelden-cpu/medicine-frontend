function MedicineCard(props) {
  return (
    <div style={{
      background: "white",
      borderRadius: "10px",
      padding: "1.2rem",
      marginBottom: "1rem",
      border: "1px solid #e0e0e0"
    }}>
      <h3>{props.name}</h3>
      <p>Batch: <strong>{props.batch}</strong></p>
      <p>Expiry: <strong>{props.expiry}</strong></p>
    </div>
  );
}

export default MedicineCard;