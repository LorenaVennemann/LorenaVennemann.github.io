import { useEffect, useRef, useState } from 'react';
import './SkillProgressBar.css';

interface SkillProgressBarProps {
  skill: string;
  percentage: number;
  color?: string;
}

const SkillProgressBar = ({ skill, percentage, color = 'var(--primary)' }: SkillProgressBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bar
          setTimeout(() => {
            let current = 0;
            const increment = percentage / 50; // 50 steps for smooth animation
            const timer = setInterval(() => {
              current += increment;
              if (current >= percentage) {
                setAnimatedPercentage(percentage);
                clearInterval(timer);
              } else {
                setAnimatedPercentage(current);
              }
            }, 30);
          }, 200);
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={progressRef} className={`skill-progress-bar ${isVisible ? 'animate' : ''}`}>
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{Math.round(animatedPercentage)}%</span>
      </div>
      <div className="progress-track">
        <div 
          className="progress-fill"
          style={{ 
            width: `${animatedPercentage}%`,
            backgroundColor: color
          }}
        />
        <div className="progress-glow" style={{ backgroundColor: color }} />
      </div>
    </div>
  );
};

export default SkillProgressBar;