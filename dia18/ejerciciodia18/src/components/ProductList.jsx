import React from "react";
import { useCart } from "./CartContext";

const products = [
  { id: 1, name: "Producto A", price: 10 },
  { id: 2, name: "Producto B", price: 15 },
  { id: 3, name: "Producto C", price: 20 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - €{product.price}
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;