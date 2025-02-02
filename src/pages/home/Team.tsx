import React from 'react';
import TeamSlider from '../../components/TeamSlider';
import { teamMembers } from '../../data/team';

function Team() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Meet Our Team</h2>
          <p className="text-xl text-black/70">Led by industry experts passionate about education</p>
        </div>
        <TeamSlider members={teamMembers} />
      </div>
    </div>
  );
}

export default Team;