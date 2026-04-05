import React, { useState } from 'react';
import './Projects.css';
import { Project } from '../../types';

interface ProjectsProps {
  projects: Project[];
}

const getPublicAssetUrl = (assetPath: string): string => {
  if (assetPath.startsWith('/public/')) {
    return `${process.env.PUBLIC_URL || ''}${assetPath.slice('/public'.length)}`;
  }
  return assetPath;
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>('all');
  
  // Get unique technologies across all projects
  const allTechnologies = Array.from(
    new Set(
      projects.flatMap(project => project.technologies)
    )
  );
  
  // Filter projects based on selected technology
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.includes(filter)
      );

  return (
    <section id="projects" className="projects">
      <div className="section__heading">
        <h2>My Projects</h2>
        <p>Here are some of my recent projects</p>
      </div>
      
      <div className="projects__filters">
        <button 
          className={`filter-button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        
        {allTechnologies.map((tech) => (
          <button 
            key={tech}
            className={`filter-button ${filter === tech ? 'active' : ''}`}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>
      
      <div className="projects__grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card__image">
              <img src={getPublicAssetUrl(project.imageUrl)} alt={project.title} />
            </div>
            
            <div className="project-card__content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-card__tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-card__links">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button button--sm"
                  >
                    Live Demo
                  </a>
                )}
                
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button button--sm button--outline"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;