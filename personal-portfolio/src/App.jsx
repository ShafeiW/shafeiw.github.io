import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}


export default App;