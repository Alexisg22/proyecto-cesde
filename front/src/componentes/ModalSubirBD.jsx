import React, { useState } from 'react'
import "../estilos/ModalSubirBD.css"

export const ModalSubirBD = ({modalAbierto}) => {
  
    if(!modalAbierto) return null

    return (
    <div className='contenedorSubirBD'>
        <div className='modalSubirBD'>
            <div>
                <h2>Subir Base de Datos</h2>
                <button>Cerrar modal</button>
            </div>
        </div>
    </div>
  )
}
