import React from "react";
import { ExpirationItem } from "./ExpirationItem";

export default function Expirations({ expirations }) {
  if (expirations.length == 0) {
    return "";
  }

  return (
    <section className="expirations">
      <div className="container">
        <h2>Vencimientos</h2>
        <div className="row">
          {expirations.map((expiration, index) => (
            <ExpirationItem key={expiration.titulo + index} {...expiration} />
          ))}
        </div>
      </div>
    </section>
  );
}
