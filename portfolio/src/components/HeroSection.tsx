import valImage from '../assets/VAL.jpg';
import resume from '../assets/Tony_Huynh_Resume.pdf';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow reveal-in">
            <span className="status-dot" aria-hidden="true" />
            Based in Austin, TX
          </p>
          <h1 className="reveal-in">
            Tony Huynh<span className="dot">.</span>
          </h1>
          <p className="role reveal-in">Junior at University of Texas at Austin</p>
          <p className="bio reveal-in">Currently working on ML systems.</p>
          <div className="cta-row reveal-in">
            <a href="#projects" className="btn primary">
              View projects <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn secondary">Get in touch</a>
            <a href={resume} className="btn tertiary" download>
              Download CV <span className="arrow" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual reveal-in">
          <img src={valImage} alt="Tony Huynh portrait" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
