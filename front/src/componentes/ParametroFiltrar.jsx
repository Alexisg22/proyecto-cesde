import React, { } from 'react'

export function validarTipoInput({seleccionOpcion, cambioValorInput}){
    if(seleccionOpcion == "dias ultima gestion" || seleccionOpcion == "cantidad gestiones" || seleccionOpcion == "cantidad llamadas" || seleccionOpcion == "cantidad SMS" || seleccionOpcion == "cantidad  whatsapp" ){
        return <input className="campoFiltro" type="number" onChange={cambioValorInput} /> 
        }else {
            if(seleccionOpcion == "fecha de gestion" || seleccionOpcion == "fecha ultima gestion" ){
                return <input className="campoFiltro" type="date" onChange={cambioValorInput} /> 
            }else{
                if(seleccionOpcion == "mejor gestion"){
                    return <select className="campoFiltro" name="" id="" onChange={cambioValorInput}>
                        <option value="">mejor gestion 1</option>
                        <option value="">mejor gestion 2</option>
                        <option value="">mejor gestion 3</option>
                        <option value="">mejor gestion 4</option>
                        <option value="">mejor gestion 5</option>
                    </select>
                }else{
                    if(seleccionOpcion == "estado"){
                        return <select className="campoFiltro" name="" id="" onChange={cambioValorInput}>
                            <option value="">Matriculado</option>
                            <option value="">Liquidado</option>
                            <option value="">Desistió</option>
                            <option value="">En gestion</option>
                            <option value="">Sin gestion</option>
                            <option value="">No gestionable</option>
                        </select>
                    }
                }
            }
        }
} 

export const ParametroFiltrar = ({seleccionOpcion, cambioValorInput}) => {
  return (
    <>
    {
       seleccionOpcion && validarTipoInput({seleccionOpcion, cambioValorInput})
    }
    </>
    
  )
}
