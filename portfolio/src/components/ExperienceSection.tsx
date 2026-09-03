function ExperienceSection() {
  const experiences = [
    {
      role: 'Field Application Engineer Intern (Contract)',
      company: 'Samsung Austin Semiconductor',
      period: 'February 2026 — Present',
      description:
        'Leading field robotic operations, delivering real-time technical insights to engineering teams and on-site stakeholders.'

    },
    {
      role: 'AI & Robotics Engineer Intern',
      company: 'Bechtel Corporation',
      period: 'Summer 2025 & Summer 2026',
      description:
        'Engineered AI-driven robotic solutions for construction projects, enhancing operational efficiency and safety through innovative automation.',
    },
    {
      role: 'Undergraduate Researcher',
      company: 'Living with Robots Lab - University of Texas at Austin',
      period: 'January 2025 - December 2026',
      description:
        'Conducted research on human-robot interaction, focusing on developing intuitive interfaces and adaptive behaviors.',
    },
    {
      role: 'Machine Learning Research Assistant',
      company: 'Cambronne Lab - University of Texas at Austin',
      period: 'September 2024 - April 2025',
      description:
        'Developed and optimized machine learning models for biomedical data analysis, contributing to published research in the field.',
    },
  ];

  return (
    <section className="block" id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((item) => (
          <div key={`${item.company}-${item.period}`} className="experience-item">
            <div className="experience-meta">
              <span className="experience-role">{item.role}</span>
              <span className="experience-period">{item.period}</span>
            </div>
            <div className="experience-company">{item.company}</div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
