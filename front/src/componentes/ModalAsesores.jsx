import React, { useState } from 'react'
import "../estilos/ModalAsesores.css"

export const ModalAsesores = ({modalAbierto}) => {
    
    
    if(!modalAbierto) return null

  return (

    <div className='cotenedorModal'>
        <div className='modalAsesores'>
            <div>
                <h2>ModalAsesores</h2>
                <input type="search" />
                <button>Cerrar modal</button>
            </div>
        </div>

    </div>
   

  )
}
