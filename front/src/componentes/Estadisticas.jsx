import { Estadistica } from './Estadistica.jsx';
import React, { useEffect, useState } from 'react';
import '../estilos/Estadistica.css';
import '../estilos/Estadisticas.css';


export const Estadisticas = ({estadisticas, fechaInicio, fechaFin, mesEstadisticas, setMesEstadisticas, setFechaInicio, setFechaFin, tituloEstadisticas}) => {

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

  const manejarCambioMes = (e) => {
    setMesEstadisticas(e.target.value)
  }
  
  return (
    <>
    <div className='contenedorEstadistica'>
        <section className='contenidoEstadistica'>
            <div className='titulo'>
                <p><strong>Contactabilidad: {estadisticas.contactabilidad}</strong></p>
                <p><strong>No Contactabilidad: {estadisticas.noContactabilidad}</strong></p>
                <h1 className='tituloEstadisticas'>Estadísticas {tituloEstadisticas}</h1>
                <div className='contenedorSelectMes'>
                      <form>
                        <p>Mes de ingreso</p>
                        <select className='filtroMes' value={mesEstadisticas} onChange={manejarCambioMes} >
                          <option value="Mes">Mes</option>
                          <option value="Enero">Enero</option>
                          <option value="Febrero">Febrero</option>
                          <option value="Marzo">Marzo</option>
                          <option value="Abril">Abril</option>             
                          <option value="Mayo">Mayo</option>             
                          <option value="Junio">Junio</option>             
                          <option value="Julio">Julio</option>             
                          <option value="Agosto">Agosto</option>             
                          <option value="Septiembre">Septiembre</option>             
                          <option value="Octubre">Octubre</option>             
                          <option value="Noviembre">Noviembre</option>             
                          <option value="Diciembre">Diciembre</option>             
                        </select>
                      </form>
                    </div>
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
                <Estadistica id='cantidadMatriculas' label='Matriculados' dato={estadisticas.cantidadMatriculas} />
                <Estadistica id='cantidadLiquidaciones' label='Liquidados' dato={estadisticas.cantidadLiquidaciones} />
                <Estadistica id='enSeguimento' label='En Seguimiento' dato={estadisticas.enSeguimiento} />
                <Estadistica id='enGestion' label='En gestión' dato={estadisticas.enGestion} />
                <Estadistica id='sinGestion' label='Por Gestionar' dato={estadisticas.sinGestion} /> 
                <Estadistica id='descartados' label='Descartados' dato={estadisticas.descartados} />
                <Estadistica id='cancelados' label='Cancelados' dato={estadisticas.cancelados} />
                <Estadistica id='anulados' label='Anulados' dato={estadisticas.anulados} />
                <Estadistica id='nuevoInteres' label='Nuevo Interés' dato={estadisticas.nuevoInteres} />
                <Estadistica id='noContactados' label='No Contactados' dato={estadisticas.noContactados} />
                <Estadistica id='enSeleccionTotal' label='En proceso de selección' dato={estadisticas.enSeleccionTotal}/>
                <Estadistica id='tiempoLlamada' label='Tiempo promedio Llamada (Min)' dato={estadisticas.tiempoLlamada} />
                <Estadistica id='tiempoWhatsApp' label='Tiempo promedio WhatsApp (Min)' dato={estadisticas.tiempoWhatsApp}/>
                <Estadistica id='totalAspirantes' label='Total Aspirantes' dato={estadisticas.totalAspirantes}/>
            </div>

        </section>
    </div>

    </>
    
  )
}