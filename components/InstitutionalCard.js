import Image from "next/image";

export default function InstitutionalCard({ data }) {
  return (
    <div className="card">
      <div className="card-img-top">
        {data.img ? (
          <Image src={data.img} width={250} height={250} alt={data.name} priority />
        ) : (
          <Image
            src="https://res.cloudinary.com/gobriocuarto/image/upload/v1666284220/Economia/Web/profile-man_kq8t1r.jpg"
            width={250}
            height={250}
            priority
            alt="profile"
          />
        )}
      </div>
      <div className="card-body">
        <h4 className="card-title">{data.name}</h4>
        <p className="card-text">{data.position}</p>
        {data.cv ? (
          <a href={data.cv} target="_blank" rel="noopener noreferrer">
            cv
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
