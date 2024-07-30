import React, {useState} from 'react'
import "../estilos/Encabezado.css"
import { BotonVerde } from './BotonVerde.jsx'
import { ModalSubirBD } from './ModalSubirBD.jsx'

export const Encabezado = () => {
 
const [modalAbierto, setModalAbierto] =useState(false)

  return (
    <header>
    <div className='contenedorPrincipal'>
        <div className='contenedorLogoAndes'>
            <img id='logoAndes' src="../../public/imagenes/AndesBPO.png"/>
        </div>
        

        <div className='btnSubirBD'>
            <BotonVerde setModalAbierto={setModalAbierto} modalAbierto={modalAbierto} modalSubirBDs={true} texto={"Subir BD"} ide={'botonVerde'}/>
        </div>

        <div>
        <BotonVerde texto={"Descargar BD"} ide={'botonBlanco'}/>    
        </div>
            
    </div>

    <ModalSubirBD modalAbierto={modalAbierto} cerrarModal={() =>{setModalAbierto(false)}}/>

    </header>
  )
}
