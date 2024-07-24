import '../estilos/Estadistica.css'
import React from 'react'

export const Estadistica = ({label, id, dato}) => {
  return (
    <div className="estadistica">
          <label htmlFor={id} className='nombreEstadistica'><strong>{label}</strong></label>  
        <div className="parametro">
            <p>{dato}</p>  
        </div>
    </div>
  )
}
