import React from 'react';
import './Opportunities.css';
import frameImage from '../components/Frame.png';

function Opportunities() {
  return (
    <section className="opportunities">
      {/* Section from your screenshot */}
      <div className="about-section">
        <h2 className="about-heading">
          LOOKING FOR<br></br><span>OPPORTUNITIES?</span> 
        </h2>
        <h3>Check out our top 5 curated jobs this week</h3>
        <img src={frameImage} alt="Group of people" className="about-image" />
      </div>
    </section>
  );
}

export default Opportunities;


