import React from 'react';
import SplashCursor from './components/SplashCursor';
import NavBar from './components/NavBar';
import DarkVeil from './components/DarkVeil';
import GlassSurface from './components/GlassSurface';
import TextPressure from './components/TextPressure';
import ScrollFloat from './components/ScrollFloat'; // Import the new ScrollFloat component
import './App.css';

function App() {
  return (
    <div className="main-container">
      {/* Landing page section */}
      <div className="homepage" id="home">
        <DarkVeil /> 
        <SplashCursor />
        <div className="center-panel-container">
          <GlassSurface
            width={800}
            height={300}
            borderRadius={25}
            className="main-content-glass"
          >
            <TextPressure
              text="SAHIL QURESHI"
              minFontSize={50}
              flex={true}
              stroke={false}
              className="text-pressure-main"
              textColor="#ffffff"
            />
          </GlassSurface>
        </div>
      </div>
      
      {/* The NavBar sits on the highest layer (z-index: 100) */}
      <NavBar />
      
      {/* New About section that will be scrollable */}
      <div className="section about-section" id="about">
        <ScrollFloat>
            ABOUT ME
          </ScrollFloat>  
        <GlassSurface
          width="60%"
          height="auto"
          borderRadius={25}
          className="about-glass"
        >
          <div className="about-text-container">
            <p>
              I’m a product-focused professional with a background in software development and a strong foundation in building and managing SaaS platforms. [cite_start]Having completed my Master’s in Information Systems from Northeastern University, I’ve developed a practical, analytical mindset with a drive to see solutions through from idea to execution. [cite: 37]
            </p>
            <p>
              At Gate6, I’ve contributed to multiple products across industries working closely with cross-functional teams, defining product requirements, and improving user experiences through iterative development. [cite_start]I bring strong technical and interpersonal skills, and I’m always eager to take on new challenges that push me to grow as both a strategist and a collaborator. [cite: 12, 13, 14, 15]
            </p>
          </div>
        </GlassSurface>
        <div className="about-text-container">
        
        </div>
      </div>
    </div>
  );
}

export default App;