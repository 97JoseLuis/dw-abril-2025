import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductoLista = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/productos');
                console.log(response.data);
                setProductos(response.data);
            } catch (err) {
                setError('Error al cargar los productos');
            }
        };

        fetchProductos();
    }, []);

    const handleEliminar = async (id) => {
        try {
            await axios.delete(`/productos/${id}`);
            setProductos(productos.filter(producto => producto._id !== id));
        } catch (err) {
            setError('Error al eliminar el producto');
        }
    };

    return (
        <div>
            <h2>Lista de Productos</h2>
            {error && <p>{error}</p>}
            <ul>
                {productos.map(producto => (
                    <li key={producto._id}>
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                        <p>Stock: {producto.stock}</p>
                        <button onClick={() => handleEliminar(producto._id)}>Eliminar</button>
                        <button onClick={() => {/* Lógica para editar */}}>Editar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductoLista;