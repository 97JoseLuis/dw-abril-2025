import { useState, useEffect } from 'react';
import API from '../api';

export default function ProductForm({ refresh, productToEdit }) {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    if (productToEdit) setProduct(productToEdit);
  }, [productToEdit]);

  const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product._id) {
      await API.put(`/${product._id}`, product);
    } else {
      await API.post('/', product);
    }
    setProduct({ name: '', price: '', description: '' });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Nombre" required />
      <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Precio" required />
      <textarea name="description" value={product.description} onChange={handleChange} placeholder="Descripción" />
      <button type="submit">{product._id ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
}
