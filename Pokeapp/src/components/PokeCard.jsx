import { Link } from 'react-router-dom';
function PokeCard({ pokemon }) {
    return (
        <article className="pokemon-card">
            <Link to={`/pokemons/${pokemon.name}`}>
                <section className="pokemon-image-card">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </section>
                <section className="pokemon-info">
                    <h4>{pokemon.name.toUpperCase()}</h4>
                </section>
            </Link>
        </article>
    );
}

export default PokeCard;
