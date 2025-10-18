import React from 'react';
import { Container, Button } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Hero.css';

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const [ref, isVisible] = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} id="home" className={`hero ${className} ${isVisible ? 'hero--visible' : ''}`}>
      <Container size="lg">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Hi, I'm <span className="hero__name">Your Name</span>
            </h1>
            <h2 className="hero__subtitle">
              Full Stack Developer & UI/UX Designer
            </h2>
            <p className="hero__description">
              I create beautiful, functional, and user-centered digital experiences 
              that solve real-world problems. With expertise in modern web technologies 
              and a passion for clean design.
            </p>
            <div className="hero__actions">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="hero__visual">
            <div className="hero__image">
              <div className="hero__placeholder">
                <div className="hero__avatar">
                  <div className="avatar__circle">
                    <span className="avatar__initials">YN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll">
          <div className="scroll-indicator">
            <div className="scroll-indicator__line"></div>
            <span className="scroll-indicator__text">Scroll to explore</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
