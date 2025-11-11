import { useState, useEffect } from 'react';
import './TypewriterText.css';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const TypewriterText = ({ text, speed = 100, delay = 0, className = '' }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeoutId: number;
    
    const startTyping = () => {
      setIsTyping(true);
      let i = 0;
      
      const typeCharacter = () => {
        if (i < text.length) {
          setDisplayText(prev => prev + text.charAt(i));
          i++;
          timeoutId = window.setTimeout(typeCharacter, speed);
        } else {
          setIsTyping(false);
          // Hide cursor after typing is complete
          window.setTimeout(() => setShowCursor(false), 2000);
        }
      };
      
      typeCharacter();
    };

    // Initial delay before starting to type
    timeoutId = window.setTimeout(startTyping, delay);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [text, speed, delay]);

  return (
    <span className={`typewriter-text ${className}`}>
      {displayText}
      {showCursor && <span className={`cursor ${isTyping ? 'typing' : ''}`}>|</span>}
    </span>
  );
};

export default TypewriterText;