import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      description: "Creating beautiful and responsive user interfaces",
      skills: [
        { name: "React", level: 70, color: "#61DAFB" },
        { name: "TypeScript", level: 85, color: "#3178C6" },
        { name: "JavaScript", level: 85, color: "#F7DF1E" },
        { name: "HTML/CSS", level: 92, color: "#E34F26" },
        { name: "Tailwind CSS", level: 70, color: "#06B6D4" },
        { name: "SASS/SCSS", level: 75, color: "#CC6699" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      description: "Building robust server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 78, color: "#339933" },
        { name: "Express.js", level: 70, color: "#000000" },
        { name: "Python", level: 75, color: "#3776AB" },
        { name: "Java", level: 80, color: "#ED8B00" },
        { name: "REST APIs", level: 90, color: "#FF6B35" },
        { name: "GraphQL", level: 70, color: "#E10098" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      description: "Managing data and cloud infrastructure",
      skills: [
        { name: "MongoDB", level: 85, color: "#47A248" },
        { name: "MySQL", level: 80, color: "#4479A1" },
        { name: "Firebase", level: 88, color: "#FFCA28" },
        { name: "AWS", level: 65, color: "#FF9900" },
        { name: "Docker", level: 70, color: "#2496ED" },
        { name: "Git/GitHub", level: 92, color: "#F05032" }
      ]
    },
    {
      title: "Mobile & Tools",
      icon: "📱",
      description: "Mobile development and development tools",
      skills: [
        { name: "React Native", level: 75, color: "#61DAFB" },
        { name: "Flutter", level: 68, color: "#02569B" },
        { name: "VS Code", level: 95, color: "#007ACC" },
        { name: "Linux", level: 80, color: "#FCC624" },
        { name: "Figma", level: 72, color: "#F24E1E" },
        { name: "Postman", level: 85, color: "#FF6C37" }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "🧩" },
    { name: "Team Leadership", icon: "👥" },
    { name: "Communication", icon: "💬" },
    { name: "Critical Thinking", icon: "🤔" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Time Management", icon: "⏰" }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        
        {/* Category Navigation */}
        <div className="skills-nav">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              className={`nav-btn ${activeCategory === index ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              <span className="nav-icon">{category.icon}</span>
              <span className="nav-text">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="skills-showcase">
          <div className="category-header">
            <div className="category-icon">{skillCategories[activeCategory].icon}</div>
            <div className="category-info">
              <h3>{skillCategories[activeCategory].title}</h3>
              <p>{skillCategories[activeCategory].description}</p>
            </div>
          </div>

          <div className="skills-progress-grid">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="skill-progress-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{
                      width: animateProgress ? `${skill.level}%` : '0%',
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}40`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="soft-skills-section">
          <h3>Core Competencies</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-card">
                <div className="soft-skill-icon">{skill.icon}</div>
                <span className="soft-skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-item">
            <div className="summary-number">25+</div>
            <div className="summary-label">Technologies</div>
          </div>
          <div className="summary-item">
            <div className="summary-number">3+</div>
            <div className="summary-label">Years Learning</div>
          </div>
          <div className="summary-item">
            <div className="summary-number">15+</div>
            <div className="summary-label">Projects Built</div>
          </div>
          <div className="summary-item">
            <div className="summary-number">100%</div>
            <div className="summary-label">Passion</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;