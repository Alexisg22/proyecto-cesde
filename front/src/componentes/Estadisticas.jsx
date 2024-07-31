import '../estilos/Estadisticas.css'
import '../estilos/Estadistica.css'
import { Estadistica } from './Estadistica.jsx'
import React from 'react'

export const Estadisticas = () => {
  return (
    <>
    <div className='contenedorEstadistica'>
        <section className='contenidoEstadistica'>

            <div className='titulo'>
                <h1>Estadisticas Generales</h1>
            </div>
            <div className='contenido'>
            
                <Estadistica id='contactabilidad' label='Contactabilidad' dato='contactabilidad'/>
                <Estadistica id='noContactabilidad' label='No contactabilidad' dato='noContactabilidad'/>
                <Estadistica id='porcentajeConversion' label='Porcentaje de conversion' dato='porcentajeConversion'/>
                <Estadistica id='cantidadMatriculas' label='Cantidad de matriculas' dato='cantidadMatriculas'/>
                <Estadistica id='cantidadLiquidaciones' label='Cantidad de liquidaciones' dato='cantidadLiquidaciones'/>
                <Estadistica id='enGestion' label='En gestion' dato='enGestion'/>
                <Estadistica id='sinGestion' label='Sin gestion' dato='sinGestion'/>
                <Estadistica id='matriculado' label='Matriculado' dato='matriculado'/>
                <Estadistica id='liquidacion' label='Liquidacion' dato='liquidacion'/>
                <Estadistica id='cancelado' label='Cancelados' dato='cancelado'/>
                <Estadistica id='noGestionable' label='No gestionable' dato='noGestionable'/>
               
            </div>

        </section>
    </div>

    </>
    
  )
}

