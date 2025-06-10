import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;