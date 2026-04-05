import React from 'react';
import './Hero.css';
import { PersonalInfo } from '../../types';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1>Hello, I'm {personalInfo.name}</h1>
          <h2>{personalInfo.title}</h2>
          <p>{personalInfo.bio}</p>
          
          <div className="hero__cta">
            <a href="#projects" className="button button--primary">
              View My Work
            </a>
            <a href="#contact" className="button button--secondary">
              Contact Me
            </a>
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                className="button button--secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </a>
            )}
          </div>
          
          <div className="hero__social">
            {personalInfo.socialLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={link.platform}
              >
                <i className={`icon icon-${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;