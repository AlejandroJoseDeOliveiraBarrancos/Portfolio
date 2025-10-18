import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from '../components/ui';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './ArticleDetailPage.css';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
  author: string;
  tags: string[];
}

const ArticleDetailPage: React.FC = () => {
  useScrollToTop();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock article data - in real app, this would come from an API
  const articles: Article[] = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Learn the best practices for creating maintainable and scalable React applications.',
      content: `
        <p>Building scalable React applications requires careful consideration of architecture, performance, and maintainability. In this comprehensive guide, we'll explore the key principles and patterns that help create robust, scalable applications that can grow with your team and user base.</p>

        <h2>Architecture Patterns</h2>
        <p>One of the most important aspects of building scalable React applications is choosing the right architecture pattern. Here are some popular approaches:</p>

        <h3>Component-Based Architecture</h3>
        <p>Break your application into small, reusable components. Each component should have a single responsibility and be easy to test and maintain.</p>

        <h3>Container and Presentational Components</h3>
        <p>Separate your components into containers (which handle logic and state) and presentational components (which handle UI rendering). This pattern makes your code more testable and reusable.</p>

        <h2>State Management</h2>
        <p>As your application grows, managing state becomes increasingly complex. Consider these approaches:</p>

        <ul>
          <li><strong>Context API:</strong> For smaller applications or when you need to share state between a few components</li>
          <li><strong>Redux:</strong> For complex applications with lots of state that needs to be shared across many components</li>
          <li><strong>Zustand:</strong> A lightweight alternative to Redux with less boilerplate</li>
          <li><strong>React Query:</strong> For managing server state and caching</li>
        </ul>

        <h2>Performance Optimization</h2>
        <p>Performance is crucial for user experience. Here are some key optimization techniques:</p>

        <h3>Code Splitting</h3>
        <p>Use React.lazy() and Suspense to split your code into smaller chunks that are loaded on demand. This reduces the initial bundle size and improves loading times.</p>

        <h3>Memoization</h3>
        <p>Use React.memo(), useMemo(), and useCallback() to prevent unnecessary re-renders and expensive calculations.</p>

        <h3>Virtual Scrolling</h3>
        <p>For lists with many items, implement virtual scrolling to only render visible items, improving performance significantly.</p>

        <h2>Testing Strategy</h2>
        <p>A comprehensive testing strategy is essential for maintaining code quality as your application scales:</p>

        <ul>
          <li><strong>Unit Tests:</strong> Test individual components and functions in isolation</li>
          <li><strong>Integration Tests:</strong> Test how components work together</li>
          <li><strong>End-to-End Tests:</strong> Test complete user workflows</li>
          <li><strong>Visual Regression Tests:</strong> Ensure UI changes don't break existing designs</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Building scalable React applications is an ongoing process that requires careful planning and continuous improvement. By following these principles and patterns, you can create applications that are maintainable, performant, and ready to grow with your needs.</p>
      `,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      date: '2024-01-15',
      category: 'Development',
      readTime: '5 min read',
      featured: true,
      author: 'Your Name',
      tags: ['React', 'JavaScript', 'Performance', 'Architecture']
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging technologies and trends shaping the future of web development.',
      content: `
        <p>The web development landscape is constantly evolving, with new technologies and frameworks emerging regularly. In this article, we'll explore the trends and technologies that are shaping the future of web development.</p>

        <h2>Artificial Intelligence Integration</h2>
        <p>AI is becoming increasingly integrated into web development workflows. From code generation tools to automated testing, AI is helping developers work more efficiently.</p>

        <h2>WebAssembly (WASM)</h2>
        <p>WebAssembly allows running high-performance code in browsers, opening up new possibilities for web applications that require intensive computations.</p>

        <h2>Progressive Web Apps (PWAs)</h2>
        <p>PWAs continue to gain traction as they bridge the gap between web and native applications, providing app-like experiences in browsers.</p>

        <h2>Conclusion</h2>
        <p>The future of web development is exciting, with many new technologies and approaches emerging. Staying current with these trends is essential for modern developers.</p>
      `,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.-v0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      date: '2024-01-10',
      category: 'Technology',
      readTime: '7 min read',
      featured: true,
      author: 'Your Name',
      tags: ['AI', 'WebAssembly', 'PWA', 'Future Tech']
    }
  ];

  const article = articles.find(a => a.id === parseInt(id || '1'));

  if (!article) {
    return (
      <div className="article-detail-page">
        <Container size="lg">
          <div className="article-not-found">
            <h1>Article Not Found</h1>
            <p>The article you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/news')}>
              Back to Articles
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="article-detail-page">
      <Container size="lg">
        <div className="article-detail">
          <div className="article-detail__header" id="header">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/news')}
              className="article-detail__back"
            >
              ← Back to Articles
            </Button>
            
            <div className="article-detail__meta" id="meta">
              <span className="article-detail__category">{article.category}</span>
              <time className="article-detail__date">{formatDate(article.date)}</time>
              <span className="article-detail__read-time">{article.readTime}</span>
            </div>

            <h1 className="article-detail__title">{article.title}</h1>
            
            <div className="article-detail__author">
              <span>By {article.author}</span>
            </div>

            <div className="article-detail__tags">
              {article.tags.map((tag, index) => (
                <span key={index} className="article-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="article-detail__content" id="content">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          <div className="article-detail__footer" id="actions">
            <div className="article-detail__share">
              <h3>Share this article</h3>
              <div className="share-buttons">
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">LinkedIn</Button>
                <Button variant="outline" size="sm">Copy Link</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ArticleDetailPage;
