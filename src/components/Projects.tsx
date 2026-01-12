import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Hotel Management System",
      description: "A comprehensive hotel management application built with modern web technologies. Features include room booking, guest management, payment processing, staff scheduling, and real-time availability tracking with an intuitive admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      title: "Interview Scheduling System",
      description: "An intelligent interview scheduling platform that streamlines the hiring process. Includes candidate management, automated scheduling, email notifications, calendar integration, and interview feedback collection with analytics dashboard.",
      technologies: ["React", "TypeScript", "Node.js", "MySQL", "Calendar API"],
      status: "Completed",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
                <a href={project.demo} className="project-link secondary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;