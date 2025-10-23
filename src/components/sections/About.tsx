import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

const About: React.FC = () => {
  const aboutRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a skilled and versatile Software Engineer with over 2 years of combined experience in 
              full-stack development, backend systems, cloud infrastructure, and software architecture. 
              I communicate effectively within a team and adapt quickly to team cultures.
            </p>
            <p>
              My English proficiency is strong, and I possess a proven ability to learn rapidly, 
              as demonstrated throughout my project history. I specialize in creating scalable, 
              maintainable systems that deliver exceptional user experiences.
            </p>
            <div className="about-skills">
              <h3>Skills & Expertise</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Backend Technologies</h4>
                  <ul>
                    <li>Java (Spring Boot, JDBC)</li>
                    <li>C# (.NET, ASP.NET Core)</li>
                    <li>Python (Django, Flask, FastAPI)</li>
                    <li>Node.js (Express)</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Frontend & Databases</h4>
                  <ul>
                    <li>JavaScript & TypeScript</li>
                    <li>Angular & React</li>
                    <li>MySQL, PostgreSQL, SQL Server</li>
                    <li>MongoDB & Redis</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Cloud & DevOps</h4>
                  <ul>
                    <li>Google Cloud Platform</li>
                    <li>Kubernetes & Docker</li>
                    <li>CI/CD & GitHub Actions</li>
                    <li>Cloudflare & AWS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
