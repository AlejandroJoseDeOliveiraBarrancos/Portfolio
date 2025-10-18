import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Projects } from '../components/sections/Projects';
import { News } from '../components/sections/News';
import { Contact } from '../components/sections/Contact';
import { useScrollToTop } from '../hooks/useScrollToTop';

const HomePage: React.FC = () => {
  useScrollToTop();
  
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <News />
      <Contact />
    </>
  );
};

export default HomePage;
