import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  useEffect(() => {
    // Force animations to restart on mount/reload
    const elements = document.querySelectorAll('.blog-card, .section-title');
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.animation = 'none';
      void htmlEl.offsetHeight;
      htmlEl.style.animation = '';
    });
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Blog</h1>
        <p className="page-subtitle">Thoughts on development, cloud technologies, and continuous learning</p>
      </div>

      <div className="blog-grid">
        {/* Featured Post */}
        <article className="blog-post">
          <span className="featured-badge">Featured</span>
          <div className="blog-meta">
            <span className="blog-date">📅 23 September 2025</span>
            <span className="blog-category">Event</span>
          </div>
          <h2>Swiss Dev Confederation 2025 – My Event Highlight</h2>
          <p className="blog-excerpt">
            My first major developer event! Swiss Dev Confederation 2025 was full of exciting talks on 
            cloud-native development, AI, and OpenShift. I was particularly impressed by the sessions on OpenShift and AI topics 
            – a day full of inspiration and new technologies!
          </p>
          <Link to="/blog/dev-event" className="read-more">Read More →</Link>
        </article>

        <article className="blog-post">
          <div className="blog-meta">
            <span className="blog-date">📅 24 Mai 2025</span>
            <span className="blog-category">OpenShift</span>
          </div>
          <h2>Getting Started with OpenShift: My Journey into Container Orchestration</h2>
          <p className="blog-excerpt">
            My first steps with OpenShift and why container orchestration is the future. 
            From the basics to my first successful deployment—a personal retrospective 
            of my learnings and challenges.
          </p>
          <Link to="/blog/openshift" className="read-more">Read More →</Link>
        </article>

        {/* Coming Soon */}
        <article className="blog-post" style={{ border: '2px dashed rgba(255, 255, 255, 0.1)', background: 'transparent' }}>
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h2 style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>More Articles Coming Soon</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Soon I will be going to a new event called DINAcon, where I will also be writing a blog.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
