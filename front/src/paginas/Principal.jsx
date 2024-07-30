import React, { useState } from 'react'
import { Encabezado } from '../componentes/Encabezado.jsx'
import { BarraLaterarl } from '../componentes/BarraLaterarl.jsx'
import { Estadisticas } from '../componentes/Estadisticas.jsx'
import Tabla from '../componentes/Tabla.jsx'
import "../estilos/Asesores.css"

export const Principal = () => {

    const [visibilidadColumna, setVisibilidadColumna] = useState({
        'celular': true,
        'nit': false,
        'nombreCompleto': true,
        'cantLlamadas': true,
        'cantMensajesDeTexto': false,
        'cantWhatsapps': false,
        'cantGestiones': true,
        'mejorGestion': true,
        'estadoAspirante': true,
        'diasHabilesUlt.Gestion': false,
        'fechaUltGestion': true,
        'estadoUltGestion': true,
        'celularAdicional': false,
        'empresa': false,
        'sede': false,
        'programaFormacion': false,

      });
    
      const manejarCambioVisibilidadColumna = (nuevaVisibilidad) => {
        setVisibilidadColumna(nuevaVisibilidad);
      };

  return (
    <div>
        <Encabezado />
    <main className="contenedorPrincipal">
      <BarraLaterarl onCambioVisibilidadColumna={manejarCambioVisibilidadColumna} visibilidadInicial={visibilidadColumna} />
      <div className="contenedorSecundario">
        <Tabla visibilidadColumna={visibilidadColumna} />
        <Estadisticas />
      </div>
    </main>
    </div>
  )
}
