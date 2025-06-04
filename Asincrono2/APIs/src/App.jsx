import React from 'react';
import StoreProducts from './components/StoreProducts';
import UserList from './components/UserList';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Consumir APIs con Fetch en ReactJS</h1>
      </header>
      <main>
        <StoreProducts />
        <UserList />
        <PokemonList />
      </main>
    </div>
  );
}

export default App;
