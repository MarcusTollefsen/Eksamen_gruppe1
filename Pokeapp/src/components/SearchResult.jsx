import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokeCard from './PokeCard';

function SearchResult() {
    const { pokemon } = useParams();
    const [searchResults, setSearchResults] = useState([]);
 

    useEffect(() => {
        async function fetchPokemon() {

                           const formattedPokemonName = pokemon.toLowerCase(); // Konverter navnet til små bokstaver
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formattedPokemonName}`);
                if (!response.ok) {
                    throw new Error(`Det du søker etter finnes ikke "${pokemon}"`);
                }
                const data = await response.json();
                setSearchResults([data]);

        }

        fetchPokemon();
    }, [pokemon]);

    if (!searchResults.length) return <div>Det du søker etter finnes ikke{pokemon}</div>;

    return (
        <div>
            <h1>Search Results</h1>
            <div>
                {searchResults.map(pokemon => (
                    <PokeCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}

export default SearchResult;
