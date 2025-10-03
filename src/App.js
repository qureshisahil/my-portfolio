import React, { useRef } from 'react';
import SplashCursor from './components/SplashCursor';
import NavBar from './components/NavBar';
import DarkVeil from './components/DarkVeil';
import GlassSurface from './components/GlassSurface';
import TextPressure from './components/TextPressure';
import ScrollFloat from './components/ScrollFloat';
import ShinyText  from './components/ShinyText';
import './App.css';

function App() {
  const aboutTextContainerRef = useRef(null);

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
          <header className="homepage-content">
            <p>Associate Product Manager & Software Engineer</p>
          </header>
        </div>
      </div>
      
      <NavBar />
      
      {/* About section */}
      <div className="section about-section" id="about">
        <div className="about-header">
            <ScrollFloat>
              ABOUT ME
            </ScrollFloat>
        </div>

        <GlassSurface
          width="90%"
          height="auto"
          borderRadius={25}
          className="about-glass"
        >
          <div className="about-text-container" ref={aboutTextContainerRef}>
            <ShinyText 
               text="I’m a product-focused professional with a background in software development and a strong foundation in building and managing SaaS platforms. Having completed my Master’s in Information Systems from Northeastern University, I’ve developed a practical, analytical mindset with a drive to see solutions through from idea to execution. At Gate6, I’ve contributed to multiple products across industries working closely with cross-functional teams, defining product requirements, and improving user experiences through iterative development. I bring strong technical and interpersonal skills, and I’m always eager to take on new challenges that push me to grow as both a strategist and a collaborator." 
               disabled={false} 
               speed={3} 
               className='custom-class' 
            />
          </div>
        </GlassSurface>
      </div>
    </div>
  );
}

export default App;