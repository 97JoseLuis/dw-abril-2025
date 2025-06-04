import React from 'react';

const PokemonItem = ({ name, url }) => {
  const idMatch = url.match(/\/pokemon\/(\d+)\//);
  const id = idMatch ? idMatch[1] : "N/A";

  return (
    <div className="card">
      <div className="card-body">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <p><strong>ID:</strong> {id}</p>
        <p>
          <strong>URL:</strong>{" "}
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </p>
      </div>
    </div>
  );
};

export default PokemonItem;
