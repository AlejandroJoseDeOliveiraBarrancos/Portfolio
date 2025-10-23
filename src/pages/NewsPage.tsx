import React from 'react';
import './NewsPage.css';

const NewsPage: React.FC = () => {
  return (
    <div className="news-page">
      <div className="container">
        <div className="page-header">
          <h1>Lab</h1>
          <p>Thoughts, experiments, and insights from the design process.</p>
        </div>
        <div className="news-grid">
          {/* News articles will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
