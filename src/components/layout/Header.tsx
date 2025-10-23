import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link 
            to="/" 
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg 
              className="logo-icon" 
              viewBox="0 0 512 512" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165.197,126.716c34.912,9.88,95.057,38.762,113.695,66.453C262.48,121.05,226.323,78.554,197.109,54.914 c-23.872-19.312-24.668-14.898-24.668-14.898c-3.44-2.08-7.777-2.041-11.179,0.116c-3.401,2.149-5.272,6.03-4.808,9.996 l1.817,15.956L165.197,126.716z"/>
              <path d="M505.447,125.588c-23.703-8.797-59.263,1.956-79.997,3.92c-8.89-7.831-44.451-29.346-81.002-11.743 c-36.543,17.61-41.15,41.39-41.15,75.328c0,13.049-9.888,25.433-9.888,25.433c6.425,13.112,4.206,27.429,0.665,22.172 c-3.95-5.868-5.272-16.304-15.802-29.021c-77.036-101.566-261.412-79.889-261.412-79.889c-18.438,5.218-33.204,30.002,20.37,67.59 c60.871,42.704,127.177,88.014,153.462,105.887c21.105,14.348,24.53,42.704-5.264,54.772L48.471,412.21l69.955,38.979 l63.052-27.236l-48.502,34.518l28.75,15.044c0,0,79.015-45.642,135.31-78.907c52.747-31.162,83.964-66.522,92.854-117.39 c11.071-63.391,28.812-100.661,36.543-114.452c4.94-8.798,20.742-17.61,43.462-21.515c15.106-2.605,32.592-2.938,37.532-4.893 C512.366,134.401,515.327,130.489,505.447,125.588z"/>
            </svg>
          </Link>
          <nav className="nav">
            <Link 
              to="/projects" 
              className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
            >
              Craft
            </Link>
            <a 
              href="https://drive.google.com/file/d/1dmOQ5DYQmnoL3r12ffWHi1afuNEawv84/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
