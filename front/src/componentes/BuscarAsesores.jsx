import React, { useState } from 'react'
import { BotonVerde } from './BotonVerde'
import { Calendar } from 'lucide-react'

const BuscarAsesores = ({ onBuscar }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('')
  const [fecha, setFecha] = useState('')
  const [modalAbierto, setModalAbierto] = useState(false)

  const manejarCambioBusqueda = (e) => {
    setTerminoBusqueda(e.target.value)
  }

  const manejarCambioFecha = (e) => {
    setFecha(e.target.value)
  }

  const manejarBusqueda = () => {
    onBuscar({ terminoBusqueda, fecha })
    setModalAbierto(true)
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="flex-grow">
        <input
          type="search"
          placeholder="Id - Nombre"
          value={terminoBusqueda}
          onChange={manejarCambioBusqueda}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="relative">
        <input
          type="date"
          value={fecha}
          onChange={manejarCambioFecha}
          className="px-3 py-2 border rounded-md pr-10"
        />
        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <div>
        <BotonVerde
          setModalAbierto={setModalAbierto}
          modalAbierto={modalAbierto}
          modalBuscar={true}
          texto="Buscar"
          ide='botonVerde'
          onClick={manejarBusqueda}
        />
      </div>
    </div>
  )
}

export default BuscarAsesores