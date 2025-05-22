import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { items, removeFromCart } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} unidad(es)
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;