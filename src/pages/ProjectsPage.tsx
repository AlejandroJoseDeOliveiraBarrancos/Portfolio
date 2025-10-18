import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from '../components/ui';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './ProjectsPage.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  useScrollToTop();
  const allProjects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2325&q=80',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A minimalist portfolio website built with modern web technologies, featuring smooth animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80',
      technologies: ['React', 'CSS3', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media management with data visualization, scheduling tools, and performance metrics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      technologies: ['Next.js', 'Python', 'D3.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Recipe Sharing Platform',
      description: 'A community-driven recipe sharing platform with search functionality, user ratings, and meal planning features.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <div className="projects-page">
      <Container size="lg">
        <div className="projects-page__header">
          <h1 className="projects-page__title">All Projects</h1>
          <p className="projects-page__subtitle">
            A comprehensive showcase of my work and personal projects
          </p>
        </div>

        <div className="projects-page__experience-list">
          {allProjects.map((project) => (
            <div key={project.id} className="experience-item">
              <div className="experience-item__content">
                <div className="experience-item__header">
                  <h3 className="experience-item__title">{project.title}</h3>
                  <div className="experience-item__meta">
                    <span className="experience-item__type">Professional Project</span>
                    <span className="experience-item__status">Completed</span>
                  </div>
                </div>
                
                <p className="experience-item__description">{project.description}</p>
                
                <div className="experience-item__technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="experience-item__actions">
                  <Button 
                    variant="primary" 
                    size="md"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    View Details
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      variant="outline" 
                      size="md"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="md"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProjectsPage;
