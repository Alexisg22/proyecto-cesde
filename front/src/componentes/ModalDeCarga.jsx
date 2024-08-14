import React from 'react'
import '../estilos/ModalDeCarga.css'

const ModalDeCarga = ({ modalAbierto }) => {

    if (!modalAbierto) return null;

    return (
        <div className="modal-overlay">
        <div className="modal-content">
          <div className="spinner"></div>
          <p>Cargando...</p>
        </div>
      </div>
  )
}

export default ModalDeCarga
