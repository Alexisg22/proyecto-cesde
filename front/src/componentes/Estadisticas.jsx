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
            
                <Estadistica id='estadistica1' label='estadistica 1' dato='dato 1'/>
                <Estadistica id='estadistica2' label='estadistica 2' dato='dato 2'/>
                <Estadistica id='estadistica3' label='estadistica 3' dato='dato 3'/>
                <Estadistica id='estadistica4' label='estadistica 4' dato='dato 4'/>
                <Estadistica id='estadistica5' label='estadistica 5' dato='dato 5'/>
                <Estadistica id='estadistica6' label='estadistica 6' dato='dato 6'/>
                <Estadistica id='estadistica7' label='estadistica 7' dato='dato 7'/>
                <Estadistica id='estadistica8' label='estadistica 8' dato='dato 8'/>
            </div>

        </section>
    </div>

    </>
    
  )
}

