import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokeCard from './PokeCard';

function SearchResult() {
    const { pokemon } = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPokemon() {
            setLoading(true);
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                if (!response.ok) {
                    throw new Error(`No Pokémon found with the name "${pokemon}"`);
                }
                const data = await response.json();
                setSearchResults([data]); // Convert single result into an array for mapping
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPokemon();
    }, [pokemon]);
    
    if (!searchResults.length) return <div>No Pokémon found with the name "{pokemon}"</div>;

    return (
        <div>
            <h1>Search Results</h1>
            <div>
                {searchResults.map(pokemon => (
                    <PokeCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}

export default SearchResult;
