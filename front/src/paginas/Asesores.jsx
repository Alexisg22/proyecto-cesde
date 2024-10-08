import '../estilos/Tabla.css'
import React, { useEffect, useState } from 'react';
import { Encabezado } from "../componentes/Encabezado.jsx";
import BuscarAsesores from "../componentes/BuscarAsesores.jsx";
import TablaAsesores from "../componentes/TablaAsesores.jsx";
import "../estilos/Asesores.css";
import { consultarAsesores, consultarAsesoresFecha, consultarUnAsesor, consultarUnAsesorPorFecha } from '../api/asesores.api.js';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

export const Asesores = () => {
  const token = localStorage.getItem('token'); // Obtén el token del localStorage
  const navigate = useNavigate(); // Inicializa el hook useNavigate
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga

  const columnas = [
    { id: 'idWolkvox', etiqueta: 'Id Wolkvox' },
    { id: 'nombreCompleto', etiqueta: 'Nombre Completo' },
    { id: 'cantLlamadas', etiqueta: 'Cant. Llamadas' },
    { id: 'cantWhatsapps', etiqueta: 'Cant. WhatsApps' },
    { id: 'cantGestiones', etiqueta: 'Cant. Gestiones' },
    { id: 'cantMatriculas', etiqueta: 'Cant. Matrículas' },
    { id: 'cantLiquidaciones', etiqueta: 'Cant. Liquidaciones' },
    { id: 'enProcesoSeleccionLlamadas', etiqueta: 'Proceso Selección Llamadas' },
    { id: 'enProcesoSeleccionWhatsApps', etiqueta: 'Proceso Selección WhatsApps' },
    { id: 'cantGestionesEmpresa', etiqueta: 'Cant. Gestiones Empresas' },
    { id: 'cantGestionesTecnicos', etiqueta: 'Cant. Gestiones Técnicos' },
    { id: 'cantGestionesExtensiones', etiqueta: 'Cant. Gestiones Extensiones' },
    { id: 'tiempoPromedioWhatsApp', etiqueta: 'Tiempo Prom. WhatsApps (Min)' },
    { id: 'tiempoPromedioLlamada', etiqueta: 'Tiempo Prom. Llamadas (Min)' },
  ];
  
  const encabezados = columnas.map(columna => ({
    label: columna.etiqueta,
    key: columna.id
  }));

  // State para guardar los asesores obtenidos de la API
  const [asesores, setAsesores] = useState([]);
  
//estado para almacenar las fechas de inicio y de fin de los asesores
  const [fechaInicio, setFechaInicio] = useState('')
  const [fechaFin, setFechaFin] = useState('')
  const [buscarUnAsesor, setBuscarUnAsesor] = useState('') 
  const [contador, setContador] = useState('')


   // Redirección temprana si no hay token
   useEffect(() => {
    if (!token) {
      navigate('/'); // Redirige al inicio o a la página de login si no hay token
    } else {
      setIsLoading(false); // Establece isLoading en false cuando el token esté presente
    }
  }, [token, navigate]);

  async function traerContador(){
    
    let respuesta = await consultarAsesores();
    const totalAsesores = respuesta.data.total_asesores;
    setContador(totalAsesores)
  }
 
  traerContador()

  useEffect(() => {

    if(buscarUnAsesor != 0 && fechaFin != '' && fechaInicio != ''){
      
      async function cargarAsesoress() {
        try {
        const respuesta = await consultarUnAsesorPorFecha(fechaInicio,fechaFin,buscarUnAsesor);
        const asesores = respuesta.data.results;
        
        const mapeado = asesores.map((asesor) => ( {
          idWolkvox: asesor.id,
          nombreCompleto: asesor.nombre_completo,
          cantLlamadas: asesor.cantidad_llamadas,
          cantWhatsapps: asesor.cantidad_whatsapp,
          cantGestiones: asesor.cantidad_gestiones,
          cantMatriculas: asesor.cantidad_matriculas,
          cantLiquidaciones: asesor.cantidad_liquidaciones,
          enProcesoSeleccionLlamadas: asesor.en_proceso_seleccion_llamadas,
          enProcesoSeleccionWhatsApps: asesor.en_proceso_seleccion_whatsapp,
          cantGestionesEmpresa: asesor.cantidad_gestiones_empresa,
          cantGestionesTecnicos: asesor.cantidad_gestiones_tecnicos,
          cantGestionesExtensiones: asesor.cantidad_gestiones_extensiones,
          tiempoPromedioWhatsApp: asesor.tiempo_promedio_whatsapp,
          tiempoPromedioLlamada: asesor.tiempo_promedio_llamada,
          asesoresTotales : asesor.asesores_totales,
        }));
       
        setAsesores(mapeado)
        setContador(asesores[0].asesoresTotales)
      }catch (error) {
        {<h1>{'Error no se encuentra el asesor'}</h1>}
      }
        /*console.log([asesores]);*/
      }
      cargarAsesoress();

    }

    else if(buscarUnAsesor != 0 ){
      
      async function cargarAsesoress() {
        try {
        const respuesta = await consultarUnAsesor(buscarUnAsesor);
        const asesores = respuesta.data.results;
        
  
        const mapeado = asesores.map((asesor) => ( {
          idWolkvox: asesor.id,
          nombreCompleto: asesor.nombre_completo,
          cantLlamadas: asesor.cantidad_llamadas,
          cantWhatsapps: asesor.cantidad_whatsapp,
          cantGestiones: asesor.cantidad_gestiones,
          cantMatriculas: asesor.cantidad_matriculas,
          cantLiquidaciones: asesor.cantidad_liquidaciones,
          enProcesoSeleccionLlamadas: asesor.en_proceso_seleccion_llamadas,
          enProcesoSeleccionWhatsApps: asesor.en_proceso_seleccion_whatsapp,
          cantGestionesEmpresa: asesor.cantidad_gestiones_empresa,
          cantGestionesTecnicos: asesor.cantidad_gestiones_tecnicos,
          cantGestionesExtensiones: asesor.cantidad_gestiones_extensiones,
          tiempoPromedioWhatsApp: asesor.tiempo_promedio_whatsapp,
          tiempoPromedioLlamada: asesor.tiempo_promedio_llamada,
          asesoresTotales : asesor.asesores_totales,
        }));
       
        setAsesores(mapeado)
        setContador(asesores[0].asesoresTotales)
      }catch (error) {
        
        {<h1>{'Error no se encuentra el asesor'}</h1>}
         
      }
        /*console.log([asesores]);*/
      }
      cargarAsesoress();

    }
      
    else if(fechaFin != '' && fechaInicio != ''){
      async function cargarAsesores() {
        const respuesta = await consultarAsesoresFecha(fechaInicio, fechaFin);
        const asesores = respuesta.data.results;
        console.log(asesores);
        const mapeado = asesores.map((asesor) => ({
  
          idWolkvox: asesor.id,
          nombreCompleto: asesor.nombre_completo,
          cantLlamadas: asesor.cantidad_llamadas,
          cantWhatsapps: asesor.cantidad_whatsapp,
          cantGestiones: asesor.cantidad_gestiones,
          cantMatriculas: asesor.cantidad_matriculas,
          cantLiquidaciones: asesor.cantidad_liquidaciones,
          enProcesoSeleccionLlamadas: asesor.en_proceso_seleccion_llamadas,
          enProcesoSeleccionWhatsApps: asesor.en_proceso_seleccion_whatsapp,
          cantGestionesEmpresa: asesor.cantidad_gestiones_empresa,
          cantGestionesTecnicos: asesor.cantidad_gestiones_tecnicos,
          cantGestionesExtensiones: asesor.cantidad_gestiones_extensiones,
          tiempoPromedioWhatsApp: asesor.tiempo_promedio_whatsapp,
          tiempoPromedioLlamada: asesor.tiempo_promedio_llamada,
          asesoresTotales : asesor.asesores_totales,
        }))
        
        setAsesores(mapeado)
        setContador(asesores[0].asesoresTotales)
      }
      cargarAsesores();
    
    }else if(asesores.length < 1){
      async function cargarAsesores() {

        const paginaActual = 1
        const respuesta = await consultarAsesores(paginaActual);
        const asesores = respuesta.data.results;
  
        const mapeado = asesores.map((asesor) => ({
          idWolkvox: asesor.id,
          nombreCompleto: asesor.nombre_completo,
          cantLlamadas: asesor.cantidad_llamadas,
          cantWhatsapps: asesor.cantidad_whatsapp,
          cantGestiones: asesor.cantidad_gestiones,
          cantMatriculas: asesor.cantidad_matriculas,
          cantLiquidaciones: asesor.cantidad_liquidaciones,
          enProcesoSeleccionLlamadas: asesor.en_proceso_seleccion_llamadas,
          enProcesoSeleccionWhatsApps: asesor.en_proceso_seleccion_whatsapp,
          cantGestionesEmpresa: asesor.cantidad_gestiones_empresa,
          cantGestionesTecnicos: asesor.cantidad_gestiones_tecnicos,
          cantGestionesExtensiones: asesor.cantidad_gestiones_extensiones,
          tiempoPromedioWhatsApp: asesor.tiempo_promedio_whatsapp,
          tiempoPromedioLlamada: asesor.tiempo_promedio_llamada,
          asesoresTotales : asesor.asesores_totales,
        }))

        setAsesores(mapeado)
        setContador(asesores[0].asesoresTotales)
      }
      cargarAsesores();

    }
    
  }, [fechaFin, buscarUnAsesor])

  return (
    <div className="asesoresMain">
      <div className="asesoresEncabezado">
        <Encabezado
          mostrarBotonInicio={true}
          textoEncabezado={'Asesores'}
          ide={'asesores'}
          vista={'asesoresFiltro'}
        />
      </div>

      <hr />
      <div className="asesoresContenedor">
        <div>
          <div className="asesoresBuscador">
            <label>Cantidad Asesores: {contador}</label>
            <BuscarAsesores 
              datos={asesores}
              encabezados={encabezados}
              setFechaInicio={setFechaInicio}
              setFechaFin={setFechaFin}
              setBuscarUnAsesor={setBuscarUnAsesor}
            />
          </div>
        </div>
        
        <div className="asesoresTabla">
          <TablaAsesores 
          columnasTabla={columnas}
          datosTabla={asesores}
          />
        </div>

      </div>
    </div>
  );
};