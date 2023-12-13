import React, { useState, useEffect } from 'react';
import './EnrollmentPage.css';


// Simulación de datos basada en la imagen proporcionada
const mockAsignaturas = [
  { codigo: '201', nombre: 'Química General', nivel: 1, cupos: 30 },
  { codigo: '202', nombre: 'Química Inorgánica', nivel: 1, cupos: 30 },
  { codigo: '203', nombre: 'Química Orgánica', nivel: 1, cupos: 30 },
  { codigo: '204', nombre: 'Termodinámica Química', nivel: 1, cupos: 30 },
  { codigo: '205', nombre: 'Cinética Química', nivel: 1, cupos: 30 },
  { codigo: '206', nombre: 'Fisicoquímica', nivel: 2, cupos: 30 },
  { codigo: '207', nombre: 'Química Analítica', nivel: 2, cupos: 30 },
  { codigo: '208', nombre: 'Análisis Instrumental', nivel: 2, cupos: 30 },
  { codigo: '209', nombre: 'Química Cuántica', nivel: 2, cupos: 30 },
  { codigo: '210', nombre: 'Mecánica Cuántica', nivel: 2, cupos: 30 },
  { codigo: '211', nombre: 'Matemáticas para la Ingeniería', nivel: 2, cupos: 30 },
  { codigo: '212', nombre: 'Álgebra Lineal', nivel: 3, cupos: 30 },
  { codigo: '213', nombre: 'Cálculo Diferencial e Integral', nivel: 3, cupos: 30 },
  { codigo: '214', nombre: 'Ecuaciones Diferenciales', nivel: 3, cupos: 30 },
  { codigo: '215', nombre: 'Estadística y Probabilidad', nivel: 3, cupos: 30 },
  // ...otros cursos
];

const EnrollmentPage = ({ studentCarrera, studentNivel }) => {
  const [asignaturas, setAsignaturas] = useState([]);
  const [selectedAsignaturas, setSelectedAsignaturas] = useState([]);

  useEffect(() => {
    // Filtrar las asignaturas que correspondan al nivel del estudiante
    const asignaturasFiltradas = mockAsignaturas.filter(asig => asig.nivel <= studentNivel);
    setAsignaturas(asignaturasFiltradas);
  }, [studentNivel]);

  const handleSelectAsignatura = (codigo) => {
    setSelectedAsignaturas(prev => {
      // Evitar duplicados
      if (prev.includes(codigo)) return prev;
      return [...prev, codigo];
    });
  };

  const handleUnselectAsignatura = (codigo) => {
    setSelectedAsignaturas(prev => prev.filter(asig => asig !== codigo));
  };

  const handleSubmit = () => {
    console.log('Asignaturas inscritas:', selectedAsignaturas);
    // Lógica para enviar las asignaturas seleccionadas al backend
  };

  return (
    <div className="enrollment-container">
      <h1>Inscripción de Asignaturas</h1>
      {asignaturas.length > 0 ? (
        <ul className="asignaturas-list">
          {asignaturas.map(asig => (
            <li key={asig.codigo} className="asignatura-item">
              <span>{asig.nombre} ({asig.codigo}) - Cupos: {asig.cupos}</span>
              <button onClick={() => handleSelectAsignatura(asig.codigo)}>Inscribir</button>
              <button onClick={() => handleUnselectAsignatura(asig.codigo)}>Desinscribir</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay asignaturas disponibles para inscribir.</p>
      )}
      <button onClick={handleSubmit} className="submit-inscripcion">Confirmar Inscripción</button>
    </div>
  );
};

export default EnrollmentPage;
