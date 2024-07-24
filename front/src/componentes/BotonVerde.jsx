import React from 'react'
import "../componentes/ModalAsesores.jsx"
import "../estilos/BotonVerde.css"

export const BotonVerde = ({setModalAbierto, modalAbierto, texto, modalAsesores}) => {

  return (
    <div>
        {(modalAsesores) ? <button onClick={()=>{setModalAbierto(!modalAbierto)}} className='botonVerde'>{texto}2222</button> 
        : <button className='botonVerde'>{texto}</button>}
    </div>
  )
}
