import React, { useState } from 'react';
import axios from 'axios';

const ProductoFormNuevo = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [categoria, setCategoria] = useState('');
    const [fechaCreacion] = useState(new Date().toISOString().split('T')[0]);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!nombre || !descripcion || !precio || !stock || !categoria) {
            setError('Todos los campos son obligatorios');
            return;
        }

        try {
            await axios.post('/productos', {
                nombre,
                descripcion,
                precio,
                stock,
                categoria,
                fechaCreacion
            });
            // Reset form fields
            setNombre('');
            setDescripcion('');
            setPrecio('');
            setStock('');
            setCategoria('');
        } catch (err) {
            setError('Error al crear el producto');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar Nuevo Producto</h2>
            {error && <p className="error">{error}</p>}
            <div>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div>
                <label>Descripción:</label>
                <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
            </div>
            <div>
                <label>Precio:</label>
                <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
            </div>
            <div>
                <label>Stock:</label>
                <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
            </div>
            <div>
                <label>Categoría:</label>
                <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
            </div>
            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default ProductoFormNuevo;