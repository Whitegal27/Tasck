import React from 'react';
import './About.css';
import aboutImage from '../components/Falz.png';

function About() {
  return (
    <section className="about">
      <h2>We Connect Creatives to Opportunities</h2>
      

      {/* Image Section */}
      <div className="about-image-container">
        <img src={aboutImage} alt="Group of people" className="about-image" />
      </div>

      {/* Moved the paragraph below the image */}
      <p>Our mission is to ignite local prosperity by providing <br></br> creatives with the resources and opportunities they need to thrive.</p>
    </section>
  );
}

export default About;
