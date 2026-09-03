import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="site">
      <Header />

      <div className="container">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Tony Huynh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;