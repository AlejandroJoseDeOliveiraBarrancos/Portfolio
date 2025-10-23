import React from 'react';
import { useParams } from 'react-router-dom';
import './ArticleDetailPage.css';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="article-detail-page">
      <div className="container">
        <div className="article-detail-header">
          <h1>Article Detail</h1>
          <p>Detailed article content for: {id}</p>
        </div>
        <div className="article-detail-content">
          {/* Article detail content will be implemented here */}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
