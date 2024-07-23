import React from 'react'
import "../estilos/Encabezado.css"
import { BotonVerde } from './BotonVerde.jsx'
import { BotonBlanco } from './BotonBlanco.jsx'

export const Encabezado = () => {
  return (
    <header>
    <div className='contenedorPrincipal'>
        <div className='contenedorLogoAndes'>
            <img id='logoAndes' src="../../public/imagenes/AndesBPO.png"/>
        </div>
        
        <div className='buscador'>
        <span className="material-symbols-outlined">search</span>
        </div>

        <div>
            <BotonVerde texto="Subir BD"/>
        </div>

        <div>
            <BotonBlanco/>    
        </div>
            
    </div>
    </header>
  )
}
