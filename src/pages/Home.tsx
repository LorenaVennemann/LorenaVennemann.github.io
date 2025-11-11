import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Welcome to my Portfolio';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="hero-section">
      <div className="hero-content">
        <div className="terminal-line">
          <span className="prompt">$</span>
          <span className="command">{typedText}</span>
          <span className="cursor">_</span>
        </div>

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
