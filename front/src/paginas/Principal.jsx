import React, { useEffect, useState } from 'react'
import { Encabezado } from '../componentes/Encabezado.jsx'
import { BarraLaterarl } from '../componentes/BarraLaterarl.jsx'
import { Estadisticas } from '../componentes/Estadisticas.jsx'
import Tabla from '../componentes/Tabla.jsx'
import "../estilos/Asesores.css"
import { Paginador } from '../componentes/Paginador.jsx'

export const Principal = () => {

    const [visibilidadColumna, setVisibilidadColumna] = useState([{
        // 'celular': true,
        // 'nit': false,
        // 'nombreCompleto': true,
        // 'cantLlamadas': true,
        // 'cantMensajesDeTexto': false,
        // 'cantWhatsapps': false,
        // 'cantGestiones': true,
        // 'mejorGestión': true,
        // 'estadoAspirante': true,
        // 'diasHábilesUltGestión': false,
        // 'fechaUltGestión': true,
        // 'tipificaciónUltGestión': true,
        // 'celularAdicional': false,
        // 'sede': false,
        // 'programaFormación': false,
      }]);
    
      const manejarCambioVisibilidadColumna = (nuevaVisibilidad) => {
        setVisibilidadColumna(nuevaVisibilidad);
      };
      
      // *************************************
      const [procesoSelect, setProcesoSelect] = useState('')
      // if (procesoSelect == 'empresas') {
      //   setVisibilidadColumna([...visibilidadColumna, {'empresa': true}])
      // }
      useEffect(() => {
        if (procesoSelect === 'empresas') {
          setVisibilidadColumna({  'celular': true,
            'nit': false,
            'nombreCompleto': true,
            'cantLlamadas': true,
            'cantMensajesDeTexto': false,
            'cantWhatsapps': false,
            'cantGestiones': true,
            'mejorGestión': true,
            'estadoAspirante': true,
            'diasHábilesUltGestión': false,
            'fechaUltGestión': true,
            'tipificaciónUltGestión': true,
            'celularAdicional': false,
            'sede': false,
            'programaFormación': false,});
        }
      }, [procesoSelect]);

      // ****************************************
  return (
    <div>
        <Encabezado 
        setProcesoSelect={setProcesoSelect}
        mostrarBotonSubirBD={true}
        mostrarBotonDescargarBD={true}
        mostrarBotonInicio={false}
        textoEncabezado={'Aspirantes'}
        ide={'aspirantes'}
        vista={'aspirantesFiltro'}
        />
    <main className="contenedorPrincipal">
      <BarraLaterarl  onCambioVisibilidadColumna={manejarCambioVisibilidadColumna} visibilidadInicial={visibilidadColumna} />
      <div className="contenedorSecundario">
        <Tabla visibilidadColumna={visibilidadColumna}  />
        <Estadisticas />
      </div>
    </main>
    </div>
  )
}

export default Principal