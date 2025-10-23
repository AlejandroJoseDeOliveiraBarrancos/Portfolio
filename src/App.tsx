import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks/useScrollToTop';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NewsPage from './pages/NewsPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

const AppContent: React.FC = () => {
  useScrollToTop();
  
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<ArticleDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
