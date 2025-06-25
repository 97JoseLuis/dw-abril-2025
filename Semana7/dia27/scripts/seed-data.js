const mongoose = require('mongoose');
const Alumno = require('../models/Alumno');

const datosAlumnos = [
    {
        nombre: 'Juan',
        apellido: 'García',
        email: 'juan.garcia@email.com',
        edad: 22,
        fechaNacimiento: new Date('2002-03-15'),
        profesion: 'estudiante',
        activo: true
    },
    {
        nombre: 'María',
        apellido: 'Gómez',
        email: 'maria.gomez@email.com',
        edad: 25,
        fechaNacimiento: new Date('1999-07-22'),
        profesion: 'profesor',
        activo: true
    },
    {
        nombre: 'Carlos',
        apellido: 'López',
        email: 'carlos.lopez@email.com',
        edad: 19,
        fechaNacimiento: new Date('2005-11-08'),
        profesion: 'estudiante',
        activo: true
    },
    {
        nombre: 'Ana',
        apellido: 'González',
        email: 'ana.gonzalez@email.com',
        edad: 28,
        fechaNacimiento: new Date('1996-04-12'),
        profesion: 'profesor',
        activo: false
    },
    {
        nombre: 'Luis',
        apellido: 'Fernández',
        email: 'luis.fernandez@email.com',
        edad: 21,
        fechaNacimiento: new Date('2003-09-30'),
        profesion: 'estudiante',
        activo: true
    },
    {
        nombre: 'Juan',
        apellido: 'Martínez',
        email: 'juan.martinez@email.com',
        edad: 24,
        fechaNacimiento: new Date('2000-12-05'),
        profesion: 'administrativo',
        activo: true
    },
    {
        nombre: 'Sofía',
        apellido: 'Gutiérrez',
        email: 'sofia.gutierrez@email.com',
        edad: 20,
        fechaNacimiento: new Date('2004-06-18'),
        profesion: 'estudiante',
        activo: true
    },
    {
        nombre: 'Diego',
        apellido: 'Gómez',
        email: 'diego.gomez@email.com',
        edad: 26,
        fechaNacimiento: new Date('1998-01-25'),
        profesion: 'profesor',
        activo: true
    }
];

async function poblarBaseDeDatos() {
    try {
        await mongoose.connect('mongodb://localhost:27017/escuela', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log('✅ Conectado a MongoDB');
        
        // Limpiar datos existentes
        await Alumno.deleteMany({});
        console.log('🗑️ Datos anteriores eliminados');
        
        // Insertar nuevos datos
        const alumnosInsertados = await Alumno.insertMany(datosAlumnos);
        console.log(`✅ ${alumnosInsertados.length} alumnos insertados correctamente`);
        
        console.log('\n�� Base de datos poblada exitosamente!');
        
    } catch (error) {
        console.error('❌ Error:', error);
    } finally {
        await mongoose.disconnect();
        console.log('🔌 Desconectado de MongoDB');
    }
}

poblarBaseDeDatos();