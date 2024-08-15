import React, { useEffect, useState } from 'react';
import { Encabezado } from "../componentes/Encabezado.jsx";
import BuscarAsesores from "../componentes/BuscarAsesores.jsx";
import TablaAsesores from "../componentes/TablaAsesores.jsx";
import "../estilos/Asesores.css";
import { consultarAsesores, consultarAsesoresFecha, consultarUnAsesor } from '../api/asesores.api.js';


export const Asesores = () => {

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

  // State para guardar los asesores obtenidos de la API
  const [asesores, setAsesores] = useState([]);
  
//estado para almacenar las fechas de inicio y de fin de los asesores
  const [fechaInicio, setFechaInicio] = useState('')
  const [fechaFin, setFechaFin] = useState('')
  const [buscarUnAsesor, setBuscarUnAsesor] = useState('') 

  

  useEffect(() => {

    if(buscarUnAsesor != 0 ){
      
      async function cargarAsesoress() {
        try {
        const respuesta = await consultarUnAsesor(buscarUnAsesor);
        const asesores = respuesta.data;
        
  
        const mapeado = asesores.map((asesor) => ( {
          idWolkvox: asesor.id,
          nombreCompleto: asesor.nombre_completo,
          cantLlamadas: asesor.cantidad_llamadas,
          cantWhatsapps: asesor.cantidad_whatsapp,
          cantGestiones: asesor.cantidad_gestiones,
          cantMatriculas: asesor.cantidad_matriculas,
          cantLiquidaciones: asesor.cantidad_liquidaciones,
        }));
       
        setAsesores(mapeado)
      }catch (error) {
        
        {<h1>{'Error no se encuentra el asesor'}</h1>}
         
      }
        /*console.log([asesores]);*/
      }
      cargarAsesoress();

    }
    

    else if(fechaFin != '' && fechaInicio != ''){
      async function cargarAsesores() {
        const respuesta = await consultarAsesoresFecha(fechaInicio, fechaFin);
        const asesores = respuesta.data;
        console.log(asesores);
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
    
    }else if(asesores.length < 1){
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
    
  }, [fechaFin, buscarUnAsesor])

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
              setBuscarUnAsesor={setBuscarUnAsesor}
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