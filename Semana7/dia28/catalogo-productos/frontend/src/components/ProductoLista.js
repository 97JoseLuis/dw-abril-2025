import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ProductoLista = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const history = useHistory();

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
            await axios.delete(`http://localhost:5000/productos/${id}`);
            setProductos(productos.filter(producto => producto._id !== id));
        } catch (err) {
            setError('Error al eliminar el producto');
        }
    };

    return (
        <div className="container">
            <h2>Lista de Productos</h2>
            {error && <p className="error">{error}</p>}
            <div className="product-list">
                {productos.map(producto => (
                    <div className="product-item" key={producto._id}>
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                        <p>Stock: {producto.stock}</p>
                        <button className="btn btn-eliminar" onClick={() => handleEliminar(producto._id)}>Eliminar</button>
                        <button className="btn btn-editar" onClick={() => history.push(`/producto/editar/${producto._id}`)}>Editar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductoLista;