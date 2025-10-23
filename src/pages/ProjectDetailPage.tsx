import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetailPage.css';

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const projectDetails: { [key: string]: ProjectDetail } = {
    'pixpro-platform': {
      id: 'pixpro-platform',
      title: 'PixPro Image Processing Platform',
      subtitle: 'Complete Full-Stack Image Processing Ecosystem',
      description: 'A comprehensive image processing platform with modular RESTful API, Angular frontend, and event-driven architecture.',
      longDescription: 'PixPro is a complete image processing ecosystem featuring a modular RESTful API backend, Angular frontend, and event-driven architecture. The platform supports real-time collaboration, AI-powered image processing, and scalable infrastructure with Docker containerization.',
      technologies: ['Angular', 'JavaScript', 'Clean Architecture', 'Event-Driven', 'AI Processing', 'Docker', 'RESTful API', 'TypeScript'],
      challenges: [
        'Implementing real-time collaboration features across multiple users',
        'Designing scalable event-driven architecture for image processing',
        'Integrating AI-powered image transformation capabilities',
        'Managing complex state synchronization between frontend and backend'
      ],
      solutions: [
        'Developed modular RESTful API following Clean Architecture principles',
        'Implemented event-driven design patterns for asynchronous processing',
        'Created Angular SPA with Component-Driven Architecture',
        'Used Docker for containerized deployment and scalability'
      ],
      results: [
        'Successfully created a scalable image processing platform',
        'Implemented real-time collaboration features',
        'Achieved modular and maintainable codebase architecture',
        'Delivered complete full-stack solution with modern technologies'
      ],
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/pixpro-service'
    },
    'workers-api': {
      id: 'workers-api',
      title: 'Employee Vacation Management System',
      subtitle: 'WorkersAPI - RESTful Employee Management',
      description: 'A RESTful API for managing employee vacation requests in a company.',
      longDescription: 'WorkersAPI is a comprehensive RESTful API system designed for managing employee vacation requests and HR operations. Built with TypeScript and modern backend practices, it provides a robust foundation for employee management systems.',
      technologies: ['TypeScript', 'RESTful API', 'Employee Management', 'Backend Development', 'Node.js', 'Express'],
      challenges: [
        'Designing comprehensive employee vacation management workflows',
        'Implementing robust API endpoints for HR operations',
        'Ensuring data consistency and validation across all operations',
        'Creating scalable architecture for employee management systems'
      ],
      solutions: [
        'Developed RESTful API with TypeScript for type safety',
        'Implemented comprehensive employee and vacation management endpoints',
        'Applied modern backend development practices and patterns',
        'Created robust data validation and error handling mechanisms'
      ],
      results: [
        'Successfully delivered comprehensive employee management API',
        'Implemented robust vacation request tracking system',
        'Created scalable foundation for HR management systems',
        'Demonstrated proficiency in TypeScript backend development'
      ],
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/WorkersAPI'
    },
    'qatu-platform': {
      id: 'qatu-platform',
      title: 'Q\'atu Retail Platform',
      subtitle: 'Complete E-commerce Solution',
      description: 'A comprehensive retail platform with .NET Core API backend and JavaScript frontend.',
      longDescription: 'Q\'atu is a comprehensive retail platform featuring a .NET Core API backend and JavaScript frontend. The platform provides modern authentication, inventory management, and scalable architecture designed for retail operations and e-commerce functionality.',
      technologies: ['C#', '.NET Core', 'JavaScript', 'E-commerce', 'Retail', 'API', 'Frontend', 'Backend'],
      challenges: [
        'Implementing comprehensive e-commerce functionality',
        'Designing scalable retail platform architecture',
        'Integrating modern authentication and inventory management',
        'Creating responsive and user-friendly frontend interface'
      ],
      solutions: [
        'Developed .NET Core API backend for robust retail operations',
        'Created JavaScript frontend for interactive user experience',
        'Implemented modern authentication and security measures',
        'Designed scalable architecture for retail platform growth'
      ],
      results: [
        'Successfully delivered comprehensive retail platform solution',
        'Implemented modern e-commerce functionality',
        'Created scalable architecture for retail operations',
        'Demonstrated full-stack development capabilities'
      ],
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/qatu-service'
    },
    'uno-game-platform': {
      id: 'uno-game-platform',
      title: 'Uno Game Platform',
      subtitle: 'Multiplayer Card Game System',
      description: 'A complete Uno game implementation with backend service and frontend SPA.',
      longDescription: 'A complete Uno game implementation featuring a backend service built with vanilla JavaScript and dependency injection, plus a monolithic SPA frontend with Component-Driven Architecture and Feature-Driven design patterns.',
      technologies: ['JavaScript', 'SPA', 'Game Development', 'Component Architecture', 'Dependency Injection', 'Frontend', 'Backend'],
      challenges: [
        'Implementing multiplayer card game logic and rules',
        'Creating responsive real-time game interactions',
        'Designing component-driven architecture for maintainability',
        'Managing game state synchronization between players'
      ],
      solutions: [
        'Developed backend service using vanilla JavaScript and dependency injection',
        'Created monolithic SPA with Component-Driven Architecture',
        'Implemented Feature-Driven design for modular game components',
        'Applied modern architectural patterns for game development'
      ],
      results: [
        'Successfully implemented complete Uno game platform',
        'Created maintainable and modular game architecture',
        'Demonstrated component-driven development practices',
        'Delivered engaging multiplayer card game experience'
      ],
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/unogame-service'
    },
    'space-invaders-game': {
      id: 'space-invaders-game',
      title: 'Space Invaders Game',
      subtitle: 'Cross-Platform Game with Uno Platform',
      description: 'A space invaders game implementation using Uno Platform Foundation and MVVM model.',
      longDescription: 'A space invaders game implementation using Uno Platform Foundation and MVVM architectural pattern. This project demonstrates cross-platform game development capabilities and modern architectural patterns for game applications.',
      technologies: ['C#', 'Uno Platform', 'MVVM', 'Game Development', 'Cross-Platform', 'XAML', 'UWP'],
      challenges: [
        'Implementing cross-platform game development',
        'Applying MVVM pattern to game development',
        'Creating responsive game controls and interactions',
        'Managing game state and scoring systems'
      ],
      solutions: [
        'Used Uno Platform Foundation for cross-platform compatibility',
        'Implemented MVVM architectural pattern for clean separation of concerns',
        'Developed responsive game controls and user interactions',
        'Created comprehensive game state management system'
      ],
      results: [
        'Successfully created cross-platform space invaders game',
        'Demonstrated MVVM pattern implementation in game development',
        'Achieved cross-platform compatibility with Uno Platform',
        'Delivered engaging and responsive game experience'
      ],
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/Spaceinvaders'
    },
    'game-of-life': {
      id: 'game-of-life',
      title: 'Conway\'s Game of Life',
      subtitle: 'Java Implementation of Cellular Automaton',
      description: 'An implementation of Conway\'s Game of Life using Java.',
      longDescription: 'An implementation of Conway\'s Game of Life using Java, demonstrating algorithmic thinking and object-oriented programming principles. This classic computer science simulation showcases cellular automaton concepts and efficient algorithm implementation.',
      technologies: ['Java', 'Algorithm', 'Simulation', 'Object-Oriented Programming', 'Cellular Automaton', 'Computer Science'],
      challenges: [
        'Implementing efficient cellular automaton algorithms',
        'Designing object-oriented structure for game simulation',
        'Optimizing performance for large grid simulations',
        'Creating intuitive user interface for game visualization'
      ],
      solutions: [
        'Implemented Conway\'s Game of Life algorithm in Java',
        'Applied object-oriented programming principles for clean code structure',
        'Optimized algorithm performance for efficient simulation',
        'Created user-friendly interface for game visualization'
      ],
      results: [
        'Successfully implemented Conway\'s Game of Life simulation',
        'Demonstrated strong algorithmic and OOP skills',
        'Created efficient and maintainable Java implementation',
        'Showcased understanding of cellular automaton concepts'
      ],
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/GameOfLife'
    },
    'oberstaff-technical-test': {
      id: 'oberstaff-technical-test',
      title: 'Oberstaff Backend Technical Test',
      subtitle: 'Python Backend Development Assessment',
      description: 'A comprehensive backend development test solution demonstrating Python skills.',
      longDescription: 'A comprehensive backend development test solution for Oberstaff, demonstrating Python skills, API design, and problem-solving abilities. This project showcases technical proficiency in backend development and modern Python practices.',
      technologies: ['Python', 'Backend Development', 'API Design', 'Technical Assessment', 'Problem Solving', 'Web Development'],
      challenges: [
        'Meeting technical assessment requirements and specifications',
        'Implementing robust Python backend solutions',
        'Designing efficient API endpoints and data handling',
        'Demonstrating problem-solving and coding skills under assessment conditions'
      ],
      solutions: [
        'Developed comprehensive Python backend solution',
        'Implemented efficient API design and data processing',
        'Applied modern Python development practices and patterns',
        'Demonstrated strong problem-solving and technical skills'
      ],
      results: [
        'Successfully completed technical assessment requirements',
        'Demonstrated proficiency in Python backend development',
        'Showcased strong problem-solving and coding abilities',
        'Created robust and efficient backend solution'
      ],
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/Oberstaff-technical-test'
    },
    'async-image-fetcher': {
      id: 'async-image-fetcher',
      title: 'Bulk Image Download API Service',
      subtitle: 'AsyncImage Fetcher API',
      description: 'A robust and efficient backend service designed to streamline the bulk downloading of images from remote URLs.',
      longDescription: 'A high-performance API service that handles bulk image downloading operations with smart concurrency control and efficient storage management. The system is designed to handle large-scale image processing tasks.',
      technologies: ['C#', '.NET Core', 'Async Programming', 'Image Processing', 'API', 'Concurrency Control'],
      challenges: [
        'Handling large-scale bulk image downloading operations',
        'Implementing smart concurrency control to prevent system overload',
        'Ensuring unique image storage and avoiding duplicates',
        'Optimizing performance for remote URL processing'
      ],
      solutions: [
        'Implemented robust async programming patterns for efficient processing',
        'Developed smart concurrency control mechanisms',
        'Created unique image storage system to prevent duplicates',
        'Optimized remote URL processing with intelligent retry mechanisms'
      ],
      results: [
        'Streamlined bulk downloading of images from remote URLs',
        'Implemented smart concurrency control preventing system overload',
        'Achieved efficient unique image storage management',
        'Created a robust foundation for large-scale image processing'
      ],
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/AsyncImage-Fetcher-API'
    },
    'chat-app-microservices': {
      id: 'chat-app-microservices',
      title: 'Distributed Real-time Chat Application',
      subtitle: 'Chat App Microservices',
      description: 'A distributed system designed to enable users to communicate through real-time messaging in chat rooms.',
      longDescription: 'A comprehensive chat application built with microservices architecture, supporting real-time messaging, user management, and scalable communication features. The system emphasizes reliability and performance.',
      technologies: ['Microservices', 'Real-time', 'C#', 'Distributed Systems', 'Chat', '.NET Core', 'SignalR'],
      challenges: [
        'Implementing real-time messaging capabilities',
        'Managing distributed system architecture',
        'Ensuring user registration and authentication security',
        'Scaling chat room functionality for multiple users'
      ],
      solutions: [
        'Implemented microservices architecture for scalable communication',
        'Integrated real-time messaging with SignalR technology',
        'Developed secure user registration and authentication systems',
        'Created robust chat room management and user communication features'
      ],
      results: [
        'Successfully enabled real-time user communication',
        'Implemented scalable microservices architecture',
        'Achieved secure user registration and authentication',
        'Created a robust foundation for large-scale chat applications'
      ],
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/chat-app-microservices'
    },
    'youtube-api-testing': {
      id: 'youtube-api-testing',
      title: 'YouTube Data API Integration Project',
      subtitle: 'YouTube API Testing Project',
      description: 'The YouTube Data API allows you to incorporate features that are normally executed on the YouTube website into your own website or application.',
      longDescription: 'This project demonstrates various YouTube Data API integrations and data handling capabilities. It showcases how to incorporate YouTube features into web applications, including data retrieval, video information processing, and API best practices.',
      technologies: ['JavaScript', 'YouTube API', 'Data Integration', 'Web Development', 'API', 'HTTP Requests'],
      challenges: [
        'Understanding YouTube Data API endpoints and authentication',
        'Handling API rate limits and error responses',
        'Processing and displaying YouTube data effectively',
        'Implementing proper error handling and user feedback'
      ],
      solutions: [
        'Implemented proper API authentication and request handling',
        'Created robust error handling for API responses',
        'Developed efficient data processing and display mechanisms',
        'Applied best practices for API integration and user experience'
      ],
      results: [
        'Successfully integrated YouTube Data API functionality',
        'Implemented proper error handling and user feedback',
        'Created a foundation for YouTube data integration projects',
        'Demonstrated API integration best practices'
      ],
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/youtube-api-testing-project'
    }
  };

  const project = projectDetails[id || ''];

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="container">
          <div className="project-detail-header">
            <h1>Project Not Found</h1>
            <p>The requested project could not be found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        <div className="project-detail-header">
          <div className="project-category">{project.technologies[0]} Development</div>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Demo
              </a>
            )}
          </div>
        </div>
        
        <div className="project-detail-content">
          <div className="content-section">
            <h2>Overview</h2>
            <p>{project.longDescription}</p>
          </div>

          <div className="content-section">
            <h2>Technologies Used</h2>
            <div className="tech-grid">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="content-section">
            <h2>Challenges</h2>
            <ul className="challenge-list">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="content-section">
            <h2>Solutions</h2>
            <ul className="solution-list">
              {project.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </div>

          <div className="content-section">
            <h2>Results</h2>
            <ul className="result-list">
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
