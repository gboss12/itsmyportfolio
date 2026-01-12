import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-content">
          <div className="education-item">
            <div className="education-header">
              <h3>Bachelor of Science in Computer Science</h3>
              <span className="year">2022 - 2026 (Expected)</span>
            </div>
            <h4>Madda Walabu University</h4>
            <p>
              Currently pursuing my Bachelor's degree in Computer Science with a focus on 
              software engineering, algorithms, and modern web technologies. Maintaining 
              excellent academic performance while actively participating in coding 
              competitions and tech communities.
            </p>
            <div className="coursework">
              <h5>Core Coursework & Specializations:</h5>
              <ul>
                <li>Data Structures & Algorithms</li>
                <li>Object-Oriented Programming (Java, C++)</li>
                <li>Database Management Systems</li>
                <li>Web Development (HTML, CSS, JavaScript)</li>
                <li>Software Engineering Principles</li>
                <li>Operating Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;