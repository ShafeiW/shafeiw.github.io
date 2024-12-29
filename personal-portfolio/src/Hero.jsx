import React from "react";

const Hero = () => {
    return (
      <section style={{ textAlign: "center", padding: "3rem 1rem", backgroundColor: "#2a2a2a" }}>
        <h1 style={{ fontSize: "2.5rem" }}>Welcome to My Portfolio</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
          Hi, I'm [Your Name], a passionate Web Developer and Designer.
        </p>
        <button
          style={{
            marginTop: "2rem",
            padding: "0.5rem 1.5rem",
            backgroundColor: "#00aaff",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Learn More
        </button>
      </section>
    );
  };
  

export default Hero;
