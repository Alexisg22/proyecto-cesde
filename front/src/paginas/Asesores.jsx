import React from 'react'
import { Encabezado } from '../componentes/Encabezado.jsx'
import "../estilos/Asesores.css"

export const Asesores = () => {
  return (
    <div>
        <Encabezado
            mostrarBotonSubirBD={false}
            mostrarBotonDescargarBD={false}
            mostrarBotonInicio={true}
         />
    </div>
  )
}
