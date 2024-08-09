import React, { useEffect, useState } from 'react';
import { obtenerTipificaciones } from '../api/aspirantes.api';

// Función que valida el tipo de input que debe renderizarse basado en la opción seleccionada
export function validarTipoInput({ seleccionOpcion, cambioValorInput, valorGestionTotal }) {
  const hoy = new Date().toISOString().split('T')[0];
  
  // Estado para almacenar las tipificaciones desde la API
  const [tipificaciones, setTipificaciones] = useState([]);

  useEffect(() => {
    async function cargarTipificaciones() {
      try {
        const respuesta = await obtenerTipificaciones();
        setTipificaciones(respuesta.data); // Actualiza el estado con los datos de la API
      } catch (error) {
        console.error("Error al cargar las tipificaciones:", error);
      }
    }
    cargarTipificaciones();
  }, []);

  switch (seleccionOpcion) {
    case "dias ultima gestion":
    case "cantidad llamadas":
    case "cantidad whatsapp":
      return <input className="campoFiltro" type="number" onChange={cambioValorInput} max={999} min={0} required />;
      
    case "cantidad gestiones":
      return <input className="campoFiltro" type="number" onChange={cambioValorInput} max={999} min={valorGestionTotal} required />;

    case "fecha de gestion":
    case "fecha ultima gestion":
      return <input className="campoFiltro" type="date" onChange={cambioValorInput} max={hoy} required />;
      
    case "mejor gestion":
      return (
        <select className="campoFiltro" onChange={cambioValorInput} required>
          <option value="">Seleccione mejor gestión</option>
          {tipificaciones.map((tipificacion, index) => (
            <option key={tipificacion.id || index} value={tipificacion.nombre}>
              {tipificacion.nombre}
            </option>
          ))}
        </select>
      );

    case "estado del aspirante":
      return (
        <select className="campoFiltro" onChange={cambioValorInput} required>
          <option value="">Seleccione el estado</option>
          <option value="matriculado">Matriculado</option>
          <option value="liquidado">Liquidado</option>
          <option value="desistio">Desistió</option>
          <option value="en gestion">En gestión</option>
          <option value="sin gestion">Sin gestión</option>
          <option value="no gestionable">No gestionable</option>
        </select>
      );

    case "tipificación ultima gestion":
      return (
        <select className="campoFiltro" onChange={cambioValorInput} required>
          <option value="">Seleccione tipificación</option>
          {tipificaciones.map((tipificacion, index) => (
            <option key={tipificacion.id || index} value={tipificacion.nombre}>
              {tipificacion.nombre}
            </option>
          ))}
        </select>
      );

    case "programa de formacion":
      return (
        <select className="campoFiltro" onChange={cambioValorInput} required>
          <option value="">Seleccione programa formación</option>
          <option value="tecnico">Técnico</option>
          <option value="tecnologo profesional">Tecnólogo profesional</option>
        </select>
      );

    case "sede":
      return (
        <select className="campoFiltro" onChange={cambioValorInput} required>
          <option value="">Seleccione la sede</option>
          <option value="principal">Sede principal</option>
          <option value="bogota">Bogotá</option>
          <option value="medellin">Medellín</option>
          <option value="rionegro">Rionegro</option>
        </select>
      );

    case "empresa":
      return (
        <select className="campoFiltro" onChange={cambioValorInput} required>
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

// Componente que envuelve la lógica de validación y renderiza el input correspondiente
export const ParametroFiltrar = ({ seleccionOpcion, cambioValorInput, valorGestionTotal }) => {
  return (
    <>
      {seleccionOpcion && validarTipoInput({ seleccionOpcion, cambioValorInput, valorGestionTotal })}
    </>
  );
}
