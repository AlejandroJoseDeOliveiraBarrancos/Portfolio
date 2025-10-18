import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container } from '../ui';
import './Header.css';

interface HeaderProps {
  onMenuToggle?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle?.();
  };

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <Container size="xl">
        <div className="header__content">
          <div className="header__logo">
            <Link to="/" className="logo-text">Portfolio</Link>
          </div>
          
          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <ul className="nav__list">
              <li className="nav__item">
                <button 
                  className="nav__link"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </button>
              </li>
              <li className="nav__item">
                <Link 
                  to="/projects"
                  className="nav__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="nav__item">
                <Link 
                  to="/news"
                  className="nav__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Get in touch
            </Button>
            
            <button 
              className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="menu-icon">
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line"></span>
              </span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
