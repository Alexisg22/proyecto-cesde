import React from 'react'
import "../estilos/BotonVerde.css"
import { ModalAsesores } from '../componentes/ModalAsesores.jsx'

export const BotonVerde = ({setModalAbierto, modalAbierto, texto, ide}) => {

  return (
    <div>
        {(ModalAsesores) ? <button onClick={()=>{setModalAbierto(!modalAbierto)}} className={ide}>{texto}</button> 
        : <button className='botonVerde'>{texto}</button>}
    </div>
  )
}
