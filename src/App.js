import React from 'react';
import SplashCursor from './components/SplashCursor';
import NavBar from './components/NavBar';
import DarkVeil from './components/DarkVeil';
import GlassSurface from './components/GlassSurface';
import TextPressure from './components/TextPressure';
import './App.css';

function App() {
  return (
    <div className="homepage">
      {/* The DarkVeil component is the lowest layer (z-index: 0) */}
      <DarkVeil /> 
      
      {/* The SplashCursor sits on top of the DarkVeil (z-index: 50) */}
      <SplashCursor />

      {/* The GlassSurface for your name sits on top of the cursor to blur the effect (z-index: 60) */}
      <div className="center-panel-container">
        <GlassSurface
          width={800} 
          height={300} 
          borderRadius={25}
          className="main-content-glass"
        >
          <TextPressure
            text="Sahil Qureshi"
            minFontSize={50}
            flex={true}
            stroke={false}
            className="text-pressure-main"
            textColor="#ffffff"
          />
        </GlassSurface>
        <header className="homepage-content">
          <p>Associate Product Manager & Software Engineer</p>
        </header>
      </div>

      {/* The NavBar sits on the highest layer (z-index: 100) */}
      <NavBar />
    </div>
  );
}

export default App;