import valImage from '../assets/VAL.jpg';
import resume from '../assets/Tony_Huynh_Resume.pdf';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <h1>Tony Huynh</h1>
          <p className="role">Junior at University of Texas at Austin</p>
          <p className="bio">Currently working on ML systems.</p>
          <div className="cta-row">
            <a href="#projects" className="btn primary">View projects</a>
            <a href="#contact" className="btn secondary">Get in touch</a>
            <a href={resume} className="btn tertiary" download>
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img src={valImage} alt="Tony Huynh portrait" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
