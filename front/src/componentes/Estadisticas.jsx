import '../estilos/Estadisticas.css'
import '../estilos/Estadistica.css'
import { Estadistica } from './Estadistica.jsx'
import React from 'react'

export const Estadisticas = ({ estadisticas}) => {
  if(!estadisticas){
    return
  }
  return (
    <>
    <div className='contenedorEstadistica'>
        <section className='contenidoEstadistica'>

            <div className='titulo'>
                <h1>Estadísticas Generales</h1>
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