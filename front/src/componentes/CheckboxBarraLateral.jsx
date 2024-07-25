import React, { useState } from 'react'
import Tabla from './Tabla'

export const CheckboxBarraLateral = ({id, value, label, chequeado}) => {

    const [chequeo, setChequeo] = useState(chequeado)

    // se hace un renderizado condicional, para ostrar los input ya chequeados al mandar 
  return (
        <div>
            {(chequeo) ? <input onClick={() => {setChequeo(false)}} type="checkbox" id={id} value={value} checked /> 
            : <input onClick={() => {setChequeo(true)}} type="checkbox" id={id} value={value} />}
          <label className='labelBarraLateral' htmlFor={id}>{label}</label>
        </div>
        
    )
}
