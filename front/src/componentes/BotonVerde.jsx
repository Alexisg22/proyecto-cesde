import React from 'react'
import "../estilos/BotonVerde.css"
import { ModalAsesores } from '../componentes/ModalAsesores.jsx'

export const BotonVerde = ({setModalAbierto, modalAbierto, texto}) => {

  return (
    <div>
        {(ModalAsesores) ? <button onClick={()=>{setModalAbierto(!modalAbierto)}} className='botonVerde'>{texto}</button> 
        : <button className='botonVerde'>{texto}</button>}
    </div>
  )
}
