import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground.tsx';
import Home from './pages/Home';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Blog from './pages/Blog.tsx';
import BlogPostDEV from './pages/BlogPostDEV.tsx';
import BlogPostOpenShift from './pages/BlogPostOpenShift.tsx';
import Contact from './pages/Contact.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <ParticlesBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/dev-event" element={<BlogPostDEV />} />
          <Route path="/blog/openshift" element={<BlogPostOpenShift />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
