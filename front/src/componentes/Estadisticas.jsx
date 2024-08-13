import { Estadistica } from './Estadistica.jsx';
import React, { useEffect, useState } from 'react';
import { obtenerEstadisticasGenerales } from '../api/aspirantes.api.js';
import '../estilos/Estadistica.css';
import '../estilos/Estadisticas.css';


export const Estadisticas = ({estadisticas}) => {

  const hoy = new Date().toISOString().split('T')[0];

  // const [estadisticas, setEstadisticas] = useState([]);
  
  
  // useEffect(()=>{
  //     async function cargarEstadisticas() {
  //         const respuesta = await obtenerEstadisticasGenerales();
  //         setEstadisticas (respuesta.data)
      
  //         console.log(respuesta.data);
      
  //       }
  //       cargarEstadisticas();
  //     },[])
      
      if(!estadisticas){
        return
      }
      const [fechaInicio, setFechaInicio] = useState('')
      const [fechaFin, setFechaFin] = useState('')


  const manejarCambioFechaInicio = (e) => {
    setFechaInicio(e.target.value)
  }

  const manejarCambioFechaFin = (e) => {
    setFechaFin(e.target.value)
  }
  return (
    <>
    <div className='contenedorEstadistica'>
        <section className='contenidoEstadistica'>

            <div className='titulo'>
                <h1 className='tituloEstadisticas'>Estadísticas Generales</h1>
                <div className="formularioFecha">
          
                  <div className="contenedorFechasEstadisticas">
                    <div className="contenedorFechaIndividual">
                      <input
                        type="date"
                        value={fechaInicio}
                        onChange={manejarCambioFechaInicio}
                        className="fechaEntrada"
                        max={hoy}
                      />
                    </div>
                    <span className="separadorFechas">a</span>
                    <div className="contenedorFechaIndividual">
                      <input
                      type="date"
                      value={fechaFin}
                      onChange={manejarCambioFechaFin}
                      className="fechaEntrada"
                      max={hoy}
                    />
                    </div>
                  </div> 
                </div>
                </div>
            

            <div className='contenido'>

            
                <Estadistica id='contactabilidad' label='Contactabilidad' dato={estadisticas.contactabilidad} />
                <Estadistica id='noContactabilidad' label='No contactabilidad' dato={estadisticas.noContactabilidad} />
                <Estadistica id='porcentajeConversion' label='Porcentaje de conversión' dato={estadisticas.porcentajeConvercion} />
                <Estadistica id='cantidadMatriculas' label='Cantidad de matrículas' dato={estadisticas.cantidadMatriculas} />
                <Estadistica id='cantidadLiquidaciones' label='Cantidad de liquidaciones' dato={estadisticas.cantidadLiquidaciones} />
                <Estadistica id='enGestion' label='En gestión' dato={estadisticas.enGestion} />
                <Estadistica id='sinGestion' label='Sin gestión' dato={estadisticas.sinGestion} />
                <Estadistica id='matriculado' label='Matriculado' dato={estadisticas.matriculado} />
                <Estadistica id='liquidacion' label='Liquidación' dato={estadisticas.liquidacion} />
                <Estadistica id='cancelado' label='Cancelados' dato={estadisticas.cancelados} />
                <Estadistica id='noGestionable' label='No gestionable' dato={estadisticas.noGestionable} />
               
            </div>

        </section>
    </div>

    </>
    
  )
}