import React, { useEffect, useState } from 'react'
import { Encabezado } from '../componentes/Encabezado.jsx'
import { BarraLaterarl } from '../componentes/BarraLaterarl.jsx'
import { Estadisticas } from '../componentes/Estadisticas.jsx'
import Tabla from '../componentes/Tabla.jsx'
import "../estilos/Asesores.css"
import { obtenerEstadisticas} from "../api/estadisticas.api.js"

export const Principal = () => {
    const [procesoSelect, setProcesoSelect] = useState('general')
    const [barraLateralKey, setBarraLateralKey] = useState(0)
    const [tablaKey, setTablaKey] = useState(0)
    const [visibilidadColumna, setVisibilidadColumna] = useState({
        'celular': true,
        'nit': false,
        'nombreCompleto': true,
        'cantidadLlamadas': true,
        'cantWhatsapps': false,
        'cantGestiones': true,
        'mejorGestión': true,
        'estadoAspirante': true,
        'diasUltGestión': false,
        'fechaUltGestión': true,
        'gestiónFinal': true,
        'tipificaciónGestiónFinal': true,
        'sede': false,
        'programaFormación': false,
    });
    //este estado es el que guarda todas las estadisticas recibidas desde la api 
    const [estadisticas, setEstadisticas] = useState()

      // estos estados son los que controlan las fechas de las estadisticas
      const [fechaInicio, setFechaInicio] = useState('')
      const [fechaFin, setFechaFin] = useState('')


    useEffect(() =>{
          async function cargarEstadisticas() {

            let nuevoProceso = ''
          if(procesoSelect == 'tecnicos'){
            nuevoProceso = 'proceso-tecnicos/'
          }else if(procesoSelect == 'empresas'){
            nuevoProceso = 'proceso-empresa/'
          }else if(procesoSelect == 'extensiones'){
            nuevoProceso = 'proceso-extensiones/'
          }else{
            nuevoProceso = ''
          }

            const respuesta = await obtenerEstadisticas(nuevoProceso);

            

            const estadisticasGenerales = respuesta.data.estadisticas_generales
            const mapeado = {
              contactabilidad: estadisticasGenerales.contactabilidad.percentage.toFixed(2) + " %",
              noContactabilidad: estadisticasGenerales.no_contactabilidad.percentage.toFixed(2) + " %",
              // porcentajeConvercion: estadisticasGenerales.contactabilidad.percentage,
              cantidadMatriculas: estadisticasGenerales.estadisticas_basicas.find(e => e?.gestiones__estado__nombre?.toLowerCase() == 'matriculado')?.count || 0,
              cantidadLiquidaciones: estadisticasGenerales.estadisticas_basicas.find(e => e?.gestiones__estado__nombre?.toLowerCase() == 'liquidado')?.count || 0,
              enGestion: estadisticasGenerales.estadisticas_basicas.find(e => e?.gestiones__estado__nombre?.toLowerCase() == 'en gestión')?.count || 0,
              sinGestion: estadisticasGenerales.estadisticas_basicas.find(e => e?.gestiones__estado__nombre?.toLowerCase() == 'sin gestión')?.count || 0,
              matriculado: estadisticasGenerales.estadisticas_basicas.find(e => e?.gestiones__estado__nombre?.toLowerCase() == 'matriculado')?.count || 0,
              liquidacion: estadisticasGenerales.estadisticas_basicas.find(e => e?.gestiones__estado__nombre?.toLowerCase() == 'liquidado')?.count || 0,
              cancelados: 0,  // Puedes agregar lógica adicional para calcular cancelados si es necesario
              noGestionable: 0  // Puedes agregar lógica adicional para calcular noGestionable si es necesario
            };
            setEstadisticas(mapeado);
          }
          cargarEstadisticas();      
         
    }, [procesoSelect])

    
    const manejarCambioVisibilidadColumna = (nuevaVisibilidad) => {
        setVisibilidadColumna(nuevaVisibilidad);
    };

    useEffect(() => {
        if(procesoSelect === 'empresas' || procesoSelect === 'general'){
            setVisibilidadColumna(prevState => ({
                ...prevState,
                'nitEmpresa': false // Inicialmente no visible
            }));
        } else {
            const { nitEmpresa, ...restVisibilidad } = visibilidadColumna;
            setVisibilidadColumna(restVisibilidad);
        }
    }, [procesoSelect])

  useEffect(() => {
      setBarraLateralKey(prevKey => prevKey + 1)
      setTablaKey(prevKey => prevKey + 1)
  }, [visibilidadColumna])


  return (
    <>
        <Encabezado 
        mostrarBotonSubirBD={true}
        mostrarBotonInicio={false}
        textoEncabezado={'Aspirantes'}
        ide={'aspirantes'}
        vista={'aspirantesFiltro'}
        setProcesoSelect={setProcesoSelect}
        />
    <main className="contenedorPrincipal">
      <BarraLaterarl 
      key={barraLateralKey}
      onCambioVisibilidadColumna={manejarCambioVisibilidadColumna} 
      visibilidadInicial={visibilidadColumna} 
      procesoSelect={procesoSelect}
      />
      <div className="contenedorSecundario">
        <Tabla key={tablaKey}
        visibilidadColumna={visibilidadColumna}
        procesoSelect={procesoSelect}  
        />
        <Estadisticas
        estadisticas={estadisticas}
        fechaInicio={fechaInicio}
        fechaFin={fechaFin}
        setFechaInicio={setFechaInicio}
        setFechaFin={setFechaFin}
        tituloEstadisticas={procesoSelect}
         />
      </div>
    </main>
    </>
  )
}

export default Principal