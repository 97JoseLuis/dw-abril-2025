import axios from 'axios';

const API_URL = 'http://localhost:5000/productos';

export const obtenerProductos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener los productos: ' + error.message);
    }
};

export const obtenerProducto = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener el producto: ' + error.message);
    }
};

export const crearProducto = async (producto) => {
    try {
        const response = await axios.post(API_URL, producto);
        return response.data;
    } catch (error) {
        throw new Error('Error al crear el producto: ' + error.message);
    }
};

export const actualizarProducto = async (id, producto) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, producto);
        return response.data;
    } catch (error) {
        throw new Error('Error al actualizar el producto: ' + error.message);
    }
};

export const eliminarProducto = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al eliminar el producto: ' + error.message);
    }
};

export default {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};
