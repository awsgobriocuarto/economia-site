import Image from "next/image";

export default function Notification() {
  return (
    <div className="notification">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <Image
              src="/images/notificacion.jpeg"
              width="1080"
              height="1080"
              alt="notificaicon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
