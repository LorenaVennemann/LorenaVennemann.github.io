import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

function AppContent() {
  const location = useLocation();

  return (
    <div className="app">
      <ParticlesBackground />
      <Navbar />
      <Routes location={location}>
        <Route path="/" element={<Home key={location.pathname} />} />
        <Route path="/about" element={<About key={location.pathname} />} />
        <Route path="/projects" element={<Projects key={location.pathname} />} />
        <Route path="/blog" element={<Blog key={location.pathname} />} />
        <Route path="/blog/dev-event" element={<BlogPostDEV key={location.pathname} />} />
        <Route path="/blog/openshift" element={<BlogPostOpenShift key={location.pathname} />} />
        <Route path="/contact" element={<Contact key={location.pathname} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

