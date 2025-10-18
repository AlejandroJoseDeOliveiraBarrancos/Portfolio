import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './News.css';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
}

interface NewsProps {
  className?: string;
  showAll?: boolean;
}

export const News: React.FC<NewsProps> = ({ className = '', showAll = false }) => {
  const navigate = useNavigate();
  const [ref, isVisible] = useScrollAnimation();
  const articles: NewsArticle[] = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Learn the best practices for creating maintainable and scalable React applications with modern architecture patterns and performance optimization techniques.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      date: '2024-01-15',
      category: 'Development',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging technologies and trends that are shaping the future of web development, from AI integration to WebAssembly and beyond.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      date: '2024-01-10',
      category: 'Technology',
      readTime: '7 min read',
      featured: true
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox: When to Use What',
      excerpt: 'A comprehensive guide to choosing between CSS Grid and Flexbox for different layout scenarios, with practical examples and best practices.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      date: '2024-01-05',
      category: 'Design',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 4,
      title: 'TypeScript Best Practices for Large Projects',
      excerpt: 'Essential TypeScript patterns and practices for maintaining type safety and code quality in large-scale applications.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      date: '2024-01-01',
      category: 'Development',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Accessibility in Modern Web Design',
      excerpt: 'Creating inclusive digital experiences through proper accessibility implementation and WCAG guidelines.',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      date: '2023-12-28',
      category: 'Design',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Performance Optimization Techniques',
      excerpt: 'Advanced strategies for optimizing web application performance, from code splitting to lazy loading and caching strategies.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      date: '2023-12-25',
      category: 'Performance',
      readTime: '10 min read',
      featured: false
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const displayArticles = showAll ? articles : featuredArticles;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section ref={ref} id="news" className={`news ${className} ${isVisible ? 'news--visible' : ''}`}>
      <Container size="lg" className="news__container">
        <div className="news__header">
          <h2 className="news__title">Latest Articles</h2>
          <p className="news__subtitle">
            Thoughts, tutorials, and insights on web development and technology
          </p>
        </div>

        <div className="news__experience-list">
          {displayArticles.map((article, index) => (
            <article key={article.id} className="experience-item">
              <div className="experience-item__content">
                <div className="experience-item__header">
                  <h3 className="experience-item__title">{article.title}</h3>
                  <div className="experience-item__meta">
                    <span className="experience-item__type">{article.category}</span>
                    <span className="experience-item__status">{article.readTime}</span>
                  </div>
                </div>
                
                <div className="experience-item__date">
                  <time>{formatDate(article.date)}</time>
                </div>
                
                <p className="experience-item__description">{article.excerpt}</p>

                <div className="experience-item__actions">
                  <Button 
                    variant="primary" 
                    size="md"
                    onClick={() => navigate(`/article/${article.id}`)}
                  >
                    Read Full Article
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!showAll && (
          <div className="news__cta">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/news')}
            >
              View All Articles
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};
