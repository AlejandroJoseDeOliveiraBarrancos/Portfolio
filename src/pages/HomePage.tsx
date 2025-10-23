import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default HomePage;
