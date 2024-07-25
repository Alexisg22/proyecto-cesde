import React, { useState } from 'react'

export const CheckboxBarraLateral = ({id, value, label, chequeado, onChange}) => {
  return (
    <div>
      <input 
        type="checkbox" 
        id={id} 
        value={value} 
        checked={chequeado}
        onChange={onChange}
      />
      <label className='labelBarraLateral' htmlFor={id}>{label}</label>
    </div>
  )
}
