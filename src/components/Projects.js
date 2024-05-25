import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'Description of Project 1', image: 'path/to/image1.jpg' },
    { title: 'Project 2', description: 'Description of Project 2', image: 'path/to/image2.jpg' },
    { title: 'Project 3', description: 'Description of Project 3', image: 'path/to/image3.jpg' },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
