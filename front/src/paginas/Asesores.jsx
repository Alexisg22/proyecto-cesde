import React, { useEffect, useState } from 'react';
import { Encabezado } from "../componentes/Encabezado.jsx";
import BuscarAsesores from "../componentes/BuscarAsesores.jsx";
import TablaAsesores from "../componentes/TablaAsesores.jsx";
import "../estilos/Asesores.css";
import { consultarAsesores, consultarAsesoresFecha } from '../api/asesores.api.js';

const columnas = [
  { id: 'idWolkvox', etiqueta: 'Id Wolkvox' },
  { id: 'nombreCompleto', etiqueta: 'Nombre Completo' },
  { id: 'cantLlamadas', etiqueta: 'Cant. Llamadas' },
  { id: 'cantWhatsapps', etiqueta: 'Cant. WhatsApps' },
  { id: 'cantGestiones', etiqueta: 'Cant. Gestiones' },
  { id: 'cantMatriculas', etiqueta: 'Cant. Matrículas' },
  { id: 'cantLiquidaciones', etiqueta: 'Cant. Liquidaciones' },
];

const encabezados = columnas.map(columna => ({
  label: columna.etiqueta,
  key: columna.id
}));

export const Asesores = () => {

  // State para guardar los asesores obtenidos de la API
const [asesores, setAsesores] = useState([]);

//estado para almacenar las fechas de inicio y de fin de los asesores
  const [fechaInicio, setFechaInicio] = useState('')
  const [fechaFin, setFechaFin] = useState('')

  

  useEffect(() => {
    if(fechaFin != '' && fechaInicio != ''){
      async function cargarAsesores() {
        const respuesta = await consultarAsesoresFecha(fechaInicio, fechaFin);
        const asesores = respuesta.data;
  
        const mapeado = asesores.map((asesor) => ({
  
          idWolkvox: asesor.id,
          nombreCompleto: asesor.nombre_completo,
          cantLlamadas: asesor.cantidad_llamadas,
          cantWhatsapps: asesor.cantidad_whatsapp,
          cantGestiones: asesor.cantidad_gestiones,
          cantMatriculas: asesor.cantidad_matriculas,
          cantLiquidaciones: asesor.cantidad_liquidaciones,
        }))
        
        setAsesores(mapeado)
      }
      cargarAsesores();
    
    }else{
      async function cargarAsesores() {

        const respuesta = await consultarAsesores();
        const asesores = respuesta.data;
  
        const mapeado = asesores.map((asesor) => ({
  
          idWolkvox: asesor.id,
          nombreCompleto: asesor.nombre_completo,
          cantLlamadas: asesor.cantidad_llamadas,
          cantWhatsapps: asesor.cantidad_whatsapp,
          cantGestiones: asesor.cantidad_gestiones,
          cantMatriculas: asesor.cantidad_matriculas,
          cantLiquidaciones: asesor.cantidad_liquidaciones,
        }))
        
        setAsesores(mapeado)
      }
      cargarAsesores();

    }
    
    (console.log("render"))
  }, [fechaFin])

  return (
    <div className="asesoresMain">
      <div className="asesoresEncabezado">
        <Encabezado
          mostrarBotonInicio={true}
          textoEncabezado={'Asesores'}
          ide={'asesores'}
          vista={'asesoresFiltro'}
        />
      </div>

      <hr />
      <div className="asesoresContenedor">
        <div>
          <div className="asesoresBuscador">
            <BuscarAsesores 
              datos={asesores}
              encabezados={encabezados}
              setFechaInicio={setFechaInicio}
              setFechaFin={setFechaFin}
            />
          </div>
        </div>
        
        <div className="asesoresTabla">
          <TablaAsesores 
          columnasTabla={columnas}
          datosTabla={asesores}
          />
        </div>

      </div>
    </div>
  );
};