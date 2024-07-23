import React, { useState } from 'react'

export const CheckboxBarraLateral = ({id, value, label, chequeado}) => {

    const [chequeo, setChequeo] = useState(chequeado)

  return (
        <div>
            {(chequeo) ? <input  className='checkboxBarraLateral' onClick={() => {setChequeo(false)}} type="checkbox" id={id} value={value} checked /> : <input className='checkboxBarraLateral' type="checkbox" id={id} value={value} />}
          <label className='labelBarraLateral' htmlFor={id}>{label}</label>
        </div>
    )
}
