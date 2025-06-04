import React from 'react';

const ProductItem = ({ title, price, category, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-body">
        <h3>{title}</h3>
        <p><strong>Precio:</strong> {price}€</p>
        <p><strong>Categoría:</strong> {category}</p>
      </div>
    </div>
  );
};

export default ProductItem;
