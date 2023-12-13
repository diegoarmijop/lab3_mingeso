import React, { useState, useEffect } from 'react';
import './InteractiveGrid.css'; 

const mockMalla = [
  { codigo: '201', nombre: 'Química General', nivel: 1 },
  { codigo: '202', nombre: 'Química Inorgánica', nivel: 1 },
  { codigo: '203', nombre: 'Química Orgánica', nivel: 1 },
  { codigo: '204', nombre: 'Termodinámica Química', nivel: 1 },
  { codigo: '205', nombre: 'Cinética Química', nivel: 1 },
  { codigo: '206', nombre: 'Fisicoquímica', nivel: 2 },
  { codigo: '207', nombre: 'Química Analítica', nivel: 2 },
  { codigo: '208', nombre: 'Análisis Instrumental', nivel: 2 },
  { codigo: '209', nombre: 'Química Cuántica', nivel: 2 },
  { codigo: '210', nombre: 'Mecánica Cuántica', nivel: 2 },
  { codigo: '211', nombre: 'Matemáticas para la Ingeniería', nivel: 2 },
  { codigo: '212', nombre: 'Álgebra Lineal', nivel: 3 },
  { codigo: '213', nombre: 'Cálculo Diferencial e Integral', nivel: 3 },
];


const InteractiveGrid = ({ studentCarrera }) => {
  const [malla, setMalla] = useState([]);

  useEffect(() => {
    // Simulación de la llamada a la API para obtener la malla según la carrera del estudiante
    setMalla(mockMalla.filter(asig => asig.codigoCarrera === studentCarrera));
  }, [studentCarrera]);

  return (
    <div className="malla-container">
      <h1>Malla Curricular</h1>
      <div className="malla-grid">
        {malla.map((asig, index) => (
          <div key={asig.codigo} className={`malla-item nivel-${asig.nivel}`}>
            <span>{asig.nombre}</span>
            <small>{asig.codigo}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveGrid;
