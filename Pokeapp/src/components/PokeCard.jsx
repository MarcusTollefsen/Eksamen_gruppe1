import { Link } from 'react-router-dom';
function PokeCard({ pokemon }) {
    return (
        <div className="pokemon-card">
            <Link to={`/pokemons/${pokemon.name}`}>
                <div className="pokemon-image-card">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div className="pokemon-info">
                    <h4>{pokemon.name.toUpperCase()}</h4>
                </div>
            </Link>
        </div>
    );
}

export default PokeCard;
