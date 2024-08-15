import React, { useState } from 'react'
import "../estilos/BuscarAsesores.css"
import { CSVLink } from "react-csv";
import TablaAsesores from './TablaAsesores';

const BuscarAsesores = ({ onBuscar, datos, encabezados, fechaInicio, fechaFin, setFechaInicio, setFechaFin, setBuscarUnAsesor }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('')


  const hoy = new Date().toISOString().split('T')[0];

    const handleInputChange = (e) => {
      const valor = e.target.value;
      setBuscarUnAsesor(valor); // Actualiza el estado en el componente padre
      console.log(valor);
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
      <form className="formularioBuscarAsesores" >
        <div className="contenedorEntradaBusqueda">
          <input type="search" placeholder="Id - Nombre" onChange={handleInputChange} id='valor' />
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
      </form>
      <CSVLink className="descargar" data={datos} headers={encabezados} filename="Asesores.csv">Exportar a CSV</CSVLink>

    </div>
  )
}

export default BuscarAsesores
