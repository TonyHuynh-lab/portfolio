import React, { useState } from 'react';
import './Skills.css';
import { Skill } from '../../types';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const filteredSkills = filter === 'all'
    ? skills
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="skills">
      <div className="section__heading">
        <h2>My Skills</h2>
        <p>Technologies and tools I work with</p>
      </div>

      <div className="skills__filters">
        <button
          className={`filter-button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills__grid">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-card__icon">
              <img
                src={`/icons/skills/${skill.icon}`}
                alt={`${skill.name} icon`}
                className="skill-icon"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <h3 className="skill-card__title">{skill.name}</h3>
            <div className="skill-card__level">
              <div className="skill-level">
                <div
                  className="skill-level__fill"
                  style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                ></div>
              </div>
              <span className="skill-level__text">{skill.proficiency}/5</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;