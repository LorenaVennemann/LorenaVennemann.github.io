import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import SplashScreen from './components/SplashScreen.tsx'
import './index.css'

function Main() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* App immer rendern, aber dahinter */}
      <div style={{
        visibility: showSplash ? 'hidden' : 'visible',
        opacity: showSplash ? 0 : 1,
        transition: 'opacity 0.5s ease-in'
      }}>
        <App />
      </div>
      
      {/* Splash Screen darüber */}
      {showSplash && <SplashScreen onFinished={() => setShowSplash(false)} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
