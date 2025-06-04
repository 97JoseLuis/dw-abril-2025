import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data = await response.json();

        const detailedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );
        setPokemons(detailedData);
      } catch (error) {
        console.error('Error al buscar los datos de Pokéapi', error);
      }
    }

    fetchPokemonData();
  }, []);

  return (
    <div className="gallery-container">
      <h1>Poke Gallery</h1>
      <div className="gallery">
        {pokemons.map((pokemon) => {
          const imageUrl =
            pokemon.sprites.other['official-artwork'].front_default ||
            pokemon.sprites.front_default;

          return (
            <div className="card" key={pokemon.id}>
              <img src={imageUrl} alt={pokemon.name} className="pokemon-img" />
              <div className="card-info">
                <h2>{pokemon.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
