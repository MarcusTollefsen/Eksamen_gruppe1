import React from 'react';
import { Link } from 'react-router-dom';

function PokeCard({ pokemon }) {
    return (
        <div className="pokemon-card">
            <Link to={`/pokemons/${pokemon.name}`}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h4>{pokemon.name.toUpperCase()}</h4>
            </Link>
        </div>
    );
}

export default PokeCard;
