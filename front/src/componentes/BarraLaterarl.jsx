import React, { useState, useEffect } from 'react'
import '../estilos/BarraLateral.css'
import { CheckboxBarraLateral } from './CheckboxBarraLateral'
import { useNavigate } from 'react-router-dom';
import { BotonNavegar } from './BotonNavegar.jsx'

export const BarraLaterarl = ({ onCambioVisibilidadColumna, visibilidadInicial, procesoSelect }) => {
  const navigate = useNavigate();
  const [visibilidadColumna, setVisibilidadColumna] = useState(visibilidadInicial)
  const [todoSeleccionado, setTodoSeleccionado] = useState(false)

  useEffect(() => {
    const todasSeleccionadas = Object.values(visibilidadColumna).every(value => value)
    setTodoSeleccionado(todasSeleccionadas)
  }, [visibilidadColumna])

  const manejarCambioCasillaVerificacion = (id) => {
    setVisibilidadColumna(prev => {
      const nuevaVisibilidad = { ...prev, [id]: !prev[id] };
      onCambioVisibilidadColumna(nuevaVisibilidad);
      return nuevaVisibilidad;
    });
  };

  const manejarSeleccionarTodo = () => {
    const nuevoEstado = !todoSeleccionado
    const nuevaVisibilidad = Object.keys(visibilidadColumna).reduce((acc, key) => {
      acc[key] = nuevoEstado;
      return acc;
    }, {});
    setVisibilidadColumna(nuevaVisibilidad);
    onCambioVisibilidadColumna(nuevaVisibilidad);
    setTodoSeleccionado(nuevoEstado);
  };

  const manejarClicBotonAsesores = () => {
    navigate('/asesores');
  };
  
  return (
    <aside className='barraLateral'>
      <h1 className='tituloBarraNavegacion'>Datos aspirantes</h1>
      <form className='formularioCheckbox'>
        <CheckboxBarraLateral
          id="seleccionarTodo"
          value="seleccionarTodo"
          label="Seleccionar todo"
          chequeado={todoSeleccionado}
          onChange={manejarSeleccionarTodo}
        />
        {Object.entries(visibilidadColumna).map(([key, value]) => (
          (key !== 'nitEmpresa' || procesoSelect === 'empresas' ||  procesoSelect === 'general' ) && (
            <CheckboxBarraLateral
              key={key}
              id={key}
              value={key}
              label={key === 'nitEmpresa' ? 'Nit de empresa' : key.replace(/([A-Z])/g, ' $1').replace(/^./g, str => str.toUpperCase())}
              chequeado={value}
              onChange={() => manejarCambioCasillaVerificacion(key)}
            />
          )
        ))}
      </form>
      <hr className='hrBarraNavegaion'/>
      <div className='btnAsesores'>
        <BotonNavegar
          onClick={manejarClicBotonAsesores}
          texto={'Asesores'}
          ide={'botonAsesores'}
        />
      </div>
    </aside>
  )
}