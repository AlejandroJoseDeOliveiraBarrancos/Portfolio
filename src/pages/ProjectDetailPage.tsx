import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from '../components/ui';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './ProjectDetailPage.css';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  features: string[];
  challenges: string[];
  solutions: string[];
}

const ProjectDetailPage: React.FC = () => {
  useScrollToTop();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock project data - in real app, this would come from an API
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL.',
      fullDescription: 'This comprehensive e-commerce platform was built from the ground up to handle thousands of concurrent users. The system includes advanced features like real-time inventory management, dynamic pricing, and AI-powered product recommendations. The platform processes over $1M in transactions monthly with 99.9% uptime.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker', 'Redis', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      features: [
        'User authentication and authorization',
        'Product catalog with advanced filtering',
        'Shopping cart and checkout process',
        'Payment processing with Stripe',
        'Order management system',
        'Admin dashboard',
        'Real-time notifications',
        'Mobile-responsive design'
      ],
      challenges: [
        'Handling high traffic during peak shopping periods',
        'Ensuring data consistency across distributed systems',
        'Implementing secure payment processing',
        'Optimizing database queries for performance'
      ],
      solutions: [
        'Implemented Redis caching for frequently accessed data',
        'Used database transactions and optimistic locking',
        'Integrated Stripe with proper error handling and webhooks',
        'Created database indexes and query optimization strategies'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      fullDescription: 'This task management application enables teams to collaborate effectively with real-time updates, advanced project tracking, and intelligent task prioritization. The app supports multiple project views, team collaboration features, and integrates with popular productivity tools.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'MongoDB', 'JWT', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      features: [
        'Real-time collaboration',
        'Multiple project views (Kanban, Gantt, Calendar)',
        'Team member management',
        'Task assignment and notifications',
        'File attachments and comments',
        'Progress tracking and reporting',
        'Mobile app support',
        'Third-party integrations'
      ],
      challenges: [
        'Managing real-time updates across multiple clients',
        'Handling concurrent edits to prevent data conflicts',
        'Scaling WebSocket connections',
        'Implementing efficient notification system'
      ],
      solutions: [
        'Used Socket.io with Redis adapter for horizontal scaling',
        'Implemented operational transformation for conflict resolution',
        'Created connection pooling and load balancing',
        'Built event-driven notification system with queues'
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || '1'));

  if (!project) {
    return (
      <div className="project-detail-page">
        <Container size="lg">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/projects')}>
              Back to Projects
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <Container size="lg">
        <div className="project-detail">
          <div className="project-detail__header" id="header">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/projects')}
              className="project-detail__back"
            >
              ← Back to Projects
            </Button>
            
            <div className="project-detail__hero">
              <div className="project-detail__image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-detail__info" id="content">
                <h1 className="project-detail__title">{project.title}</h1>
                <p className="project-detail__description">{project.fullDescription}</p>
                
                <div className="project-detail__technologies" id="technologies">
                  <h3>Technologies Used</h3>
                  <div className="tech-list">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-detail__actions" id="actions">
                  {project.githubUrl && (
                    <Button 
                      variant="primary" 
                      size="lg"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default ProjectDetailPage;
