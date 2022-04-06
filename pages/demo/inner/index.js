import React from "react";
import Link from "next/link";
import Breadcrumbs from "../../../components/elements/breadcrumb";

export default function Inner() {
  return (
    <section>
      <Breadcrumbs />
      <div className="container">
        <h1>Inner</h1>
        <Link href="/demo">
          <a>Demo</a>
        </Link>
      </div>
    </section>
  );
}
