import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Let's Connect</h4>
            <p>Ready to build scalable software solutions together?</p>
            <div className="footer-links">
              <a href="mailto:alejandrojose.deoliveira@gmail.com">Email</a>
              <a href="https://github.com/AlejandroJoseDeOliveiraBarrancos" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://drive.google.com/file/d/1dmOQ5DYQmnoL3r12ffWHi1afuNEawv84/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
            </div>
          </div>
          <div className="footer-section">
            <p className="copyright">
              © 2024 Alejandro J. De Oliveira B. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
