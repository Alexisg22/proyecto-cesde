import React, { useState } from 'react';
import { BotonNavegar } from '../componentes/BotonNavegar';
import { useNavigate } from 'react-router-dom';
import '../estilos/Registro.css';
import { ModalAspiranteSinGestiones } from '../componentes/ModalAspiranteSinGestiones';
import axios from 'axios';

const Registro = () => {
  const [abrirModalAspiranteSinGesiones, setAbrirModalAspiranteSinGesiones] = useState(false);
  const [textoModal, setTextoModal] = useState('');
  const [inputUsuario, setInputUsuario] = useState('');
  const [inputContraseña, setInputContraseña] = useState('');

  const navigate = useNavigate();

  async function datosIngreso() {
    try {
      const url = 'http://localhost:8000/login/';
      const body = {
        'username': inputUsuario,
        'password': inputContraseña
      };

      const response = await axios.post(url, body);
      const token = response.data.token;
      localStorage.setItem('token', token);
      return { token }; // Devuelve el token si la solicitud es exitosa
    } catch (e) {
      if (e.response) {
        // Accede a la data dentro de la respuesta de error
        const error = e.response.data.error || e.response.data.detail;
        console.log(e);
        
        return { error };
      } else if (e.request) {
        // Errores que ocurren cuando no hay respuesta del servidor
        return { error: 'No se pudo establecer una conexión con el servidor.' };
      } else {
        // Errores que ocurren antes de enviar la solicitud
        return { error: 'Ocurrió un error al intentar enviar la solicitud.' };
      }
    }
  };

  async function manejarClicBotonInicio() {
    const { token, error } = await datosIngreso();

    if (token) {
      navigate('/inicio'); // Navega a /inicio si el token es válido
    } else if (inputUsuario.length === 0 && inputContraseña.length === 0) {
      setAbrirModalAspiranteSinGesiones(true);
      setTextoModal('Llena ambos campos');
    } else if (inputUsuario.length === 0) {
      setAbrirModalAspiranteSinGesiones(true);
      setTextoModal('Llena el campo de Usuario');
    } else if (inputContraseña.length === 0) {
      setAbrirModalAspiranteSinGesiones(true);
      setTextoModal('Llena el campo Contraseña');
    } else if (error) {
      console.log(error); // Muestra el error en la consola para depuración
      setAbrirModalAspiranteSinGesiones(true);
      setTextoModal(error); // Muestra el error específico en el modal
    }
  }

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <div className="welcome-section">
            <img src='/imagenes/Nosotros.jpg' alt="Imagen de bienvenida" />
          </div>
          <div className="login-section">
            <h1 className='titulo'>¡Bienvenidos!</h1>
            <h2>Iniciar Sesión</h2>

            <div className="input-container">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Usuario"
                onChange={(e) => setInputUsuario(e.target.value)}
              />
            </div>

            <div className="input-container">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setInputContraseña(e.target.value)}
              />
            </div>

            <BotonNavegar
              onClick={manejarClicBotonInicio}
              texto={'Ingresar'}
              ide={'button-container'}
            />
          </div>
        </div>
        <ModalAspiranteSinGestiones
          abrirModalAspiranteSinGesiones={abrirModalAspiranteSinGesiones}
          texto={textoModal}
          cerrarModal={() => { setAbrirModalAspiranteSinGesiones(false); }}
        />
      </div>
    </div>
  );
};

export default Registro;
