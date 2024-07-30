import React from 'react'
import { Encabezado } from '../componentes/Encabezado.jsx'
import "../estilos/Asesores.css"
import BuscarAsesores from '../componentes/BuscarAsesores.jsx'
import TablaAsesores from '../componentes/TablaAsesores.jsx'

export const Asesores = () => {
  return (
    <div>
        <div>
          <Encabezado
            mostrarBotonSubirBD={false}
            mostrarBotonDescargarBD={false}
            mostrarBotonInicio={true}
          />
        </div>
        
        <div>
          <BuscarAsesores/>
        </div>
         

        <div>
          <TablaAsesores/>
        </div>
         
    </div>
  )
}
