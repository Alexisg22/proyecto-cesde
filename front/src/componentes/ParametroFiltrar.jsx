import React, { } from 'react'

export function validarTipoInput({ seleccionOpcion, cambioValorInput }) {
    switch (seleccionOpcion) {
      case "dias ultima gestion":
      case "cantidad gestiones":
      case "cantidad llamadas":
      case "cantidad SMS":
      case "cantidad whatsapp":
        return <input className="campoFiltro" type="number" onChange={cambioValorInput} />;
      
      case "fecha de gestion":
      case "fecha ultima gestion":
        return <input className="campoFiltro" type="date" onChange={cambioValorInput} />;
      
      case "mejor gestion":
        return (
          <select className="campoFiltro" onChange={cambioValorInput}>
            <option value="">Seleccione mejor gestion</option>
            <option value="mejor gestion 1">mejor gestion 1</option>
            <option value="mejor gestion 2">mejor gestion 2</option>
            <option value="mejor gestion 3">mejor gestion 3</option>
            <option value="mejor gestion 4">mejor gestion 4</option>
            <option value="mejor gestion 5">mejor gestion 5</option>
          </select>
        );
  
      case "estado del aspirante":
        return (
          <select className="campoFiltro" onChange={cambioValorInput}>
            <option value="">Seleccione el estado</option>
            <option value="matriculado">Matriculado</option>
            <option value="liquidado">Liquidado</option>
            <option value="desistio">Desistió</option>
            <option value="en gestion">En gestion</option>
            <option value="sin gestion">Sin gestion</option>
            <option value="no gestionable">No gestionable</option>
          </select>
        );
  
      case "estado ultima gestion":
        return (
          <select className="campoFiltro" onChange={cambioValorInput}>
            <option value="">Seleccione estado</option>
            <option value="Estado ultima gestion 1">Estado ultima gestion 1</option>
            <option value="Estado ultima gestion 2">Estado ultima gestion 2</option>
            <option value="Estado ultima gestion 3">Estado ultima gestion 3</option>
            <option value="Estado ultima gestion 4">Estado ultima gestion 4</option>
            <option value="Estado ultima gestion 5">Estado ultima gestion 5</option>
            <option value="Estado ultima gestion 6">Estado ultima gestion 6</option>
          </select>
        );
  
      case "programa de formacion":
        return (
          <select className="campoFiltro" onChange={cambioValorInput}>
            <option value="">Seleccione programa formacion</option>
            <option value="tecnico">Tecnico</option>
            <option value="tecnologo profesional">Tecnologo profesional</option>
          </select>
        );
  
      case "cede":
        return (
          <select className="campoFiltro" onChange={cambioValorInput}>
            <option value="">Seleccione la cede</option>
            <option value="principal">principal</option>
            <option value="bogota">Bogota</option>
            <option value="medellin">Medellin</option>
            <option value="rionegro">Rionegro</option>
          </select>
        );
  
      case "empresa":
        return (
          <select className="campoFiltro" onChange={cambioValorInput}>
            <option value="">Seleccione la empresa</option>
            <option value="nit empresa 1">nit empresa 1</option>
            <option value="nit empresa 2">nit empresa 2</option>
            <option value="nit empresa 3">nit empresa 3</option>
            <option value="nit empresa 4">nit empresa 4</option>
          </select>
        );
  
      default:
        return null;
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
