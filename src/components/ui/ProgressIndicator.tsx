import React, { useState, useEffect } from 'react';
import './ProgressIndicator.css';

interface ProgressIndicatorProps {
  sections: string[];
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);

      // Determine active section based on scroll position
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      for (let i = 0; i < sectionElements.length; i++) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollTop >= elementTop - 200 && scrollTop < elementBottom - 200) {
            setActiveSection(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (index: number) => {
    const sectionId = sections[index];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="progress-indicator">
      <div className="progress-indicator__track">
        <div 
          className="progress-indicator__fill"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>
      
      <div className="progress-indicator__dots">
        {sections.map((section, index) => (
          <button
            key={section}
            className={`progress-indicator__dot ${
              index === activeSection ? 'progress-indicator__dot--active' : ''
            } ${index < activeSection ? 'progress-indicator__dot--completed' : ''}`}
            onClick={() => scrollToSection(index)}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>
    </div>
  );
};
