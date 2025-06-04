import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

const StoreProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          signal: controller.signal
        });
        if (!response.ok) {
          throw new Error("Error al obtener productos");
        }
        const data = await response.json();
        setProducts(data.slice(0, 5));
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  if (loading) return <div className="container"><p>Cargando productos...</p></div>;
  if (error) return <div className="container"><p>Error: {error}</p></div>;

  return (
    <div className="container">
      <h2>Productos (FakeStore API)</h2>
      <div className="card-list">
        {products.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default StoreProducts;
