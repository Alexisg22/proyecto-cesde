import React, { useState } from 'react'
import "../estilos/ModalSubirBD.css"
import { BotonVerde } from '../componentes/BotonVerde.jsx'

export const ModalSubirBD = ({modalAbierto}) => {
  
    if(!modalAbierto) return null

    return (
    <div>
        <header className='titulo'>
           <h2>Subir Base de Datos</h2> 
        </header>
        
            <div className='modalSubirBD'>
                <div className='contenedorBotones'>
                    <div>
                    <BotonVerde className='Boton' texto={'Base de Datos 1'}/>
                    </div>
                    <div>
                    <BotonVerde texto={'Base de Datos 2'}/>
                    </div>
                    <div>
                    <BotonVerde texto={'Base de Datos 3'}/>
                    </div>
                </div>
        </div>
    </div>
  )
}
