// src/App.tsx
import React from 'react';
import './App.css';

// Components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

// Data
import { personalInfo } from './data/personalInfo';
import { projects } from './data/projects';
import { skills } from './data/skills';
import { education } from './data/education';
import { experience } from './data/experience';

const navLinks = [
  { id: '1', text: 'Home', url: '#home' },
  { id: '2', text: 'Education', url: '#education' },
  { id: '3', text: 'Experience', url: '#experience' },
  { id: '4', text: 'Projects', url: '#projects' },
  { id: '5', text: 'Skills', url: '#skills' },
  { id: '6', text: 'Contact', url: '#contact' }
];

const App: React.FC = () => {
  return (
    <div className="app">
      <Header navLinks={navLinks} />
      
      <main>
        <Hero personalInfo={personalInfo} />
        <Education education={education} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact personalInfo={personalInfo} />
      </main>
      
      <footer>
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;