import React from 'react'
import '../estilos/BarraLateral.css'
import { CheckboxBarraLateral } from './CheckboxBarraLateral'
import { BotonVerde } from './BotonVerde'

export const BarraLaterarl = () => {

  const chequeado = true

  return (
    // el aside debe tener 22 de vw
    <aside className='barraLateral'>
      <h1 className='tituloBarraNavegacion'>Datos aspirantes</h1>
      <form className='formularioCheckbox' action="" method=''>
        <div>
          <input type="checkbox" id="cboxCelular " value="celular" checked />
          <label className='labelBarraLateral' htmlFor="cboxCelular">Celular</label>
        </div>
 
        <CheckboxBarraLateral id="cboxNit" value="nit" label="Nit" />
        
        <div>
          <input  type="checkbox" id="cboxNombre" value="nombreCompleto" checked />
          <label className='labelBarraLateral' htmlFor="cboxNombre">Nombre completo</label>
        </div>

        <CheckboxBarraLateral id="cboxCantLlamadas" value="cantLlamadas" label="Cantidad llamadas" chequeado={chequeado} />

        <CheckboxBarraLateral id="cboxCantSMS" value="cantSMS" label="Cantidad SMS" />

        <CheckboxBarraLateral id="cboxCantWhatsApps" value="cantWhatsApps" label="Cantidad WhatsApps" />

        <CheckboxBarraLateral id="cboxCantGestiones" value="cantGestiones" label="Cantidad Gestiones" chequeado={chequeado} />

        <CheckboxBarraLateral id="cboxMejorGestion" value="mejorGestion" label="Mejor Gestión" chequeado={chequeado} />

        <CheckboxBarraLateral id="cboxEstadoAspirante" value="estadoAspirante" label="Estado del aspirante" chequeado={chequeado} />

        <CheckboxBarraLateral id="cboxDiasUltimaGestion" value="diasUltimaGestion" label="Días habiles última gestión" />

        <CheckboxBarraLateral id="cboxFechaUltimaGestion" value="fehaUltimaGestion" label="Fecha última gestión" chequeado={chequeado} />

        <CheckboxBarraLateral id="cboxEstadoUltimaGestion" value="estadoUltimaGestion" label="Estado última gestión" chequeado={chequeado} />

        <CheckboxBarraLateral id="cboxCelAdicional1" value="celAdicional1" label="Celular aicional 1" />
 
      </form>
      <hr className='hrBarraNavegaion'/>
      <div className='btnAsesores'>
        <BotonVerde texto = {'Asesores'}/>  
      </div>
      
    </aside>
  )
}
