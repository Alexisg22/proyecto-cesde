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
                <h1>Estadísticas Generales</h1>
            </div>
            <div className='contenido'>
            
                <Estadistica id='contactabilidad' label='Contactabilidad' dato='20'/>
                <Estadistica id='noContactabilidad' label='No contactabilidad' dato='10'/>
                <Estadistica id='porcentajeConversion' label='Porcentaje de conversión' dato='25'/>
                <Estadistica id='cantidadMatriculas' label='Cantidad de matrículas' dato='50'/>
                <Estadistica id='cantidadLiquidaciones' label='Cantidad de liquidaciones' dato='100'/>
                <Estadistica id='enGestion' label='En gestión' dato='150'/>
                <Estadistica id='sinGestion' label='Sin gestión' dato='30'/>
                <Estadistica id='matriculado' label='Matriculado' dato='90'/>
                <Estadistica id='liquidacion' label='Liquidación' dato='11'/>
                <Estadistica id='cancelado' label='Cancelados' dato='5'/>
                <Estadistica id='noGestionable' label='No gestionable' dato='16'/>
               
            </div>

        </section>
    </div>

    </>
    
  )
}

