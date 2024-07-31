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
            <option value="Sin interés">Sin interés</option>
            <option value="Información General">Información general</option>
            <option value="Interesado en seguimiento">Interesado en seguimiento</option>
            <option value="Sin tipificar">Sin tipificar</option>
            <option value="Sin tiempo">Sin tiempo</option>
            <option value="Volver a llamar">Volver a llamar</option>
            <option value="En proceso de selección">En proceso de selección</option>
            <option value="Motivos económicos">Motivos económicos</option>
            <option value="Primer intento de contacto">Primer intento de contacto</option>
            <option value="Segundo intento de contacto">Segundo intento de contacto</option>
            <option value="Tercer intento de contacto">Tercer intento de contacto</option>
            <option value="Cliente en seguimiento">Cliente en seguimiento</option>
            <option value="Se remite a otras areas">Se remite a otras areas</option>
            <option value="Liquidación">Liquidación</option>
            <option value="Sin perfil">Sin perfil</option>
            <option value="Cuelga teléfono">Cuelga teléfono</option>
            <option value="Estudiando en otra universidad">Estudiando en otra universidad</option>
            <option value="Proxima convocatoria">Proxima convocatoria</option>
            <option value="Por ubicación">Por ubicación</option>
            <option value="Matriculado">Matriculado</option>
            <option value="Otra área de interés">Otra área de interés</option>
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
  
      case "tipificación ultima gestion":
        return (
          <select className="campoFiltro" onChange={cambioValorInput}>
            <option value="">Seleccione tipificación</option>
            <option value="Sin interes">Sin interes</option>
            <option value="Información General">Información general</option>
            <option value="Interesado en seguimiento">Interesado en seguimiento</option>
            <option value="Sin tipificar">Sin tipificar</option>
            <option value="Sin tiempo">Sin tiempo</option>
            <option value="Volver a llamar">Volver a llamar</option>
            <option value="En proceso de selección">En proceso de selección</option>
            <option value="Motivos económicos">Motivos económicos</option>
            <option value="Primer intento de contacto">Primer intento de contacto</option>
            <option value="Segundo intento de contacto">Segundo intento de contacto</option>
            <option value="Tercer intento de contacto">Tercer intento de contacto</option>
            <option value="Cliente en seguimiento">Cliente en seguimiento</option>
            <option value="Se remite a otras areas">Se remite a otras areas</option>
            <option value="Liquidación">Liquidación</option>
            <option value="Sin perfil">Sin perfil</option>
            <option value="Cuelga teléfono">Cuelga teléfono</option>
            <option value="Estudiando en otra universidad">Estudiando en otra universidad</option>
            <option value="Proxima convocatoria">Proxima convocatoria</option>
            <option value="Por ubicación">Por ubicación</option>
            <option value="Matriculado">Matriculado</option>
            <option value="Otra área de interés">Otra área de interés</option>
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
  
      case "sede":
        return (
          <select className="campoFiltro" onChange={cambioValorInput}>
            <option value="">Seleccione la sede</option>
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
