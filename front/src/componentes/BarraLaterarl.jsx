import React, { useState, useEffect } from 'react'
import '../estilos/BarraLateral.css'
import { CheckboxBarraLateral } from './CheckboxBarraLateral'
import { useNavigate } from 'react-router-dom';
import { BotonNavegar } from './BotonNavegar.jsx'
import { BotonVerde } from './BotonVerde.jsx';
import { ModalAgregarTipoficacion } from './ModalAgregarTipificacion.jsx';

// Componente principal BarraLateral
export const BarraLaterarl = ({ onCambioVisibilidadColumna, visibilidadInicial, procesoSelect }) => {

  // useNavigate se utiliza para la navegación entre páginas
  const navigate = useNavigate();

  // Estado que almacena la visibilidad de las columnas, inicializado con visibilidadInicial
  const [visibilidadColumna, setVisibilidadColumna] = useState(visibilidadInicial)

  // Estado para controlar si todas las columnas están seleccionadas o no
  const [todoSeleccionado, setTodoSeleccionado] = useState(false)

  // useEffect que se ejecuta cada vez que cambia visibilidadColumna
  // Verifica si todas las columnas están seleccionadas para actualizar todoSeleccionado
  useEffect(() => {
    const todasSeleccionadas = Object.values(visibilidadColumna).every(value => value)
    setTodoSeleccionado(todasSeleccionadas)
  }, [visibilidadColumna])

  // Función que maneja el cambio de estado de un checkbox individual
  const manejarCambioCasillaVerificacion = (id) => {
    setVisibilidadColumna(prev => {
      const nuevaVisibilidad = { ...prev, [id]: !prev[id] }; // Alterna el valor booleano de la columna seleccionada
      onCambioVisibilidadColumna(nuevaVisibilidad); // Llama a la función prop para notificar el cambio de visibilidad
      return nuevaVisibilidad;
    });
  };

  // Función que maneja la selección o deselección de todas las columnas
  const manejarSeleccionarTodo = () => {
    const nuevoEstado = !todoSeleccionado; // Invierte el estado de todoSeleccionado
    const nuevaVisibilidad = Object.keys(visibilidadColumna).reduce((acc, key) => {
      acc[key] = nuevoEstado; // Asigna el nuevo estado (seleccionado/deseleccionado) a todas las columnas
      return acc;
    }, {});
    setVisibilidadColumna(nuevaVisibilidad); // Actualiza el estado de visibilidad de las columnas
    onCambioVisibilidadColumna(nuevaVisibilidad); // Notifica el cambio de visibilidad
    setTodoSeleccionado(nuevoEstado); // Actualiza el estado de selección total
  };

  // Función que maneja el clic en el botón de Asesores para navegar a la página correspondiente
  const manejarClicBotonAsesores = () => {
    navigate('/asesores');
  };

  // Estado para controlar la apertura y cierre del modal de "Agregar Tipificación"
  const [modalAbierto, setModalAbierto] = useState(false)

  return (
    <>
      {/* Contenedor principal de la barra lateral */}
      <aside className='barraLateral'>
        <h1 className='tituloBarraNavegacion'>Datos aspirantes</h1>

        {/* Formulario que contiene los checkboxes */}
        <form className='formularioCheckbox'>
          {/* Checkbox para seleccionar o deseleccionar todas las columnas */}
          <CheckboxBarraLateral
            id="seleccionarTodo"
            value="seleccionarTodo"
            label="Seleccionar todo"
            chequeado={todoSeleccionado} // Estado de selección total
            onChange={manejarSeleccionarTodo} // Función que maneja el cambio de selección total
          />

          {/* Genera un checkbox para cada columna, excepto "Nit de empresa" si no es aplicable */}
          {Object.entries(visibilidadColumna).map(([key, value]) => (
            (key !== 'nitEmpresa' || procesoSelect === 'empresas' || procesoSelect === 'general') && (
              <CheckboxBarraLateral
                key={key}
                id={key}
                value={key}
                // Muestra el nombre de la columna con formato adecuado
                label={key === 'nitEmpresa' ? 'Nit de empresa' : key.replace(/([A-Z])/g, ' $1').replace(/^./g, str => str.toUpperCase())}
                chequeado={value} // Estado de visibilidad de la columna
                onChange={() => manejarCambioCasillaVerificacion(key)} // Función que maneja el cambio de estado de la columna
              />
            )
          ))}
        </form>

        {/* Línea horizontal separadora */}
        <hr className='hrBarraNavegaion' />

        {/* Botones para navegar a la página de Asesores o abrir el modal */}
        <div className='btnAsesores'>
          <BotonNavegar
            onClick={manejarClicBotonAsesores} // Función que navega a la página de Asesores
            texto={'Asesores'} // Texto del botón
            ide={'botonAsesores'} // ID del botón
          />

          <BotonVerde
            texto={'Agregar nueva tipificación'} // Texto del botón
            ide={'botonAsesores'} // ID del botón
            setModalAbierto={setModalAbierto} // Función para abrir el modal
            modalAbierto={modalAbierto} // Estado del modal
          />
        </div>
      </aside>

      {/* Modal para agregar una nueva tipificación, se abre o cierra según el estado modalAbierto */}
      <ModalAgregarTipoficacion
        modalAbierto={modalAbierto} // Estado de apertura del modal
        cerrarModal={() => { setModalAbierto(false) }} // Función para cerrar el modal
      />
    </>
  )
}
