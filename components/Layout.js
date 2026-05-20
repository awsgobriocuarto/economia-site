import React from "react";
import { BarColor } from "./BarColor";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ChatBubble from "./ChatBubble";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ChatBubble />
    </div>
  );
}
