
import { Link } from 'react-router-dom';

const teams = [
  { id: 1, name: 'Team Aqua', slug: 'team-aqua' },
  { id: 2, name: 'Team Magma', slug: 'team-magma' },
  { id: 3, name: 'Team Rocket', slug: 'team-rocket' }
];

function Teams() {
  return (
    <section>
      <h1>Teams</h1>
      {teams.map(team => (
        <article key={team.id}>
          <h2>{team.name}</h2>
          <Link to={`/teams/${team.slug}`}>View Team</Link>
        </article>
      ))}
    </section>
  );
}

export default Teams; 
