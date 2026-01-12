import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Gamachis, a passionate Computer Science student in my 3rd year at 
              Madda Walabu University. I have a strong interest in software development, 
              web technologies, and solving complex problems through code.
            </p>
            <p>
              My journey in computer science has equipped me with a solid foundation in 
              programming languages, algorithms, and software engineering principles. 
              I'm always eager to learn new technologies and apply them to real-world projects.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to 
              open-source projects, and collaborating with fellow developers to create 
              innovative solutions.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>3rd</h3>
              <p>Year Student</p>
            </div>
            <div className="stat">
              <h3>CS</h3>
              <p>Major</p>
            </div>
            <div className="stat">
              <h3>MWU</h3>
              <p>University</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;