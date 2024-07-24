import React, {useState} from 'react'
import "../estilos/Encabezado.css"
import { BotonVerde } from './BotonVerde.jsx'
import { BotonBlanco } from './BotonBlanco.jsx'
import { ModalSubirBD } from './ModalSubirBD.jsx'

export const Encabezado = () => {
 
const [modalAbierto, setModalAbierto] =
useState(false)

  return (
    <header>
    <div className='contenedorPrincipal'>
        <div className='contenedorLogoAndes'>
            <img id='logoAndes' src="../../public/imagenes/AndesBPO.png"/>
        </div>
        
        <div>
          <input type="search" className='buscador' placeholder="Buscar Datos..." />
        </div>

        <div className='btnSubirBD'>
            <BotonVerde setModalAbierto={setModalAbierto} modalAbierto={modalAbierto} modalSubirBDs={true} texto="Subir BD"/>
        </div>

        <div>
            <BotonBlanco/>    
        </div>
            
    </div>

    <ModalSubirBD modalAbierto={modalAbierto}/>

    </header>
  )
}
