import React from "react";
import { ExpirationItem } from "./ExpirationItem";
import SectionHeader from "../../SectionHeader";

export default function Expirations({ expirations }) {
  if (expirations.length == 0) {
    return "";
  }

  return (
    <section className="expirations py-5">
      <div className="container">
        <SectionHeader 
          title="VENCIMIENTOS" 
          subtitle="PRÓXIMOS VENCIMIENTOS" 
          bgImage="/images/section-bg-vencimientos.png"
        />
        <div className="row">
          {expirations.map((expiration, index) => (
            <ExpirationItem key={expiration.titulo + index} {...expiration} />
          ))}
        </div>
      </div>
    </section>
  );
}
