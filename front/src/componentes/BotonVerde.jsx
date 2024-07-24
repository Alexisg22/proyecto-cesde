import React from 'react'
import "../estilos/BotonVerde.css"
import { ModalSubirBD } from '../componentes/ModalSubirBD.jsx'
import { ModalAsesores } from '../componentes/ModalAsesores.jsx'

export const BotonVerde = ({setModalAbierto, modalAbierto, texto}) => {

  return (
    <div>
        {(ModalSubirBD) ? <button onClick={()=>{setModalAbierto(!modalAbierto)}} className='botonVerde'>{texto}</button> 
        : <button className='botonVerde'>{texto}</button>}
    </div>
  )
}
