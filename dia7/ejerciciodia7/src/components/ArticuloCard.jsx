import React from 'react';
import ArticuloCard from './ArticuloCard';

const articulo = [
  { id: 1, titulo: 'Artículo 1', contenido: 'Contenido del artículo 1' },
  { id: 2, titulo: 'Artículo 2', contenido: 'Contenido del artículo 2' },
  { id: 3, titulo: 'Artículo 3', contenido: 'Contenido del artículo 3' },
];

const ArticuloCard = ({ titulo, contenido }) => {
    return (
        <div className="articulo-card">
            <h2>{titulo}</h2>
            <p>{contenido}</p>
        </div>
    );
};

const ArticulosList = ({ articulos }) => {
    return (
        <div className="articulos-list">
            {articulos.map((articulo, index) => (
                <ArticuloCard 
                    key={index} 
                    titulo={articulo.titulo} 
                    contenido={articulo.contenido} 
                />
            ))}
        </div>
    );
};

export default ArticulosList;