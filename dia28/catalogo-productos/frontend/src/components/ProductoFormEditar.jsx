import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../api';

const ProductoFormEditar = () => {
    const { id } = useParams();
    const history = useHistory();
    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: '',
        categoria: '',
    });
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await api.get(`/productos/${id}`);
                setProducto(response.data);
            } catch (err) {
                setError('Error al obtener el producto');
            }
        };
        fetchProducto();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/productos/${id}`, producto);
            history.push('/productos');
        } catch (err) {
            setError('Error al actualizar el producto');
        }
    };

    return (
        <div>
            <h2>Editar Producto</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} required />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea name="descripcion" value={producto.descripcion} onChange={handleChange} required />
                </div>
                <div>
                    <label>Precio:</label>
                    <input type="number" name="precio" value={producto.precio} onChange={handleChange} required />
                </div>
                <div>
                    <label>Stock:</label>
                    <input type="number" name="stock" value={producto.stock} onChange={handleChange} required />
                </div>
                <div>
                    <label>Categoría:</label>
                    <input type="text" name="categoria" value={producto.categoria} onChange={handleChange} required />
                </div>
                <button type="submit">Actualizar Producto</button>
            </form>
        </div>
    );
};

export default ProductoFormEditar;