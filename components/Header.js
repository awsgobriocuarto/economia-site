import React from "react";

export default function Header({ title, subtitle }) {
  return (
    <header>
      <div className="container">
        <h4 className="display-6">{title}</h4>
        <p className="lead">{subtitle}</p>
      </div>
    </header>
  );
}
