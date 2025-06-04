import React, { useState, useEffect } from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5', {
          signal: controller.signal
        });
        if (!response.ok) {
          throw new Error("Error al obtener pokemons");
        }
        const data = await response.json();
        setPokemons(data.results);
      } catch(err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();

    return () => controller.abort();
  }, []);

  if (loading) return <div className="container"><p>Cargando pokemons...</p></div>;
  if (error) return <div className="container"><p>Error: {error}</p></div>;

  return (
    <div className="container">
      <h2>Pokémons (PokeAPI)</h2>
      <div className="card-list">
        {pokemons.map((pokemon, index) => (
          <PokemonItem key={index} {...pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
