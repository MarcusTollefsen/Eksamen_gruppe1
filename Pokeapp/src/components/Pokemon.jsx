import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pokemon() {
  const { pokemon } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [typeIcons, setTypeIcons] = useState([]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );
        const data = await response.json();
        setPokemonDetails(data);

        const types = data.types.map((typeInfo) => typeInfo.type.name);
        loadTypeIcons(types);
      } catch (error) {
        console.error("Failed to fetch pokemon details:", error);
        setPokemonDetails(null);
      }
    };

    fetchPokemonDetails();
  }, [pokemon]);

  const loadTypeIcons = async (types) => {
    try {
      const typeIcons = await Promise.all(
        types.map(async (type) => {
          const iconPath = `../icons/${type.toLowerCase()}.png`;
          const icon = await import(iconPath);
          return { type, iconUrl: icon.default };
        })
      );
      setTypeIcons(typeIcons);
    } catch (error) {
      console.error("Failed to load type icons:", error);
    }
  };

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <section className="pokemon-site-container">
      <header>
        <h1>{pokemonDetails.name.toUpperCase()}</h1>
        <figure className={"pokemon-image-site"}>
          <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
          />
        </figure>
      </header>
      <main>
        <article className="pokemon-type-image-site">
          <h2>Types</h2>
          <ul>
            {pokemonDetails.types.map((typeInfo) => {
              const matchingIcon = typeIcons.find(
                (icon) => icon.type === typeInfo.type.name
              );
              return (
                <li
                  key={typeInfo.type.name}
                  className={`type ${typeInfo.type.name}`}
                >
                  {matchingIcon && (
                    <figure>
                      <img
                        src={matchingIcon.iconUrl}
                        alt={typeInfo.type.name}
                      />
                      {typeInfo.type.name.toUpperCase()}
                    </figure>
                  )}
                </li>
              );
            })}
          </ul>
        </article>

        <article>
          <h2>Stats</h2>
          <ul>
            {pokemonDetails.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name.toUpperCase()}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Abilities</h2>
          <ul>
            {pokemonDetails.abilities.map((ability) => (
              <li key={ability.ability.name}>
                {ability.ability.name.toUpperCase()}
              </li>
            ))}
          </ul>
        </article>
      </main>
    </section>
  );
}
export default Pokemon;
