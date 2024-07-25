import React, { useState } from 'react'
import '../estilos/BarraLateral.css'
import { CheckboxBarraLateral } from './CheckboxBarraLateral'
import { BotonVerde } from './BotonVerde'
import { ModalAsesores } from './ModalAsesores'

export const BarraLaterarl = ({ onCambioVisibilidadColumna, visibilidadInicial }) => {
  const [visibilidadColumna, setVisibilidadColumna] = useState(visibilidadInicial)
  const [modalAbierto, setModalAbierto] = useState(false)

  const manejarCambioCasillaVerificacion = (id) => {
    setVisibilidadColumna(prev => {
      const nuevaVisibilidad = { ...prev, [id]: !prev[id] };
      onCambioVisibilidadColumna(nuevaVisibilidad);
      return nuevaVisibilidad;
    });
  };

  return (
    <aside className='barraLateral'>
      <h1 className='tituloBarraNavegacion'>Datos aspirantes</h1>
      <form className='formularioCheckbox'>
        {Object.entries(visibilidadColumna).map(([key, value]) => (
          <CheckboxBarraLateral
            key={key}
            id={key}
            value={key}
            label={key.replace(/([A-Z])/g, ' $1').replace(/^./g, str => str.toUpperCase())}
            chequeado={value}
            onChange={() => manejarCambioCasillaVerificacion(key)}
          />
        ))}
      </form>
      <hr className='hrBarraNavegaion'/>
      <div className='btnAsesores'>
        <BotonVerde
          ide={'botonGrande'} 
          setModalAbierto={setModalAbierto} 
          modalAbierto={modalAbierto} 
          modalAsesores={true} 
          texto={'Asesores'}
        />
      </div>
      <ModalAsesores 
        modalAbierto={modalAbierto} 
        cerrarModal={() => setModalAbierto(false)}
      />
    </aside>
  )
}