import React, { useEffect, useState, Suspense, lazy } from "react";
import { Encabezado } from "../componentes/Encabezado.jsx";
import { BarraLaterarl } from "../componentes/BarraLaterarl.jsx";
import { Estadisticas } from "../componentes/Estadisticas.jsx";
// import Tabla from "../componentes/Tabla.jsx";
import "../estilos/Asesores.css";
import { obtenerEstadisticas } from "../api/estadisticas.api.js";
const Tabla = lazy (() => import("../componentes/Tabla.jsx"));
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

export const Principal = () => {

  const token = localStorage.getItem('token'); // Obtén el token del localStorage
  const navigate = useNavigate(); // Inicializa el hook useNavigate
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    if (!token) {
      navigate('/'); // Redirige al inicio o a la página de login si no hay token
    } else {
      setIsLoading(false); // Establece isLoading en false cuando el token esté presente
    }
  }, [token, navigate]);

  const [procesoSelect, setProcesoSelect] = useState("general");
  const [barraLateralKey, setBarraLateralKey] = useState(0);
  const [tablaKey, setTablaKey] = useState(0);
  const [visibilidadColumna, setVisibilidadColumna] = useState({
    celular: true,
    nit: false,
    nombreCompleto: true,
    correo: true,
    cantidadLlamadas: true,
    cantWhatsapps: false,
    cantGestiones: true,
    mejorGestión: true,
    estadoUltimaGestion: true,
    diasUltGestión: false,
    fechaUltGestión: true,
    gestiónFinal: true,
    tipificacionUltimaGestion: true,
    sede: false,
    programaFormación: false,
    mesIngreso: false,
    fechaModificacion: false
  });
  //este estado es el que guarda todas las estadisticas recibidas desde la api
  const [estadisticas, setEstadisticas] = useState();

  // estos estados son los que controlan las fechas de las estadisticas
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [modalOculto, setModalOculto] = useState(false);
  const [modalOcultoSubirBD, setModalOcultoSubirBD] = useState(false)

  useEffect(() =>{
    setFechaInicio('')
    setFechaFin('')
  },[procesoSelect])

  useEffect(() => {
    async function cargarEstadisticas() {
      // console.log('render')

      //evaluo si existe la fecha incio y la fech fin que viene desde estadisticas
      let nuevoProceso = "";
      let proceso = "";
      if (fechaInicio != "" && fechaFin != "") {
        if (procesoSelect == "tecnicos") {
          nuevoProceso = `fechas/?fecha_inicio=${fechaInicio}&fecha_fin=${fechaFin}&proceso_nombre=técnicos`;
        } else if (procesoSelect == "empresas") {
          nuevoProceso = `fechas/?fecha_inicio=${fechaInicio}&fecha_fin=${fechaFin}&proceso_nombre=empresas`;
        } else if (procesoSelect == "extensiones") {
          nuevoProceso = `fechas/?fecha_inicio=${fechaInicio}&fecha_fin=${fechaFin}&proceso_nombre=extenciones`;
        } else {
          nuevoProceso = `fechas/?fecha_inicio=${fechaInicio}&fecha_fin=${fechaFin}&proceso_nombre`;
        }

        const respuesta = await obtenerEstadisticas(nuevoProceso);

        const estadisticasGenerales = respuesta.data.estadisticas_por_fechas;

        const contactabilidad = respuesta.data.contactabilidad;
        
        const promedioLlamada = respuesta.data.promedio_tiempo_llamada;

        const promedioWhatsApp = respuesta.data.promedio_tiempo_whatsapp;
        
        const mapeado = {
          contactabilidad:
            contactabilidad.contactabilidad.percentage.toFixed(2) + " %",
          noContactabilidad:
            contactabilidad.no_contactabilidad.percentage.toFixed(2) + " %",
            cantidadMatriculas:
            estadisticasGenerales.estadisticas.find(
              (e) =>
                e?.estado__nombre?.toLowerCase() == "matriculado"
            )?.count || 0,
          cantidadLiquidaciones:
            estadisticasGenerales.estadisticas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "liquidado"
            )?.count || 0,
          enSeguimiento:
            estadisticasGenerales.estadisticas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "en seguimiento"
            )?.count || 0,
          sinGestion:
            estadisticasGenerales.estadisticas.find(
              (e) =>
                e?.estado__nombre?.toLowerCase() == "por gestionar"
            )?.count || 0,
          descartados:
            estadisticasGenerales.estadisticas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "descartado"
            )?.count || 0,
          noContactados:
            estadisticasGenerales.estadisticas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "no contactado"
            )?.count || 0,
          anulados:
            estadisticasGenerales.estadisticas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "anulado"
            )?.count || 0,
          nuevoInteres:
            estadisticasGenerales.estadisticas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "nuevo interes"
            )?.count || 0,
          enGestion:
            estadisticasGenerales.estadisticas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "en gestión"
            )?.count || 0,
          cancelados:
            estadisticasGenerales.estadisticas.find(
              (e) =>
                e?.estado__nombre?.toLowerCase() === "cancelado"
            )?.count || 0, // Puedes agregar lógica adicional para calcular cancelados si es necesario
          enSeleccionTotal:
            estadisticasGenerales.estadisticas.find(
              (e) =>
                e?.estado__nombre?.toLowerCase() === "en proceso de selección"
            )?.count || 0, // Puedes agregar lógica adicional para calcular cancelados si es necesario
          tiempoLlamada: promedioLlamada,
          tiempoWhatsApp:promedioWhatsApp,
          totalAspirantes: estadisticasGenerales.total_aspirantes
          // Puedes agregar lógica adicional para calcular noGestionable si es necesario
        };

        setEstadisticas(mapeado);
      } else {
        if (procesoSelect == "tecnicos") {
          nuevoProceso = "proceso-técnicos/";
          proceso = "tecnicos"
        } else if (procesoSelect == "empresas") {
          nuevoProceso = "proceso-empresa/";
          proceso = "empresa"
        } else if (procesoSelect == "extensiones") {
          nuevoProceso = "proceso-extenciones/";
          proceso = "extenciones"
        } else {
          nuevoProceso = "";
          proceso = "generales"
        }

        const respuesta = await obtenerEstadisticas(nuevoProceso);
        const estadisticasGenerales = respuesta.data[`estadisticas_${proceso}`];
        const mapeado = {
          contactabilidad:
            estadisticasGenerales.contactabilidad.percentage.toFixed(2) + " %",
          noContactabilidad:
            estadisticasGenerales.no_contactabilidad.percentage.toFixed(2) +
            " %",
          // porcentajeConvercion: estadisticasGenerales.contactabilidad.percentage,
          cantidadMatriculas:
            estadisticasGenerales.estadisticas_basicas.find(
              (e) =>
                e?.estado__nombre?.toLowerCase() == "matriculado"
            )?.count || 0,
          cantidadLiquidaciones:
            estadisticasGenerales.estadisticas_basicas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "liquidado"
            )?.count || 0,
          enSeguimiento:
            estadisticasGenerales.estadisticas_basicas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "en seguimiento"
            )?.count || 0,
          sinGestion:
            estadisticasGenerales.estadisticas_basicas.find(
              (e) =>
                e?.estado__nombre?.toLowerCase() == "por gestionar"
            )?.count || 0,
          descartados:
            estadisticasGenerales.estadisticas_basicas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "descartado"
            )?.count || 0,
          noContactados:
            estadisticasGenerales.estadisticas_basicas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "no contactado"
            )?.count || 0,
          anulados:
            estadisticasGenerales.estadisticas_basicas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "anulado"
            )?.count || 0,
          nuevoInteres:
            estadisticasGenerales.estadisticas_basicas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "nuevo interes"
            )?.count || 0,
          enGestion:
            estadisticasGenerales.estadisticas_basicas.find(
              (e) => e?.estado__nombre?.toLowerCase() == "en gestión"
            )?.count || 0,
          cancelados:
            estadisticasGenerales.estadisticas_basicas.find(
              (e) =>
                e?.estado__nombre?.toLowerCase() === "cancelado"
            )?.count || 0, // Puedes agregar lógica adicional para calcular cancelados si es necesario
          enSeleccionTotal:
            estadisticasGenerales.estadisticas_basicas.find(
              (e) =>
                e?.estado__nombre?.toLowerCase() === "en proceso de selección"
            )?.count || 0, // Puedes agregar lógica adicional para calcular cancelados si es necesario
          tiempoLlamada: estadisticasGenerales.promedio_tiempo_llamada,
          tiempoWhatsApp:estadisticasGenerales.promedio_tiempo_whatsapp,
          totalAspirantes:estadisticasGenerales.total_aspirantes
        };
        setEstadisticas(mapeado);
      }
    }
    cargarEstadisticas();
  }, [procesoSelect, fechaFin]);

  const manejarCambioVisibilidadColumna = (nuevaVisibilidad) => {
    setVisibilidadColumna(nuevaVisibilidad);
  };

  useEffect(() => {
    if (procesoSelect === "empresas" || procesoSelect === "general") {
      setVisibilidadColumna((prevState) => ({
        ...prevState,
        nombreEmpresa: false, // Inicialmente no visible
      }));
    } else {
      const { nombreEmpresa, ...restVisibilidad } = visibilidadColumna;
      setVisibilidadColumna(restVisibilidad);
    }
  }, [procesoSelect]);

  useEffect(() => {
    setBarraLateralKey((prevKey) => prevKey + 1);
    setTablaKey((prevKey) => prevKey + 1);
  }, [visibilidadColumna]);

  const ocultarModalCargando = () => {
    setModalOculto(true);
    setModalOcultoSubirBD(true)
  };

  return (
    <>
      <Encabezado
        mostrarBotonSubirBD={true}
        mostrarBotonInicio={false}
        textoEncabezado={"Aspirantes"}
        ide={"aspirantes"}
        vista={"aspirantesFiltro"}
        setProcesoSelect={setProcesoSelect}
        ocultarModalCargando={ocultarModalCargando}
        setModalOculto={setModalOculto}
      />
      <main className="contenedorPrincipal">
        <BarraLaterarl
          key={barraLateralKey}
          onCambioVisibilidadColumna={manejarCambioVisibilidadColumna}
          visibilidadInicial={visibilidadColumna}
          procesoSelect={procesoSelect}
          ocultarModalCargando={ocultarModalCargando}
          setModalOculto={setModalOculto}
        />
        <div className="contenedorSecundario">
          <Suspense fallback={<h1>Cargando ...</h1>}>
            <Tabla
              key={tablaKey}
              visibilidadColumna={visibilidadColumna}
              procesoSelect={procesoSelect}
              modalOculto={modalOculto}
              setModalOculto={setModalOculto}
              ocultarModalCargando={ocultarModalCargando}
              />
          </Suspense>
          <Estadisticas
            estadisticas={estadisticas}
            fechaInicio={fechaInicio}
            fechaFin={fechaFin}
            setFechaInicio={setFechaInicio}
            setFechaFin={setFechaFin}
            tituloEstadisticas={procesoSelect}
          />
        </div>
      </main>
    </>
  );
};

export default Principal;
