// src/components/Projects.js
import React from "react";
import "../styles/Projects.css";

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project-list">
      {/* Add your projects here */}
      <div className="project-card">
        <h3>Project Title</h3>
        <p>Project description goes here.</p>
        <a
          href="https://github.com/yourusername/project-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
