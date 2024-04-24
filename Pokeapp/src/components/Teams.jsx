import React from 'react';
import { Link } from 'react-router-dom';

const teams = [
  { id: 1, name: 'Team Aqua', slug: 'team-aqua' },
  { id: 2, name: 'Team Magma', slug: 'team-magma' },
  { id: 3, name: 'Team Rocket', slug: 'team-rocket' }
];

function Teams() {
  return (
    <div>
      <h1>Teams</h1>
      {teams.map(team => (
        <div key={team.id}>
          <h2>{team.name}</h2>
          <Link to={`/teams/${team.slug}`}>View Team</Link>
        </div>
      ))}
    </div>
  );
}

export default Teams;
