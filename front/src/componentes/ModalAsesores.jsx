import React, { useState } from 'react'
import "../estilos/ModalAsesores.css"

export const ModalAsesores = ({cerrarModal, modalAbierto}) => {
    
    
    if(!modalAbierto) return null

  return (

    <div className='cotenedorModal'>
        <div className='modalAsesores'>
            <div className="tituloModalAsesor">
                <h2>ModalAsesores</h2>
                <button onClick={cerrarModal}>Cerrar modal</button>
            </div>
            <div className='buscadorAsesores' >
               <input type="search" />
            </div>
        </div>

    </div>
   
 
   
  )
}
