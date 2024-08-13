import React, { useEffect, useState } from 'react';
import { obtenerTipificaciones } from '../api/aspirantes.api';
import { obtenerEmpresas } from '../api/empresa.api';
import { obtenerProgramasFormacion } from '../api/programa.api';
import { obtenerSedes } from '../api/sede.api';
import { obtenerEstados } from '../api/estados.api';
export function validarTipoInput({ seleccionOpcion, cambioValorInput, valorGestionTotal }) {
  const hoy = new Date().toISOString().split('T')[0];
  
  // Estado para almacenar las tipificaciones desde la API
  const [tipificaciones, setTipificaciones] = useState([]);
  const [estados, setEstados] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  const [programas, setProgramas] = useState([]);
  const [sedes, setSedes] = useState([]);

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

  useEffect(() => {
    async function cargarEstados() {
      try {
        const respuesta = await obtenerEstados();
        setEstados(respuesta.data); // Actualiza el estado con los datos de la API
      } catch (error) {
        console.error("Error al cargar los estados:", error);
      }
    }
    cargarEstados();
  }, []);

  useEffect(() => {
    async function cargarEmpresas() {
      try {
        const respuesta = await obtenerEmpresas();
        setEmpresas(respuesta.data); // Actualiza el estado con los datos de la API
      } catch (error) {
        console.error("Error al cargar las Empresas:", error);
      }
    }
    cargarEmpresas();
  }, []);

  useEffect(() => {
    async function cargarProgramas() {
      try {
        const respuesta = await obtenerProgramasFormacion();
        setProgramas(respuesta.data); // Actualiza el estado con los datos de la API
      } catch (error) {
        console.error("Error al cargar los programas:", error);
      }
    }
    cargarProgramas();
  }, []);

  useEffect(() => {
    async function cargarSedes() {
      try {
        const respuesta = await obtenerSedes();
        setSedes(respuesta.data); // Actualiza el estado con los datos de la API
      } catch (error) {
        console.error("Error al cargar las Sedes:", error);
      }
    }
    cargarSedes();
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
            <option key={index} value={tipificacion.nombre}>
              {tipificacion.nombre}
            </option>
          ))}
        </select>
      );

    case "estado del aspirante":
      return (
        <select className="campoFiltro" onChange={cambioValorInput} required>
          <option value="">Seleccione el estado</option>
          {estados.map((estado, index) => (
            <option key={index} value={estado.nombre}>
              {estado.nombre}
            </option>
          ))}
        </select>
      );

    case "tipificación ultima gestion":
      return (
        <select className="campoFiltro" onChange={cambioValorInput} required>
          <option value="">Seleccione tipificación</option>
          {tipificaciones.map((tipificacion, index) => (
            <option key={index} value={tipificacion.nombre}>
              {tipificacion.nombre}
            </option>
          ))}
        </select>
      );

    case "programa de formacion":
      return (
        <select className="campoFiltro" onChange={cambioValorInput} required>
          <option value="">Seleccione Programas</option>
          {programas.map((programa, index) => (
            <option key={index} value={programa.nombre}>
              {programa.nombre}
            </option>
          ))}
        </select>
      );

    case "sede":
      return (
        <select className="campoFiltro" onChange={cambioValorInput} required>
          <option value="">Seleccione Sede</option>
          {sedes.map((sede, index) => (
            <option key={index} value={sede.nombre}>
              {sede.nombre}
            </option>
          ))}
        </select>
      );

    case "empresa":
      return (
        <select className="campoFiltro" onChange={cambioValorInput} required>
          <option value="">Seleccione Empresa</option>
          {empresas.map((empresa, index) => (
            <option key={index} value={empresa.nit}>
              {empresa.nit}
            </option>
          ))}
        </select>
      );

    default:
      return null;
  }
}

export const ParametroFiltrar = ({ seleccionOpcion, cambioValorInput, valorGestionTotal }) => {
  return (
    <>
      {seleccionOpcion && validarTipoInput({ seleccionOpcion, cambioValorInput, valorGestionTotal })}
    </>
  );
}
