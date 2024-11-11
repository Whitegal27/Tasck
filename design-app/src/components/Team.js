// src/components/Team.js
import React from 'react';

const teamMembers = Array(12).fill("John Doe");

const Team = () => {
  return (
    <section className="my-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="bg-yellow-400 h-20 w-20 rounded-full mx-auto"></div>
            <p className="mt-2">{member}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
