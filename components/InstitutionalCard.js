import Image from "next/image";

export default function InstitutionalCard({ data }) {
  return (
    <div className="card h-100">
      <div className="card-img-top">
        {/* eslint-disable-next-line */}
        <img
          className="img-fluid w-100"
          src={
            data.img ||
            "https://res.cloudinary.com/gobriocuarto/image/upload/v1666284220/Economia/Web/profile-man_kq8t1r.jpg"
          }
          alt={data.name}
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">{data.name}</h4>
        <p className="card-text">{data.position}</p>
        {data.cv && (
          <a
            href={data.cv}
            target="_blank"
            rel="noopener noreferrer"
            title={`Ver CV de ${data.name}`}
          >
            <i className="fas fa-file-alt me-1"></i>Ver CV
          </a>
        )}
      </div>
    </div>
  );
}
