import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Button } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Projects.css';

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

interface ProjectsProps {
  className?: string;
}

export const Projects: React.FC<ProjectsProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  const [ref, isVisible] = useScrollAnimation();
  const projects: Project[] = [
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

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section ref={ref} id="projects" className={`projects ${className} ${isVisible ? 'projects--visible' : ''}`}>
      <Container size="lg">
        <div className="projects__header">
          <h2 className="projects__title">Featured Projects</h2>
          <p className="projects__subtitle">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="projects__experience-list">
          {featuredProjects.map((project, index) => (
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
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
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
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="md"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      See Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__cta">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/projects')}
          >
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
};
