import { Estadistica } from './Estadistica.jsx';
import React, { useEffect, useState } from 'react';
import '../estilos/Estadistica.css';
import '../estilos/Estadisticas.css';


export const Estadisticas = ({estadisticas, fechaInicio, fechaFin, setFechaInicio, setFechaFin, tituloEstadisticas}) => {

  const hoy = new Date().toISOString().split('T')[0];
      
    if(!estadisticas){
      return
    }
      
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
                <h1 className='tituloEstadisticas'>Estadísticas {tituloEstadisticas}</h1>
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
                <Estadistica id='cantidadMatriculas' label='Cantidad de matrículas' dato={estadisticas.cantidadMatriculas} />
                <Estadistica id='cantidadLiquidaciones' label='Cantidad de liquidaciones' dato={estadisticas.cantidadLiquidaciones} />
                <Estadistica id='enGestion' label='En gestión' dato={estadisticas.enGestion} />
                <Estadistica id='sinGestion' label='Sin gestión' dato={estadisticas.sinGestion} />  
                <Estadistica id='cancelado' label='Descartados' dato={estadisticas.cancelados} />
                <Estadistica id='tiempoLlamada' label='Tiempo promedio Llamada (Min)' dato={estadisticas.tiempoLlamada} />
                <Estadistica id='tiempoWhatsApp' label='Tiempo promedio WhatsApp (Min)' dato={estadisticas.tiempoWhatsApp}/>
                <Estadistica id='enSeleccionTotal' label='En proceso de selección' dato={estadisticas.en_seleccion_total}/>
            </div>

        </section>
    </div>

    </>
    
  )
}