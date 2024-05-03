import { Link } from 'react-router-dom';
function PokeCard({ pokemon }) {
    return (
        <article className="pokemon-card">
            <Link to={`/pokemons/${pokemon.name}`}>
                <figure className="pokemon-image-card">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </figure>
                <p className="pokemon-info">
                    <h4>{pokemon.name.toUpperCase()}</h4>
                </p>
            </Link>
        </article>
    );
}

export default PokeCard;
