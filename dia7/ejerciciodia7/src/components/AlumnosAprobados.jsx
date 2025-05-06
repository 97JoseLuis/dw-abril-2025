import React from 'react';

const AlumnosAprobados = ({ alumnos }) => {
    const aprobados = alumnos.filter(alumno => alumno.nota >= 5);

    return (
        <div>
            <h2>Alumnos Aprobados</h2>
            <ul>
                {aprobados.map((alumno, index) => (
                    <li key={index}>
                        {alumno.nombre} - Nota: {alumno.nota}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlumnosAprobados;