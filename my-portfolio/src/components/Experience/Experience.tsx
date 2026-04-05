import React from 'react';
import './Experience.css';
import { ExperienceItem } from '../../types';

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="experience">
      <div className="section__heading">
        <h2>Experience</h2>
        <p>Professional background and work experience</p>
      </div>

      <div className="experience__list">
        {experience.map((item) => (
          <article key={item.id} className="experience__item">
            <div className="experience__header">
              <div>
                <h3>{item.position}</h3>
                <div className="experience__company">
                  <p>{item.company}</p>
                  {item.companyLogo && (
                    <img
                      src={process.env.PUBLIC_URL + item.companyLogo}
                      alt={`${item.company} logo`}
                      className="experience__logo"
                    />
                  )}
                </div>
              </div>
              <span className="experience__duration">
                {item.startDate} - {item.endDate}
              </span>
            </div>
            {item.location && <p className="experience__location">{item.location}</p>}
            {item.description && <p className="experience__description">{item.description}</p>}
            {item.technologies && item.technologies.length > 0 && (
              <div className="experience__technologies">
                {item.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;