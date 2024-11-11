import React from 'react';
import './Pipeline.css'; // Ensure you have this CSS file created with relevant styles

const PipelinesPage = () => {
  return (
    <div className="pipelines-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-image">
         
        </div>
      </div>

      {/* Pipelines Section */}
      <h2 className="pipelines-title">Our Pipelines</h2>
      <div className="pipelines">
        <PipelineItem title="Advocacy" description="Enable experienced creatives..." />
        <PipelineItem title="Community" description="Enable experienced creatives..." />
        <PipelineItem title="Music" description="Enable experienced creatives..." />
        <PipelineItem title="Learning" description="Enable experienced creatives..." />
      </div>
    </div>
  );
};

const PipelineItem = ({ title, description }) => (
  <div className="pipeline-item">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="buttons">
      <button>Incredible Music Festival</button>
      <button>Ignite</button>
    </div>
  </div>
);

export default PipelinesPage;
