import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Hero.css';

const Hero: React.FC = () => {
  const heroRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="hero" ref={heroRef}>
      <div className="morphing-blob"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi,</h1>
          <p className="hero-subtitle">
            I'm a Software Engineer specialized in
          </p>
          <p className="hero-subtitle">
            full-stack development and cloud infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
