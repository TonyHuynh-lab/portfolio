type Project = {
  title: string;
  href?: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: 'Spotify Clone',
    href: 'https://github.com/TonyHuynh-lab/soundmind',
    description: 'A web application that mimics the functionality of Spotify.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'FastAPI', 'Python'],
  },
  {
    title: 'VAL2 (Versatile Autonomous Loader)',
    description: 'An autonomous buggy designed for tool delivery in construction environments.',
    tags: ['Python', 'C++', 'ROS', 'RTK/GNSS', 'HTML/CSS', 'FastAPI'],
  },
  {
    title: 'BudgeX',
    href: 'https://github.com/TonyHuynh-lab/BudgeX',
    description:
      'A web application that helps users manage their budget and track their expenses on a local database.',
    tags: ['Electron', 'React', 'TypeScript', 'SQLite'],
  },
  {
    title: 'Bookie',
    href: 'https://github.com/LonghornBookie',
    description: 'An autonomous librarian bot designed to assist with book navigation and cataloging.',
    tags: ['C++', 'Python', 'ROS2', 'LLM', 'SQLite'],
  },
];

function ProjectsSection() {
  return (
    <section className="block reveal" id="projects">
      <h2>
        <span className="num">03</span>Projects
      </h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project">
            {project.href ? (
              <a href={project.href} className="project-title" target="_blank" rel="noreferrer">
                {project.title}
                <span className="arrow" aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="project-title">{project.title}</span>
            )}
            <p className="project-description">{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
