function ProjectsSection() {
  return (
    <section className="block" id="projects">
      <h2>Projects</h2>
      <div className="project">
        <a href="https://github.com/TonyHuynh-lab/soundmind" className="project-title">Spotify Clone</a>
        <p className="project-description">A web application that mimics the functionality of Spotify.</p>
        <div className="tags">
          <span className="tag">MongoDB</span>
          <span className="tag">Express.js</span>
          <span className="tag">React</span>
          <span className="tag">Node.js</span>
          <span className="tag">FastAPI</span>
          <span className="tag">Python</span>
        </div>
      </div>
      <div className="project">
        <a href="#" className="project-title">VAL2 (Versatile Autonomous Loader)</a>
        <p className="project-description">An autonomous buggy designed for tool delivery in construction environments.</p>
        <div className="tags">
          <span className="tag">Python</span>
          <span className="tag">C++</span>
          <span className="tag">ROS</span>
          <span className="tag">RTK/GNSS</span>
          <span className="tag">HTML/CSS</span>
          <span className="tag">FastAPI</span>
        </div>
      </div>
      <div className="project">
        <a href="https://github.com/TonyHuynh-lab/BudgeX" className="project-title">BudgeX</a>
        <p className="project-description">A web application that helps users manage their budget and track their expenses on a local database.</p>
        <div className="tags">
          <span className="tag">Electron</span>
          <span className="tag">React</span>
          <span className="tag">TypeScript</span>
          <span className="tag">SQLite</span>
        </div>
      </div>
      <div className="project">
        <a href="https://github.com/LonghornBookie" className="project-title">Bookie</a>
        <p className="project-description">An autonomous librarian bot designed to assist with book navigation and cataloging.</p>
        <div className="tags">
          <span className="tag">C++</span>
          <span className="tag">Python</span>
          <span className="tag">ROS2</span>
          <span className="tag">LLM</span>
          <span className="tag">SQLite</span>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
