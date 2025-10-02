import React from 'react';
import GlassSurface from './GlassSurface';
import './NavBar.css'; // We'll create this file next

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <GlassSurface
        width="auto"
        height={60}
        borderRadius={30}
        className="navbar-glass"
      >
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </GlassSurface>
    </nav>
  );
};

export default NavBar;