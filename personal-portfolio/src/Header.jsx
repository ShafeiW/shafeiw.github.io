import React from "react";

const Header = () => {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>My Portfolio</h1>
        <ul style={{ listStyle: "none", display: "flex", gap: "1rem", margin: 0 }}>
          <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
          <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Projects</a></li>
          <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
