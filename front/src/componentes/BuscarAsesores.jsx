import React, { useState } from 'react'
import "../estilos/BuscarAsesores.css"
import { CSVLink } from "react-csv";

const BuscarAsesores = ({ onBuscar, datos, encabezados }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('')
  const [fechaInicio, setFechaInicio] = useState('')
  const [fechaFin, setFechaFin] = useState('')
  const hoy = new Date().toISOString().split('T')[0];

  const manejarCambioBusqueda = (e) => {
    setTerminoBusqueda(e.target.value)
  }

  const manejarCambioFechaInicio = (e) => {
    setFechaInicio(e.target.value)
  }

  const manejarCambioFechaFin = (e) => {
    setFechaFin(e.target.value)
  }

  const manejarBusqueda = () => {
    onBuscar({ terminoBusqueda, fechaInicio, fechaFin })
  }

  return (
    <div className="contenedorBuscarAsesores">
      <div className="formularioBuscarAsesores">
        <div className="contenedorEntradaBusqueda">
          <input type="search" placeholder="Id - Nombre" />
          <button className="botonBuscar">Buscar</button>
        </div>
        <div className="contenedorFechas">
          <div className="contenedorFechaIndividual">
            <input
              type="date"
              value={fechaInicio}
              max={hoy}
              onChange={manejarCambioFechaInicio}
              className="fechaEntrada"
            />
          </div>
          <span className="separadorFechas">a</span>
          <div className="contenedorFechaIndividual">
            <input
              type="date"
              value={fechaFin}
              max={hoy}
              onChange={manejarCambioFechaFin}
              className="fechaEntrada"
            />
          </div>
        </div> 
      </div>
      <CSVLink className="descargar" data={datos} headers={encabezados} filename="Asesores.csv">Exportar a CSV</CSVLink>
    </div>
  )
}

export default BuscarAsesores
