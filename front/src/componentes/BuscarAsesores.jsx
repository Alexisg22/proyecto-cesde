import React, { useState } from 'react'
import "../estilos/BuscarAsesores.css"

const BuscarAsesores = ({ onBuscar }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('')
  const [fechaInicio, setFechaInicio] = useState('')
  const [fechaFin, setFechaFin] = useState('')

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
              onChange={manejarCambioFechaInicio}
              className="fechaEntrada"
            />
          </div>
          <span className="separadorFechas">a</span>
          <div className="contenedorFechaIndividual">
            <input
              type="date"
              value={fechaFin}
              onChange={manejarCambioFechaFin}
              className="fechaEntrada"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuscarAsesores
