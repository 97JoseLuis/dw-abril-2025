const express = require('express');
const mongoose = require('mongoose');
const alumnoRoutes = require('./routes/alumnos');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/escuela', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ Conectado a MongoDB - Base de datos: escuela'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Rutas
app.use('/api/alumnos', alumnoRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        mensaje: 'API de Práctica MongoDB - Día 27',
        niveles: {
            nivel1: 'Filtros y consultas simples',
            nivel2: 'Paginación y ordenamiento',
            nivel3: 'Condiciones compuestas e índices'
        },
        rutas: {
            alumnos: '/api/alumnos',
            filtros: '/api/alumnos/filtros',
            paginacion: '/api/alumnos/paginacion',
            condiciones: '/api/alumnos/condiciones-compuestas'
        }
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`�� Servidor corriendo en http://localhost:${PORT}`);
});