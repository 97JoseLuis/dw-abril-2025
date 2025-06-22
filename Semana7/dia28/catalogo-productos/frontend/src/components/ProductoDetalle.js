import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const ProductoDetalle = () => {
    const { id } = useParams();
    const history = useHistory();
    const [producto, setProducto] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/productos/${id}`);
                setProducto(response.data);
            } catch (err) {
                setError('Error al obtener el producto');
            }
        };

        fetchProducto();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/productos/${id}`);
            history.push('/productos');
        } catch (err) {
            setError('Error al eliminar el producto');
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!producto) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container product-detail">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <p>Categoría: {producto.categoria}</p>
            <p>Fecha de Creación: {new Date(producto.fechaCreacion).toLocaleDateString()}</p>
            <button className="btn btn-danger" onClick={handleDelete}>Eliminar Producto</button>
            <button className="btn btn-edit" onClick={() => history.push(`/producto/editar/${id}`)}>Editar Producto</button>
        </div>
    );
};

export default ProductoDetalle;