import React from 'react';
import './Education.css';
import { EducationItem } from '../../types';

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="education">
      <div className="section__heading">
        <h2>Education</h2>
        <p>Academic background</p>
      </div>

      <div className="education__list">
        {education.map((item) => (
          <article key={item.id} className="education__item">
            <div className="education__header">
              <div>
                <h3>{item.degree}</h3>
                <div className="education__institution">
                  <p>{item.institution}</p>
                  {item.logoUrl && (
                    <img
                      src={item.logoUrl}
                      alt={`${item.institution} logo`}
                      className="education__logo"
                    />
                  )}
                </div>
              </div>
              <span className="education__duration">
                {item.startYear} - {item.endYear}
              </span>
            </div>
            {item.fieldOfStudy && <p className="education__field">{item.fieldOfStudy}</p>}
            {item.description && <p className="education__description">{item.description}</p>}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
