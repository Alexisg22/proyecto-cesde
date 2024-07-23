import React from 'react'
import "../estilos/BotonVerde.css"

export const BotonVerde = ({texto}) => {
  return (
    <div>
        <button className='botonVerde'>{texto}</button>
    </div>
  )
}
