import React from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/elements/breadcrumb";

export default function Demo() {
  return (
    <section>
      <Breadcrumbs />
      <div className="container">
        <h1>Demo</h1>
        <Link href="/demo/inner">
          <a>Inner</a>
        </Link>
      </div>
    </section>
  );
}
