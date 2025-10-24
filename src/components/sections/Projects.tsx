import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Projects.css';

// Import project images
import chatappImage from '../../assets/images/chatapp/image.png';
import chanchitotoolsImage from '../../assets/images/chanchitotools/image.png';
import pixproImage from '../../assets/images/pixpro/image.png';
import qatuImage from '../../assets/images/qatu/image.png';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  category: string;
}

const Projects: React.FC = () => {
  const projectsRef = useScrollAnimation({ threshold: 0.1 });
  
  const projects: Project[] = [
    {
      id: 'chat-app-microservices',
      title: 'Distributed Real-time Chat Application',
      subtitle: 'Chat App Microservices',
      description: 'A distributed system designed to enable users to communicate through real-time messaging in chat rooms. Incorporates user registration, authentication, and real-time communication features.',
      tags: ['Microservices', 'Real-time', 'C#', 'Distributed Systems', 'Chat'],
      image: chatappImage,
      category: 'Microservices'
    },
    {
      id: 'chanchito-tools',
      title: 'ChanchitoTools',
      subtitle: 'Open Source Development Tools Collection',
      description: 'A comprehensive collection of open-source development tools and utilities. Features Firebase Web Client, Testing Abstractions for .NET, Command Management system, and Context Engineering toolkit for AI prompt optimization.',
      tags: ['Open Source', 'C#', 'JavaScript', 'Firebase', 'Testing', 'AI Tools'],
      image: chanchitotoolsImage,
      category: 'Open Source Tools'
    },
    {
      id: 'pixpro-platform',
      title: 'PixPro Image Processing Platform',
      subtitle: 'Complete Full-Stack Image Processing Ecosystem',
      description: 'A comprehensive image processing platform with modular RESTful API, Angular frontend, and event-driven architecture. Features real-time collaboration, AI-powered image processing, and scalable infrastructure.',
      tags: ['Angular', 'JavaScript', 'Clean Architecture', 'Event-Driven', 'AI Processing'],
      image: pixproImage,
      category: 'Full-Stack Platform'
    },
    {
      id: 'qatu-platform',
      title: 'Q\'atu Retail Platform',
      subtitle: 'Complete E-commerce Solution',
      description: 'A comprehensive retail platform with .NET Core API backend and JavaScript frontend. Features modern authentication, inventory management, and scalable architecture for retail operations.',
      tags: ['C#', '.NET Core', 'JavaScript', 'E-commerce', 'Retail'],
      image: qatuImage,
      category: 'E-commerce Platform'
    }
  ];

  return (
    <section className="projects" ref={projectsRef}>
      <div className="container">
        {projects.map((project, index) => (
          <div key={project.id} className="project-item">
            <div className="project-content">
              <div className="project-text">
                <div className="project-category">{project.category}</div>
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-subtitle">{project.subtitle}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <Link to={`/projects/${project.id}`} className="project-link">
                  View Work
                </Link>
              </div>
              <div className="project-media">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
