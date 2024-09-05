import React from 'react'
import '../estilos/BotonNavegar.css'

export const BotonNavegar = ({ide, onClick, texto}) => {
  return (
    <div>
        <button className={ide} onClick={onClick}>
            {texto}
        </button>
    </div>
  )
}
