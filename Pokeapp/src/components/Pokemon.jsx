import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

function Pokemon() {
    const { pokemon } = useParams(); // This retrieves the Pokémon name from the URL
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                const data = await response.json();
                setPokemonDetails(data);
            } catch (error) {
                console.error('Failed to fetch pokemon details:', error);
                setPokemonDetails(null);
            }
        };

        fetchPokemonDetails();
    }, [pokemon]);

    if (!pokemonDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{pokemonDetails.name.toUpperCase()}</h1>
            <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />

            <h2>Types</h2>
            <ul>
                {pokemonDetails.types.map((typeInfo) => (
                    <li key={typeInfo.type.name}>{typeInfo.type.name.toUpperCase()}</li>
                ))}
            </ul>

            <h2>Stats</h2>
            <ul>
                {pokemonDetails.stats.map((stat) => (
                    <li key={stat.stat.name}>
                        {stat.stat.name.toUpperCase()}: {stat.base_stat}
                    </li>
                ))}
            </ul>
            <h2>Abilities</h2>
            <ul>
                {pokemonDetails.abilities.map((ability) => (
                    <li key={ability.ability.name}>
                        {ability.ability.name.toUpperCase()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pokemon;
