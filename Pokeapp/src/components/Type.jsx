import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Type() {
  const { type } = useParams();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemonsByType() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.pokemon.map(async (entry) => {
            const pokemonResponse = await fetch(entry.pokemon.url);
            return await pokemonResponse.json();
          })
        );
        setPokemons(pokemonDetails);
      } catch (error) {
        console.error('Failed to fetch pokemons by type:', error);
        setPokemons([]);
      }
    }
    fetchPokemonsByType();
  }, [type]);

  return (
    <div>
      <h1>{type.toUpperCase()} Type Pokemons</h1>
      <div>
        {pokemons.map(pokemon => (
          <div key={pokemon.id}>
            <Link to={`/pokemons/${pokemon.name}`}>
              <p>{pokemon.name}</p>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Type;
