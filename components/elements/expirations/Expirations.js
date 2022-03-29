import React from "react";
import { useExpirations } from "../../../hooks/useExpirations";
import Spinner from "../spinner/Spinner";
import { ExpirationItem } from "./ExpirationItem";

export default function Expirations() {
  const { loading, expirations } = useExpirations();

  if (loading) {
    return <Spinner />;
  }

  if (expirations.length == 0) {
    return "";
  }

  return (
    <section className="expirations">
      <div className="container">
        <h2>Vencimientos</h2>
        <div className="row">
          {expirations.map((expiration) => (
            <ExpirationItem key={expiration._id} {...expiration} />
          ))}
        </div>
      </div>
    </section>
  );
}
