import React from "react";
import { BarColor } from "./BarColor";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      <BarColor />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
