import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">TASCK</div>
        <ul className="nav-links">
          <li><a href="#opportunities">Our Opportunities</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#projects">Our Projects</a></li>
          <li><a href="#work">Work with Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="hero-content">
      <h1 >For <span className="highlight">CREATIVES</span></h1>
        <p>At TASCK, we empower creators across Africa by connecting them to unique opportunities that fuel their growth and impact. 
          From music to media, we provide resources, community and platforms you need to thrive.
           Join us and transform your passion into impact.</p>
        {/* <h1>For <span className="highlight">CREATIVES</span></h1> */}
        <div className="buttons">
          <button className="primary-button">Get Opportunities</button>
          <button className="secondary-button">Join Our Community</button>
        </div>
      </div>
    </header>
  );
}

export default Header;