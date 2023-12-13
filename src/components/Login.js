import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
  const [rut, setRut] = useState('');

  const handleInputChange = (event) => {
    setRut(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías añadir la lógica de validación o la llamada a la API para iniciar sesión
    console.log('RUT ingresado:', rut);
    // Enviar el RUT al backend para validar la sesión
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="rut">RUT:</label>
        <input
          type="text"
          id="rut"
          name="rut"
          value={rut}
          onChange={handleInputChange}
          placeholder="Ingresa tu RUT"
          required
        />
        <button type="submit" className="login-button">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
