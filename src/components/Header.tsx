import React, { useState, useEffect } from 'react';
import './Header.css';
import profilePhoto from '../assets/IMG_3224.jpeg';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className="header">
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <nav className="nav">
        <div className="logo">
          <h2>Gamachis</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button className="theme-toggle" onClick={toggleDarkMode}>
              <span className="theme-icon">{isDarkMode ? '☀️' : '🌙'}</span>
            </button>
          </li>
        </ul>
      </nav>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-photo">
            <div className="photo-container">
              <img 
                src={profilePhoto} 
                alt="Gamachis Profile" 
                className="profile-photo"
              />
              <div className="photo-ring"></div>
              <div className="photo-glow"></div>
            </div>
          </div>
          <h1>I'm <span>Gamachis</span></h1>
          <p className="subtitle">Computer Science Student at Madda Walabu University</p>
          <p className="description">3rd Year | Passionate Developer & Problem Solver</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary">Get In Touch</a>
            <a href="#projects" className="btn secondary">View My Work</a>
          </div>
        </div>
      </div>
      <div className="hero-scroll"></div>
    </header>
  );
};

export default Header;