import React from 'react';
import { Container, Card } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

interface AboutProps {
  className?: string;
}

export const About: React.FC<AboutProps> = ({ className = '' }) => {
  const [ref, isVisible] = useScrollAnimation();
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'CSS/SCSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'] },
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications and mentoring junior developers.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Built responsive web applications and collaborated with design teams to create user-centered experiences.'
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc',
      period: '2019 - 2020',
      description: 'Developed web applications and learned modern development practices in a fast-paced environment.'
    }
  ];

  return (
    <section ref={ref} id="about" className={`about ${className} ${isVisible ? 'about--visible' : ''}`}>
      <Container size="lg" className="about__container">
        <div className="about__header">
          <h2 className="about__title">About Me</h2>
          <p className="about__subtitle">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="about__content">
          <div className="about__text">
            <Card variant="elevated" className="about__card">
              <h3 className="about__card-title">My Story</h3>
              <p className="about__card-text">
                I'm a passionate full-stack developer with over 4 years of experience 
                building web applications that solve real-world problems. My journey 
                started with a curiosity about how things work on the internet, and 
                it has evolved into a career focused on creating meaningful digital experiences.
              </p>
              <p className="about__card-text">
                I believe in the power of clean code, thoughtful design, and continuous 
                learning. When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </Card>
          </div>

          <div className="about__skills">
            <h3 className="about__skills-title">Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <Card key={index} variant="outlined" className="skill-card">
                  <h4 className="skill-card__title">{skillGroup.category}</h4>
                  <ul className="skill-card__list">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="skill-card__item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="about__experience">
          <h3 className="about__experience-title">Professional Experience</h3>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <Card key={index} variant="default" className="experience-card">
                <div className="experience-card__header">
                  <h4 className="experience-card__title">{exp.title}</h4>
                  <div className="experience-card__meta">
                    <span className="experience-card__company">{exp.company}</span>
                    <span className="experience-card__period">{exp.period}</span>
                  </div>
                </div>
                <p className="experience-card__description">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
