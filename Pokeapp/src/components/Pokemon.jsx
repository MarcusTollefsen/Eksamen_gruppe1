import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Pokemon() {
  const { pokemon } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function fetchPokemonDetails() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.json();
      setDetails(data);
    }
    fetchPokemonDetails();
  }, [pokemon]);

  return (
    <div>
      {details ? (
        <div>
          <h1>{details.name.toUpperCase()}</h1>
          <img src={details.sprites.front_default} alt={details.name} />
          {/* Display more details as required */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Pokemon;
