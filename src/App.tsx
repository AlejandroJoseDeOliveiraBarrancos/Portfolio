import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ProgressIndicator } from './components/ui/ProgressIndicator';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import NewsPage from './pages/NewsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import './App.css';

function AppContent() {
  const location = useLocation();
  
  // Define sections based on the current page
  const getSections = () => {
    if (location.pathname === '/') {
      return ['home', 'about', 'projects', 'news', 'contact'];
    } else if (location.pathname.startsWith('/project/')) {
      return ['header', 'content', 'technologies', 'actions'];
    } else if (location.pathname.startsWith('/article/')) {
      return ['header', 'content', 'meta', 'actions'];
    }
    return [];
  };
  
  const sections = getSections();
  const showProgressIndicator = sections.length > 0;

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/article/:id" element={<ArticleDetailPage />} />
        </Routes>
      </main>
      <Footer />
      {showProgressIndicator && <ProgressIndicator sections={sections} />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
