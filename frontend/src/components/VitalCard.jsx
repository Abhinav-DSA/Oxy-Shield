export default function VitalCard({ icon, label, value, status }) {
  return (
    <div className="card glass fade-in">
      <div className="card-top">
        <div>
          <p>{label}</p>
          <h3>{value}</h3>
        </div>
        {icon}
      </div>
      <span className="status">{status}</span>
    </div>
  );
}
