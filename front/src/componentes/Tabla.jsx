import React, { useEffect, useState } from 'react';
import { BotonVerde } from './BotonVerde.jsx';
import { HistoricoGestiones } from './HistoricoGestiones.jsx';
import { ModalFiltrar } from './ModalFiltrar.jsx';
import { Paginador } from './Paginador.jsx';
import { CSVLink } from "react-csv";
import { obtenerAspirantesProceso, obtenerTodosAspirantes, obtenerTodosAspirantesConFiltros } from '../api/aspirantes.api.js';
import '../estilos/Tabla.css';
import { ModalAspiranteSinGestiones } from './ModalAspiranteSinGestiones.jsx';

function Tabla({ visibilidadColumna, procesoSelect }) {

  const [aspirantes, setAspirantes] = useState([]);
  const [celularAspiranteSeleccionado, setCelularAspiranteSeleccionado] = useState('')
  const [cantidadFilas, setCantidadFilas] = useState(10)
  const [paginaActual, setPaginaActual] = useState(1)
  const [modalAbierto, setModalAbierto] = useState(false)
  const [modalAbiertoHistorico, setModalAbiertoHistorico] = useState(false)
  const [abrirModalAspiranteSinGesiones, setAbrirModalAspiranteSinGesiones] = useState(false)
  const indexFinal = paginaActual * cantidadFilas
  const indexInicial = indexFinal - cantidadFilas
  const nAspirantesPorPagina = aspirantes.slice(indexInicial, indexFinal)
  const numeroPaginas = Math.ceil(aspirantes.length / cantidadFilas)
  const [filtrosSeleccionados, setFiltrosSeleccionados] = useState([]);
  const [aplicarFiltrosAspirantes, setAplicarFiltrosAspirantes] = useState([]) 

  useEffect(() => {

    async function cargarAspirantes() {
      const respuesta = await obtenerTodosAspirantes();
      const aspirantes = respuesta.data

      const mapeado = aspirantes.map((aspirante) => ({

        celular: aspirante.celular,
        nit: aspirante.nit,
        nombreCompleto: aspirante.nombre_completo,
        cantidadLlamadas: aspirante.cantidad_llamadas,
        cantWhatsapps: aspirante.cantidad_whatsapp,
        cantGestiones: aspirante.cantidad_gestiones,
        mejorGestión: 'No interesado',
        estadoAspirante: aspirante.estado_aspirante,
        diasUltGestión: aspirante.dias_ultima_gestion,
        fechaUltGestión: aspirante.fecha_ultima_gestion,
        gestiónFinal: aspirante.estado_ultima_gestion,
        tipificaciónGestiónFinal: aspirante.estado_ultima_gestion,
        celularAdicional: aspirante.celular_adicional,
        nitEmpresa: aspirante.patrocinio_empresa,
        sede: aspirante.sede,
        programaFormación: aspirante.programa_formacion,
        

      }))
      
      
      setAspirantes(mapeado)
    }
    cargarAspirantes();
  }, [])

  const buscarAspirantesConFiltros = ( ) =>{
    setAplicarFiltrosAspirantes(filtrosSeleccionados)
    setModalAbierto(false)
  }
    
  useEffect(() => {
    if (procesoSelect === 'general') {
// validar si hay filtros para aplicar a la busqueda de aspirantes
      if(aplicarFiltrosAspirantes != 0){

        let objetoFiltros ={
          cantidadLlamadas: '',
          cantidadWhatsapps: '',
          cantidadGestiones: '',
          mejorGestion: '',
          estadoAspirante: '',
          diasUltimaGestion: '',
          fechaUltimaGestion: '',
          tipificacionUltimaGestion: '',
          programaFormacion: '',
          sede: '',
          nitEmpresa: ''
        }
       
        aplicarFiltrosAspirantes.map((filtro) => { 
          switch(filtro.filtro){
            case('cantidad llamadas') :
              return (objetoFiltros.cantidadLlamadas = filtro.valor);
            case('cantidad whatsapp'):
              return (objetoFiltros.cantidadWhatsapps = filtro.valor);
            case('cantidad gestiones'):
              return (objetoFiltros.cantidadGestiones = filtro.valor);
            case('mejor gestion'):
              return (objetoFiltros.mejorGestion = filtro.valor);
            case('estado del aspirante'):
              return (objetoFiltros.estadoAspirante = filtro.valor);
            case('dias ultima gestion'):
              return (objetoFiltros.diasUltimaGestion = filtro.valor);
            case('fecha ultima gestion'):
              return (objetoFiltros.fechaUltimaGestion = filtro.valor);
            case('tipificación última gestión'):
              return (objetoFiltros.tipificacionUltimaGestion = filtro.valor);
            case('programa de formación'):
              return (objetoFiltros.programaFormacion = filtro.valor);
            case('sede'):
              return (objetoFiltros.sede = filtro.valor);
            case('empresa'):
              return (objetoFiltros.nitEmpresa = filtro.valor);
            default:
              return null;
          }  
        })
        console.log(objetoFiltros)
        async function cargarAspirantes() {
        const respuesta = await obtenerTodosAspirantesConFiltros(objetoFiltros);
        const aspirantes = respuesta.data;
        // console.log('se buscan filtros')
        // console.log(aspirantes)
    
        const mapeado = aspirantes.map((aspirante) => ({
  
          celular: aspirante.celular,
          nit: aspirante.nit,
          nombreCompleto: aspirante.nombre_completo,
          cantidadLlamadas: aspirante.cantidad_llamadas,
          cantMensajesDeTexto: aspirante.cantidad_mensajes_texto,
          cantWhatsapps: aspirante.cantidad_whatsapp,
          cantGestiones: aspirante.cantidad_gestiones,
          // mejorGestión: 'No interesado',
          estadoAspirante: aspirante.estado,
          diasUltGestión: aspirante.dias_ultima_gestion,
          fechaUltGestión: aspirante.fecha_ultima_gestion,
          // gestiónFinal: aspirante.estado_ultima_gestion,
          tipificaciónGestiónFinal: aspirante.tipificacion,
          // celularAdicional: aspirante.celular_adicional,
          nitEmpresa: aspirante.nit_empresa,
          sede: aspirante.sede,
          programaFormación: aspirante.programa,
        }))
        setAspirantes(mapeado)
      }
      cargarAspirantes();
// Si no hay filtros que aplicar se trae la consulta normal 
      }else{
        async function cargarAspirantes() {
          const respuesta = await obtenerTodosAspirantes();
          const aspirantes = respuesta.data.aspirantes;
    
          const mapeado = aspirantes.map((aspirante) => ({
    
            celular: aspirante.celular,
            nit: aspirante.nit,
            nombreCompleto: aspirante.nombre_completo,
            cantidadLlamadas: aspirante.cantidad_llamadas,
            cantMensajesDeTexto: aspirante.cantidad_mensajes_texto,
            cantWhatsapps: aspirante.cantidad_whatsapp,
            cantGestiones: aspirante.cantidad_gestiones,
            mejorGestión: 'No interesado',
            estadoAspirante: aspirante.estado_aspirante,
            diasUltGestión: aspirante.dias_ultima_gestion,
            fechaUltGestión: aspirante.fecha_ultima_gestion,
            gestiónFinal: aspirante.estado_ultima_gestion,
            tipificaciónGestiónFinal: aspirante.estado_ultima_gestion,
            celularAdicional: aspirante.celular_adicional,
            nitEmpresa: aspirante.patrocinio_empresa,
            sede: aspirante.sede,
            programaFormación: aspirante.programa_formacion,
            
    
          }))
          
          
          setAspirantes(mapeado)
        }
        cargarAspirantes();
      }
      
      
    } else if (procesoSelect === 'empresas') {
      let empresas = '1' 
      async function cargarAspirantes() {
        
        const respuesta = await obtenerAspirantesProceso(empresas);
        const aspirantes = respuesta.data.aspirantes;
  
        const mapeado = aspirantes.map((aspirante) => ({
          celular: aspirante.celular,
          nit: aspirante.nit,
          nombreCompleto: aspirante.nombre_completo,
          cantidadLlamadas: aspirante.cantidad_llamadas,
          cantMensajesDeTexto: aspirante.cantidad_mensajes_texto,
          cantWhatsapps: aspirante.cantidad_whatsapp,
          cantGestiones: aspirante.cantidad_gestiones,
          mejorGestión: 'No interesado',
          estadoAspirante: aspirante.estado_aspirante,
          diasUltGestión: aspirante.dias_ultima_gestion,
          fechaUltGestión: aspirante.fecha_ultima_gestion,
          gestiónFinal: aspirante.estado_ultima_gestion,
          tipificaciónGestiónFinal: aspirante.estado_ultima_gestion,
          celularAdicional: aspirante.celular_adicional,
          nitEmpresa: aspirante.patrocinio_empresa,
          sede: aspirante.sede,
          programaFormación: aspirante.programa_formacion,
        }))
        
        
        setAspirantes(mapeado)
      }
      cargarAspirantes();
      // setAspirantes(aspirantes.filter(aspirante => aspirante.empresa)); // Adjust filter as needed
    } else if (procesoSelect === 'extensiones') {
      const extensiones = '2' 
      async function cargarAspirantes() {
        
        const respuesta = await obtenerAspirantesProceso(extensiones);
        const aspirantes = respuesta.data.aspirantes;
  
        const mapeado = aspirantes.map((aspirante) => ({
  
          celular: aspirante.celular,
          nit: aspirante.nit,
          nombreCompleto: aspirante.nombre_completo,
          cantidadLlamadas: aspirante.cantidad_llamadas,
          cantMensajesDeTexto: aspirante.cantidad_mensajes_texto,
          cantWhatsapps: aspirante.cantidad_whatsapp,
          cantGestiones: aspirante.cantidad_gestiones,
          mejorGestión: 'No interesado',
          estadoAspirante: aspirante.estado_aspirante,
          diasUltGestión: aspirante.dias_ultima_gestion,
          fechaUltGestión: aspirante.fecha_ultima_gestion,
          gestiónFinal: aspirante.estado_ultima_gestion,
          tipificaciónGestiónFinal: aspirante.estado_ultima_gestion,
          celularAdicional: aspirante.celular_adicional,
          nitEmpresa: aspirante.patrocinio_empresa,
          sede: aspirante.sede,
          programaFormación: aspirante.programa_formacion,
          
  
        }))
        setAspirantes(mapeado)
      }
      cargarAspirantes();
      // setAspirantes(aspirantes.filter(aspirante => aspirante.sede)); // Adjust filter as needed
    } else if (procesoSelect === 'tecnicos') {
      let tecnicos = '3' 
      async function cargarAspirantes() {
        
        const respuesta = await obtenerAspirantesProceso(tecnicos);
        const aspirantes = respuesta.data.aspirantes;
  
        const mapeado = aspirantes.map((aspirante) => ({
  
          celular: aspirante.celular,
          nit: aspirante.nit,
          nombreCompleto: aspirante.nombre_completo,
          cantidadLlamadas: aspirante.cantidad_llamadas,
          cantMensajesDeTexto: aspirante.cantidad_mensajes_texto,
          cantWhatsapps: aspirante.cantidad_whatsapp,
          cantGestiones: aspirante.cantidad_gestiones,
          mejorGestión: 'No interesado',
          estadoAspirante: aspirante.estado_aspirante,
          diasUltGestión: aspirante.dias_ultima_gestion,
          fechaUltGestión: aspirante.fecha_ultima_gestion,
          gestiónFinal: aspirante.estado_ultima_gestion,
          tipificaciónGestiónFinal: aspirante.estado_ultima_gestion,
          celularAdicional: aspirante.celular_adicional,
          nitEmpresa: aspirante.patrocinio_empresa,
          sede: aspirante.sede,
          programaFormación: aspirante.programa_formacion,
          
  
        }))
        
        
        setAspirantes(mapeado)
      }
      cargarAspirantes();
      // setAspirantes(aspirantes.filter(aspirante => aspirante.programaFormación)); // Adjust filter as needed
    }
  }, [procesoSelect, aplicarFiltrosAspirantes]);

// esta funcion abre el modal de historico aspirantes al dar click en la fila del aspirante y valida si el aspirante tiene gestiones
  const manejrClickFilaAspirantes = (celular, cantGestionesAspirante) => {
    if(cantGestionesAspirante === 0){
      setAbrirModalAspiranteSinGesiones(true)
      return
    }else{
      setCelularAspiranteSeleccionado(celular);
      setModalAbiertoHistorico(true);
    }
  }
 

  const columnas = [
    { id: 'celular', etiqueta: 'Celular' },
    { id: 'nit', etiqueta: 'Nit' },
    { id: 'nombreCompleto', etiqueta: 'Nombre Completo' },
    { id: 'cantidadLlamadas', etiqueta: 'Cant. Llamadas' },
    { id: 'cantWhatsapps', etiqueta: 'Cant. WhatsApps' },
    { id: 'cantGestiones', etiqueta: 'Cant. Gestiones' },
    { id: 'mejorGestión', etiqueta: 'Mejor Gestión' },
    { id: 'estadoAspirante', etiqueta: 'Estado Aspirante' },
    { id: 'diasUltGestión', etiqueta: 'Dias Ult. Gestión' },
    { id: 'fechaUltGestión', etiqueta: 'Fecha Ult. Gestión' },
    { id: 'gestiónFinal', etiqueta: 'Gestión final' },
    { id: 'tipificaciónGestiónFinal', etiqueta: 'Tipificación Gestión final' },
    { id: 'sede', etiqueta: 'Sede' },
    { id: 'programaFormación', etiqueta: 'Programa de Formación' },
    { id: 'nitEmpresa', etiqueta: 'Nit empresa' },
  ];

  const encabezados = columnas
  .filter(columna => visibilidadColumna[columna.id])
  .map(columna => ({
      label: columna.etiqueta,
      key: columna.id
  }));

  const datosFiltrados = aspirantes.map(row => {
    const filaFiltrada = {};
    columnas.forEach(columna => {
      if (visibilidadColumna[columna.id]) {
        filaFiltrada[columna.id] = row[columna.id];
      }
    });
    return filaFiltrada;
  });

  return (
    <>
      <main className="tabla" id="tablaClientes">
        <section className="encabezadoTabla">
          <h1>Información clientes</h1>
          <div className="espacioBuscador">
            <input type="search" placeholder="Buscar un aspirante..." />
            <button className="botonBuscar">Buscar</button>
          </div>
          <div className='filtrar'>
            <BotonVerde setModalAbierto={setModalAbierto} modalAbierto={modalAbierto} modalSubirBDs={true} texto={"Filtrar"} ide={'botonFiltrar'} />
          </div>
          <CSVLink className="descargar" data={datosFiltrados} headers={encabezados} filename="Aspirantes.csv">Exportar a CSV</CSVLink>
        </section>
        <section className="cuerpoTabla">
          <table className='tabla'>
            <thead className='cabezaTabla'>
            <tr>
              {columnas.map(columna => 
                visibilidadColumna[columna.id] && (
                  <th key={columna.id} id={columna.id}>
                    {columna.etiqueta}
                  </th>
                )
              )}
            </tr>
            </thead>
            <tbody className='cuerpoTabla'>
              {nAspirantesPorPagina.map((row, index) => (
                <tr className='filaTablaAspirantes' onClick={() => { manejrClickFilaAspirantes(row.celular, row.cantGestiones) }} key={index}>
                  {columnas.map(columna =>
                    visibilidadColumna[columna.id] && (
                      <td key={columna.id}>
                        {columna.id === 'estadoAspirante' ? (
                          <p className={row[columna.id].toLowerCase()}>{row[columna.id]}</p>
                        ) : (
                          row[columna.id]
                        )}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <Paginador
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
          numeroPaginas={numeroPaginas}
        />
      </main>
      <ModalAspiranteSinGestiones abrirModalAspiranteSinGesiones={abrirModalAspiranteSinGesiones} cerrarModal={() => { setAbrirModalAspiranteSinGesiones(false) }}/>
      <HistoricoGestiones celularAspiranteSeleccionado={celularAspiranteSeleccionado} modalAbiertoHistorico={modalAbiertoHistorico} cerrarModal={() => { setModalAbiertoHistorico(false) }} />
      <ModalFiltrar buscarAspirantesConFiltros={buscarAspirantesConFiltros} filtrosSeleccionados={filtrosSeleccionados} setFiltrosSeleccionados={setFiltrosSeleccionados} modalAbierto={modalAbierto} cerrarModal={() => { setModalAbierto(false) }} />
    </>
  );
}

export default Tabla