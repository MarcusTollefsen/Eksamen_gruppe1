import  { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/type/type.scss";

function Type() {
  const { type } = useParams();
  const [pokemons, setPokemons] = useState([]);
  const [iconUrl, setIconUrl] = useState("");

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
        console.error("Failed to fetch pokemons by type:", error);
        setPokemons([]);
      }
    }
    fetchPokemonsByType();

    const iconPath = `../icons/${type.toLowerCase()}.png`;
    importIcon(iconPath);
  }, [type]);

  const importIcon = async (iconPath) => {
    try {
      const icon = await import(iconPath);
      setIconUrl(icon.default);
    } catch (error) {
      console.error("Failed to import icon:", error);
    }
  };

  return (
    <section className="type-container">
      {iconUrl && (
        <article className="type-icon">
          <img src={iconUrl} alt={type} />
          <p>{type.toUpperCase()}</p>
        </article>
      )}
      <article className= "type-pokemon-list" >
        {pokemons.map((pokemon) => (
          <figure key={pokemon.id} className={`pokemon-card ${type}`}>
            <Link to={`/pokemons/${pokemon.name}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>{pokemon.name.toUpperCase()}</p>
            </Link>
          </figure>
        ))}
      </article>
    </section>
  );
}

export default Type;