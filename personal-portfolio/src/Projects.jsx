import React from "react";

const Projects = () => {
    const projects = [
      { id: 1, title: "Project One", description: "A cool project I worked on." },
      { id: 2, title: "Project Two", description: "Another amazing project." },
      { id: 3, title: "Project Three", description: "A fun side project." },
    ];
  
    return (
      <section style={{ padding: "2rem", backgroundColor: "#1e1e1e", color: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>My Projects</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                border: "1px solid #444",
                padding: "1rem",
                borderRadius: "5px",
                width: "250px",
                backgroundColor: "#2a2a2a",
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default Projects;
