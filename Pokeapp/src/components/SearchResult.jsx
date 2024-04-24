import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SearchResult() {
  const { pokemon } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
        const data = await response.json();
        setResult(data);
      } catch (error) {
        setResult(null);
      }
    }
    fetchPokemon();
  }, [pokemon]);

  return (
    <div>
      {result ? (
        <div>
          <h1>{result.name.toUpperCase()}</h1>
          <img src={result.sprites.front_default} alt={result.name} />
          {/* Display more details as needed */}
        </div>
      ) : (
        <p>No results found for {pokemon}</p>
      )}
    </div>
  );
}

export default SearchResult;
