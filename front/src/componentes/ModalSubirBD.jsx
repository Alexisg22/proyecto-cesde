import React, { useState } from 'react'
import "../estilos/ModalSubirBD.css"
import { BotonVerde } from '../componentes/BotonVerde.jsx'

export const ModalSubirBD = ({modalAbierto}) => {
  
    if(!modalAbierto) return null

    return (
    <div> 
            <div className='modalSubirBD'>
                <h2>Subir Base de Datos</h2>
                <div className='contenedorBotones'>
                    <div>
                    <BotonVerde className='boton' texto={'Base de Datos 1'}/>
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
