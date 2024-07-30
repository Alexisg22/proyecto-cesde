import React, { useState } from 'react'
import { BotonVerde } from './BotonVerde'
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
    <div className="contenedor-buscar-asesores">
      <div className="formulario-buscar-asesores">
        <div className="contenedor-entrada-busqueda">
          <input
            type="search"
            placeholder="Id - Nombre"
            value={terminoBusqueda}
            onChange={manejarCambioBusqueda}
            className="entrada-busqueda"
          />
        </div>
        <div className="contenedor-fechas">
          <div className="contenedor-fecha-individual">
            <input
              type="date"
              value={fechaInicio}
              onChange={manejarCambioFechaInicio}
              className="entrada-fecha"
            />
          </div>
          <span className="separador-fechas">a</span>
          <div className="contenedor-fecha-individual">
            <input
              type="date"
              value={fechaFin}
              onChange={manejarCambioFechaFin}
              className="entrada-fecha"
            />
          </div>
        </div>
        <button
          onClick={manejarBusqueda}
          className="boton-buscar"
        >
          Buscar
        </button>
      </div>
    </div>
  )
}

export default BuscarAsesores
