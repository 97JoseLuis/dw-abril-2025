import React, { useState } from 'react';

const alumnos = [
  { nombre: 'Juan', nota: 7 },
  { nombre: 'María', nota: 4 },
  { nombre: 'Pedro', nota: 6 },
  { nombre: 'Lucía', nota: 3 },
];

const filtrarAprobados = (alumnos) => {
  return alumnos.filter(alumno => alumno.nota >= 5);
};

const AlumnosAprobados = ({ alumnos, mostrarSoloAprobados }) => {
  const alumnosAMostrar = mostrarSoloAprobados ? filtrarAprobados(alumnos) : alumnos;

  return (
    <div>
      <h2>Alumnos {mostrarSoloAprobados ? 'Aprobados' : 'Todos'}</h2>
      {alumnosAMostrar.length > 0 ? (
        <ul>
          {alumnosAMostrar.map((alumno, index) => (
            <li key={index}>
              {alumno.nombre} - Nota: {alumno.nota}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay alumnos para mostrar.</p>
      )}
    </div>
  );
};

export default function App() {
  const [mostrarSoloAprobados, setMostrarSoloAprobados] = useState(true);

  const toggleMostrar = () => {
    setMostrarSoloAprobados(prev => !prev);
  };

  return (
    <div>
      <button onClick={toggleMostrar}>
        {mostrarSoloAprobados ? 'Mostrar Todos' : 'Mostrar Solo Aprobados'}
      </button>
      <AlumnosAprobados
        alumnos={alumnos}
        mostrarSoloAprobados={mostrarSoloAprobados}
      />
    </div>
  );
}