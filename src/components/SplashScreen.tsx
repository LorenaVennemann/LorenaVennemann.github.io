import { useEffect, useState } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  onFinished: () => void;
}

export default function SplashScreen({ onFinished }: SplashScreenProps) {
  const [phase, setPhase] = useState<'show' | 'fade'>('show');

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fade'), 2000);
    const completeTimer = setTimeout(() => onFinished(), 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onFinished]);

  return (
    <div className={`splash-screen ${phase === 'fade' ? 'fade' : ''}`}>
      <div className="content-wrapper">
        <h1 className="splash-title">
          Lorena Jil Vennemann
        </h1>
        <div className="splash-subtitle">Developer Portfolio</div>
      </div>
    </div>
  );
}
