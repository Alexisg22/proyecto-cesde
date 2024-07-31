import React from 'react'
import "../estilos/BotonVerde.css"
import { ModalFiltrar } from '../componentes/ModalFiltrar.jsx'

export const BotonVerde = ({setModalAbierto, modalAbierto, texto, ide}) => {

  return (
    <div>
        {(ModalFiltrar) ? <button onClick={()=>{setModalAbierto(!modalAbierto)}} className={ide}>{texto}</button> 
        : <button className='botonVerde'>{texto}</button>}
    </div>

  )
}
