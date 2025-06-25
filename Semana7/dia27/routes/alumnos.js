const express = require('express');
const router = express.Router();
const Alumno = require('../models/Alumno');

// ===== NIVEL 1: FILTROS Y CONSULTAS SIMPLES =====
router.get('/filtros', async (req, res) => {
    try {
        console.log('�� Ejecutando consultas de filtros...');
        
        // 1. Alumnos con edad entre 18 y 25
        const alumnosEdad = await Alumno.find({
            edad: { $gte: 18, $lte: 25 }
        }).select('nombre apellido edad email -_id');
        
        // 2. Alumnos cuyo apellido empiece por "G"
        const alumnosApellidoG = await Alumno.find({
            apellido: { $regex: '^G', $options: 'i' }
        }).select('nombre apellido email -_id');
        
        // 3. Alumnos con profesiones específicas
        const alumnosProfesion = await Alumno.find({
            profesion: { $in: ['profesor', 'estudiante'] }
        }).select('nombre apellido profesion -_id');

        res.json({
            mensaje: '✅ Consultas de filtros ejecutadas correctamente',
            resultados: {
                alumnosEdad18a25: alumnosEdad,
                alumnosApellidoG: alumnosApellidoG,
                alumnosProfesion: alumnosProfesion
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ===== NIVEL 2: PAGINACIÓN Y ORDENAMIENTO =====
router.get('/paginacion', async (req, res) => {
    try {
        const { pagina = 1, limite = 10, ordenarPor = 'fechaNacimiento', orden = 'desc' } = req.query;
        const skip = (pagina - 1) * limite;
        
        console.log(`📄 Ejecutando paginación: página ${pagina}, límite ${limite}`);
        
        // Ordenamiento dinámico
        const ordenamiento = {};
        ordenamiento[ordenarPor] = orden === 'desc' ? -1 : 1;
        
        // Consulta con paginación y ordenamiento
        const alumnos = await Alumno.find()
            .select('nombre apellido fechaNacimiento edad -_id')
            .sort(ordenamiento)
            .skip(skip)
            .limit(parseInt(limite));
        
        // Contar total de documentos
        const total = await Alumno.countDocuments();
        
        res.json({
            mensaje: '✅ Paginación ejecutada correctamente',
            paginacion: {
                pagina: parseInt(pagina),
                limite: parseInt(limite),
                total,
                paginas: Math.ceil(total / limite)
            },
            ordenamiento: {
                campo: ordenarPor,
                orden: orden
            },
            resultados: alumnos
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ===== NIVEL 3: CONDICIONES COMPUESTAS =====
router.get('/condiciones-compuestas', async (req, res) => {
    try {
        console.log('🔗 Ejecutando condiciones compuestas...');
        
        // 1. Profesores nacidos después del 2000
        const profesoresJovenes = await Alumno.find({
            $and: [
                { profesion: 'profesor' },
                { fechaNacimiento: { $gte: new Date('2000-01-01') } }
            ]
        }).select('nombre apellido profesion fechaNacimiento -_id');
        
        // 2. Alumnos con nombre "Juan" O apellido "Gómez"
        const juanOGomez = await Alumno.find({
            $or: [
                { nombre: { $regex: 'Juan', $options: 'i' } },
                { apellido: { $regex: 'Gómez', $options: 'i' } }
            ]
        }).select('nombre apellido email -_id');

        res.json({
            mensaje: '✅ Condiciones compuestas ejecutadas correctamente',
            resultados: {
                profesoresJovenes,
                juanOGomez
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta básica para listar alumnos
router.get('/', async (req, res) => {
    try {
        const alumnos = await Alumno.find().limit(5);
        res.json({
            mensaje: 'Lista de alumnos (primeros 5)',
            alumnos
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;