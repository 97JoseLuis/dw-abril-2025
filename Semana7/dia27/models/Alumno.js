const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    edad: {
        type: Number,
        required: true,
        min: 0,
        max: 120
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    profesion: {
        type: String,
        enum: ['estudiante', 'profesor', 'administrativo', 'otro'],
        default: 'estudiante'
    },
    activo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Índices para mejorar el rendimiento
alumnoSchema.index({ email: 1 });
alumnoSchema.index({ fechaNacimiento: -1 });
alumnoSchema.index({ apellido: 1, nombre: 1 });
alumnoSchema.index({ edad: 1 });
alumnoSchema.index({ profesion: 1 });

module.exports = mongoose.model('Alumno', alumnoSchema);