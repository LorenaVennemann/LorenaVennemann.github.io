import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Lorena Jil Vennemann</h1>

        <p className="hero-subtitle">
          4th-year Software Developer Apprentice @ SIX
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
