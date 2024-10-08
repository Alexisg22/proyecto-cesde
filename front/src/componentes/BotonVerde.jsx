import React from 'react'
import "../estilos/BotonVerde.css"
import { ModalFiltrar } from '../componentes/ModalFiltrar.jsx'

export const BotonVerde = ({setModalAbierto, modalAbierto, texto, ide,ocultarModalCargando}) => {

  return (
    <div>
        {(ModalFiltrar) ? <button onClick={()=>{setModalAbierto(!modalAbierto); ocultarModalCargando()}} className={ide}>{texto}</button> 
        : <button onClick={()=>{setModalAbierto(!modalAbierto)}} className='botonVerde'>{texto}</button>}
    </div>

  )
}
