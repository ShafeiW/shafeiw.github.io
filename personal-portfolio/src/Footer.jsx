import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: "1rem", backgroundColor: "#333", color: "#fff", textAlign: "center" }}>
      <p>© {new Date().getFullYear()} My Portfolio</p>
      <p>
        <a href="https://github.com" style={{ color: "white", textDecoration: "none", marginRight: "1rem" }}>
          GitHub
        </a>
        <a href="https://linkedin.com" style={{ color: "white", textDecoration: "none" }}>
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
