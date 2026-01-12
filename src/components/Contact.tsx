import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Let's Work Together</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              I'm always excited about new opportunities, collaborations, and 
              connecting with fellow developers and tech enthusiasts. Whether you have 
              a project in mind, want to discuss technology, or just want to say hello, 
              I'd love to hear from you!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <h4>Email</h4>
                <p>gamachis@student.mwu.edu.et</p>
              </div>
              <div className="contact-item">
                <h4>Location</h4>
                <p>Madda Walabu University, Bale Robe, Ethiopia</p>
              </div>
              <div className="contact-item">
                <h4>Connect With Me</h4>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/gamachis-reta-35a585361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/gboss12" target="_blank" rel="noopener noreferrer">
                    <span>GitHub</span>
                  </a>
              
                     <a href="https://www.tiktok.com/@gemebosss?_r=1&_t=ZS-92xVxe0n1ge" target="_blank" rel="noopener noreferrer">
                    <span>Tiktok</span>
                  </a>
                  
                     <a href="https://www.instagram.com/gmeboss_?igsh=bjJkaDRtaWh1ZHZh&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <span>Instagram</span>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hello..."
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;