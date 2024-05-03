import { Link } from "react-router-dom";
function PokeCard({ pokemon }) {
<<<<<<< HEAD
  return (
    <figure className="pokemon-card">
      <Link to={`/pokemons/${pokemon.name}`}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        <h4>{pokemon.name.toUpperCase()}</h4>
      </Link>
    </figure>
  );
=======
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
>>>>>>> 0fa7903b6f82bd904e2ec2a40e2639ccd1be95bf
}

export default PokeCard;
