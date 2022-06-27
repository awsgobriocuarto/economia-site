export default function Spinner() {
  return (
    <div className="spinner">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="text">cargando...</span>
    </div>
  );
}
