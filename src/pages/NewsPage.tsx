import React from 'react';
import { Container } from '../components/ui';
import { News } from '../components/sections/News';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './NewsPage.css';

const NewsPage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="news-page">
      <Container size="lg">
        <div className="news-page__header">
          <h1 className="news-page__title">Articles & Insights</h1>
          <p className="news-page__subtitle">
            Explore my thoughts on web development, technology trends, and industry insights
          </p>
        </div>
      </Container>
      
      <News showAll={true} />
    </div>
  );
};

export default NewsPage;
