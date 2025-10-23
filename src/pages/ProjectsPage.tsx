import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: string;
}

const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'pixpro-platform',
      title: 'PixPro Image Processing Platform',
      subtitle: 'Complete Full-Stack Image Processing Ecosystem',
      description: 'A comprehensive image processing platform with modular RESTful API, Angular frontend, and event-driven architecture. Features real-time collaboration, AI-powered image processing, and scalable infrastructure.',
      tags: ['Angular', 'JavaScript', 'Clean Architecture', 'Event-Driven', 'AI Processing'],
      category: 'Full-Stack Platform'
    },
    {
      id: 'workers-api',
      title: 'Employee Vacation Management System',
      subtitle: 'WorkersAPI - RESTful Employee Management',
      description: 'A RESTful API for managing employee vacation requests in a company. Built with TypeScript and modern backend practices, featuring comprehensive employee management and vacation tracking capabilities.',
      tags: ['TypeScript', 'RESTful API', 'Employee Management', 'Backend Development'],
      category: 'Backend API'
    },
    {
      id: 'qatu-platform',
      title: 'Q\'atu Retail Platform',
      subtitle: 'Complete E-commerce Solution',
      description: 'A comprehensive retail platform with .NET Core API backend and JavaScript frontend. Features modern authentication, inventory management, and scalable architecture for retail operations.',
      tags: ['C#', '.NET Core', 'JavaScript', 'E-commerce', 'Retail'],
      category: 'E-commerce Platform'
    },
    {
      id: 'uno-game-platform',
      title: 'Uno Game Platform',
      subtitle: 'Multiplayer Card Game System',
      description: 'A complete Uno game implementation with backend service using vanilla JavaScript and dependency injection, plus a monolithic SPA frontend with Component-Driven Architecture and Feature-Driven design.',
      tags: ['JavaScript', 'SPA', 'Game Development', 'Component Architecture'],
      category: 'Game Development'
    },
    {
      id: 'space-invaders-game',
      title: 'Space Invaders Game',
      subtitle: 'Cross-Platform Game with Uno Platform',
      description: 'A space invaders game implementation using Uno Platform Foundation and MVVM model. Demonstrates cross-platform game development with modern architectural patterns.',
      tags: ['C#', 'Uno Platform', 'MVVM', 'Game Development', 'Cross-Platform'],
      category: 'Cross-Platform Game'
    },
    {
      id: 'game-of-life',
      title: 'Conway\'s Game of Life',
      subtitle: 'Java Implementation of Cellular Automaton',
      description: 'An implementation of Conway\'s Game of Life using Java. Demonstrates algorithmic thinking and object-oriented programming principles in a classic computer science simulation.',
      tags: ['Java', 'Algorithm', 'Simulation', 'Object-Oriented Programming'],
      category: 'Algorithm Implementation'
    },
    {
      id: 'oberstaff-technical-test',
      title: 'Oberstaff Backend Technical Test',
      subtitle: 'Python Backend Development Assessment',
      description: 'A comprehensive backend development test solution demonstrating Python skills, API design, and problem-solving abilities. Showcases technical proficiency in backend development.',
      tags: ['Python', 'Backend Development', 'API Design', 'Technical Assessment'],
      category: 'Technical Assessment'
    },
    {
      id: 'async-image-fetcher',
      title: 'Bulk Image Download API Service',
      subtitle: 'AsyncImage Fetcher API',
      description: 'A robust and efficient backend service designed to streamline the bulk downloading of images from remote URLs, with smart concurrency control and unique image storage.',
      tags: ['C#', '.NET Core', 'Async Programming', 'Image Processing', 'API'],
      category: 'API Development'
    },
    {
      id: 'chat-app-microservices',
      title: 'Distributed Real-time Chat Application',
      subtitle: 'Chat App Microservices',
      description: 'A distributed system designed to enable users to communicate through real-time messaging in chat rooms. Incorporates user registration, authentication, and real-time communication features.',
      tags: ['Microservices', 'Real-time', 'C#', 'Distributed Systems', 'Chat'],
      category: 'Microservices'
    },
    {
      id: 'youtube-api-testing',
      title: 'YouTube Data API Integration Project',
      subtitle: 'YouTube API Testing Project',
      description: 'The YouTube Data API allows you to incorporate features that are normally executed on the YouTube website into your own website or application. This project demonstrates various API integrations and data handling.',
      tags: ['JavaScript', 'YouTube API', 'Data Integration', 'Web Development'],
      category: 'API Integration'
    }
  ];

  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-header">
          <h1>Craft</h1>
          <p>Selected projects showcasing full-stack development, cloud infrastructure, and software architecture expertise.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                <Link to={`/projects/${project.id}`} className="project-link">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
