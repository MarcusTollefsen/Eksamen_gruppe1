import { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import TypeCard from './TypeCard';

function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        async function fetchPokemons() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
            const data = await response.json();
            const pokemonDetails = await Promise.all(data.results.map(async pokemon => {
                const detailResponse = await fetch(pokemon.url);
                return await detailResponse.json();
            }));
            setPokemons(pokemonDetails);
        }

        async function fetchTypes() {
            const response = await fetch('https://pokeapi.co/api/v2/type');
            const data = await response.json();
            setTypes(data.results.map(type => ({ name: type.name, url: `/images/types/${type.name}.png` })));
        }

        fetchPokemons();
        fetchTypes();
    }, []);

    return (
        <>
        <div className='home-container'>
            <section className='main-pokemon'>
                <h1>Main Pokemons</h1>
                <div className='pokemon-list'>
                    {pokemons.map(pokemon => <PokeCard key={pokemon.id} pokemon={pokemon} />)}
                </div>
            </section>
            <section className='main-type'>
                <h1>Pokémon Types</h1>
                <div className='type-list'>
                    {types.map(type => <TypeCard key={type.name}
                            type={type.name}
                            className={type.name.toLowerCase()} />)}
                </div>
            </section>
        </div>
        </>
    );
}

export default Home;



