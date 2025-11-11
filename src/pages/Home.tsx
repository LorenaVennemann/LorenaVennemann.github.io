import { Link } from 'react-router-dom';
import TypewriterText from '../components/TypewriterText';
import './Home.css';

const Home = () => {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <TypewriterText 
            text="Lorena Jil Vennemann" 
            speed={120} 
            delay={500}
            className="hero-typewriter"
          />
        </h1>

        <p className="hero-subtitle">
          <TypewriterText 
            text="4th-year Software Developer Apprentice @ SIX" 
            speed={80} 
            delay={2500}
          />
        </p>

        <div className="hero-tags">
          <span className="tag">Backend</span>
          <span className="tag">Frontend</span>
          <span className="tag">Cloud Native</span>
          <span className="tag">Git</span>
        </div>

        <div className="hero-cta">
          <Link to="/projects" className="btn btn-primary">View Projects</Link>
          <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
