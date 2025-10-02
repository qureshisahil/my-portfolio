import React from 'react';
import SplashCursor from './components/SplashCursor';
import NavBar from './components/NavBar'; // Import the new NavBar component
import './App.css'; 

function App() {
  return (
    <div className="homepage">
      {/* The NavBar component goes here */}
      <NavBar />
      <SplashCursor />
      
      <header className="homepage-content">
        <h1>Hello, I'm Sahil Shakib Qureshi</h1>
        <p>Associate Product Manager & Software Engineer</p>
        {/* Your content will be added below this header */}
      </header>
    </div>
  );
}

export default App;