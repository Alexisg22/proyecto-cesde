import React, { useEffect, useState } from 'react';
import { BotonVerde } from './BotonVerde.jsx';
import { HistoricoGestiones } from './HistoricoGestiones.jsx';
import { ModalFiltrar } from './ModalFiltrar.jsx';
import { Paginador } from './Paginador.jsx';
import { CSVLink } from "react-csv";
import { obtenerAspirantesProceso, obtenerTodosAspirantesConFiltros, obtenerUnAspirante } from '../api/aspirantes.api.js';
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
  const [inputBuscadorAspirante, setInputBuscadorAspirante] = useState('')
  const [buscarUnAspirante, setBuscarUnAspirante] = useState('') 
  const [textoModal, setTextoModal] = useState('')
  const [cargando, setCargando] = useState(true)
  const [modalOculto, setModalOculto] = useState(false);


  const buscarAspirantesConFiltros = ( ) =>{
    setAplicarFiltrosAspirantes(filtrosSeleccionados)
    setModalAbierto(false)
  }
  

  useEffect(() =>{
    setPaginaActual(1)
  },[filtrosSeleccionados])
    

  // este useEfect es e que me valida si buscar con filtros, o si bscar un soloaspirante
  useEffect(() => {
    if(buscarUnAspirante != 0 ){
      async function cargarAspirantes() {
        try {
        const respuesta = await obtenerUnAspirante(buscarUnAspirante);
        const aspirante = respuesta.data;
        console.log(aspirante)
  
        const mapeado = {
          celular: aspirante.celular,
          nit: aspirante.nit,
          nombreCompleto: aspirante.nombre_completo,
          cantidadLlamadas: aspirante.cantidad_llamadas,
          cantMensajesDeTexto: aspirante.cantidad_mensajes_texto,
          cantWhatsapps: aspirante.cantidad_whatsapp,
          cantGestiones: aspirante.cantidad_gestiones,
          mejorGestión: aspirante.mejor_gestion,
          estadoUltimaGestion: aspirante.estado_ultima_gestion,
          diasUltGestión: aspirante.dias_ultima_gestion,
          fechaUltGestión: aspirante.fecha_ultima_gestion,
          gestiónFinal: aspirante.gestion_final,
          tipificaciónGestiónFinal: aspirante.tipificacion,
          celularAdicional: aspirante.celular_adicional,
          nitEmpresa: aspirante.patrocinio_empresa,
          sede: aspirante.sede,
          programaFormación: aspirante.programa_formacion,
        };
       
        setAspirantes([mapeado])
      }catch (error) {
        setTextoModal('Error, no se ha encontrado al aspirante. compruebe el numero')
        setAbrirModalAspiranteSinGesiones(true)  
      }
          
      }
      cargarAspirantes();
    }else{

      let nuevoProceso = ''
      let procesoBusqueda = ''
      if(procesoSelect == 'tecnicos'){
          nuevoProceso = 'proceso-tecnico/'
          procesoBusqueda = 'técnicos'
      }else if(procesoSelect == 'empresas'){
          nuevoProceso = 'proceso-empresa/'
          procesoBusqueda = 'empresa'
      }else if(procesoSelect == 'extensiones'){
          nuevoProceso = 'proceso-extensiones/'
          procesoBusqueda = 'extenciones'
      }else{
        nuevoProceso = ''
      }

      if(aplicarFiltrosAspirantes != 0){
        let objetoFiltros ={
          procesoNombre: procesoBusqueda,
          cantidadLlamadas: '',
          cantidadWhatsapps: '',
          cantidadGestiones: '',
          mejorGestion: '',
          estadoUltimaGestion: '',
          diasUltimaGestion: '',
          fechaUltimaGestion: '',
          tipificacionGestionFinal: '',
          programaFormacion: '',
          sede: '',
          nitEmpresa: '',
          
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
            case('estado ultima gestion'):
              return (objetoFiltros.estadoUltimaGestion = filtro.valor);
            case('dias ultima gestion'):
              return (objetoFiltros.diasUltimaGestion = filtro.valor);
            case('fecha ultima gestion'):
              return (objetoFiltros.fechaUltimaGestion = filtro.valor);
            case('tipificacion gestion final'):
              return (objetoFiltros.tipificacionGestionFinal = filtro.valor);
            case('programa de formacion'):
              return (objetoFiltros.programaFormacion = filtro.valor);
            case('sede'):
              return (objetoFiltros.sede = filtro.valor);
            case('empresa'):
              return (objetoFiltros.nitEmpresa = filtro.valor);
            default:
              return null;
          }  
        })

        async function cargarAspirantes() {
            
          const respuesta = await obtenerTodosAspirantesConFiltros(objetoFiltros);
          const aspirantes = respuesta.data;
          // console.log('se buscan filtros')
          
    
          const mapeado = aspirantes.map((aspirante) => ({
  
          celular: aspirante.celular,
          nit: aspirante.nit,
          nombreCompleto: aspirante.nombre_completo,
          cantidadLlamadas: aspirante.cantidad_llamadas,
          cantMensajesDeTexto: aspirante.cantidad_mensajes_texto,
          cantWhatsapps: aspirante.cantidad_whatsapp,
          cantGestiones: aspirante.cantidad_gestiones,
          mejorGestión: aspirante.mejor_gestion,
          estadoUltimaGestion: aspirante.estado_ultima_gestion,
          diasUltGestión: aspirante.dias_ultima_gestion,
          fechaUltGestión: aspirante.fecha_ultima_gestion,
          gestiónFinal: aspirante.gestion_final ,
          tipificaciónGestiónFinal: aspirante.tipificacion,
          nitEmpresa: aspirante.nit_empresa,
          sede: aspirante.sede,
          programaFormación: aspirante.programa,
          }))
          setAspirantes('')
          setAspirantes(mapeado)
      
        }
        
        cargarAspirantes();
// Si no hay filtros que aplicar se trae la consulta normal 
      }else{  
        async function cargarAspirantes() {
          try{
          const respuesta = await obtenerAspirantesProceso(nuevoProceso);
          const aspirantes = respuesta.data.aspirantes;
          
    
          const mapeado = aspirantes.map((aspirante) => ({
    
            celular: aspirante.celular,
            nit: aspirante.nit,
            nombreCompleto: aspirante.nombre_completo,
            cantidadLlamadas: aspirante.cantidad_llamadas,
            cantMensajesDeTexto: aspirante.cantidad_mensajes_texto,
            cantWhatsapps: aspirante.cantidad_whatsapp,
            cantGestiones: aspirante.cantidad_gestiones,
            mejorGestión: aspirante.mejor_gestion,
            estadoUltimaGestion: aspirante.estado_ultima_gestion,
            diasUltGestión: aspirante.dias_ultima_gestion,
            fechaUltGestión: aspirante.fecha_ultima_gestion,
            gestiónFinal: aspirante.gestion_final,
            tipificaciónGestiónFinal: aspirante.tipificacion,
            celularAdicional: aspirante.celular_adicional,
            nitEmpresa: aspirante.patrocinio_empresa,
            sede: aspirante.sede,
            programaFormación: aspirante.programa_formacion,
          }))
          
          
          setAspirantes(mapeado)
        }catch (error) {
          console.error("Error al obtener los aspirantes:", error);
        } finally {
          setCargando(false); // Una vez que tienes la respuesta, ocultas el modal de carga
        }
        }
        cargarAspirantes();
      } 
    } 
 
  }
  , [procesoSelect, aplicarFiltrosAspirantes, buscarUnAspirante]);

// esta funcion abre el modal de historico aspirantes al dar click en la fila del aspirante y valida si el aspirante tiene gestiones
  const manejarClickFilaAspirantes = (celular, cantGestionesAspirante) => {
    if(cantGestionesAspirante === 0){
      setTextoModal("Al aspirante seleccionado no se le ha realizado ninguna gestión.")
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
    { id: 'estadoUltimaGestion', etiqueta: 'Estado Ult. Gestion' },
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

  const obtenerCelularInput = (e) => {
    e.preventDefault()
    setBuscarUnAspirante(inputBuscadorAspirante)
  }

  const ocultarModalCargando = () => {
    setModalOculto(true);
  };
  
  return (
    <>
    {/* Modal de carga */}
    {cargando && (
        <div className={`modal-cargando ${modalOculto ? 'ocultarCargando' : ''}`}>
          <div className="modal-contenido">
            <p className='textoCargando'>Cargando...</p>
          </div>
        </div>
      )}
      <main className="tabla" id="tablaClientes">
        <section className="encabezadoTabla">
          <h1>Información clientes</h1>
          <form className="espacioBuscador" onSubmit={obtenerCelularInput}>
            <input type="search" placeholder="Buscar un aspirante..." onChange={(e) => setInputBuscadorAspirante(e.target.value)}/>
            <button type='submit' className="botonBuscar">Buscar</button>
          </form>
          <div className='filtrar'>
            <BotonVerde 
            setModalAbierto={setModalAbierto} 
            modalAbierto={modalAbierto} 
            modalSubirBDs={true} 
            texto={"Filtrar"} 
            ide={'botonFiltrar'} 
            ocultarModalCargando={ocultarModalCargando}
            />
            
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
                <tr className='filaTablaAspirantes' onDoubleClick={() => { manejarClickFilaAspirantes(row.celular, row.cantGestiones) }} key={index}>
                  {columnas.map(columna =>
                    visibilidadColumna[columna.id] && (
                      <td key={columna.id}>
                        {columna.id === 'estadoUltimaGestion' ? (
                          <p className={row[columna.id]?.toLowerCase()}>{row[columna.id]}</p>
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
      <ModalAspiranteSinGestiones abrirModalAspiranteSinGesiones={abrirModalAspiranteSinGesiones} texto={textoModal} cerrarModal={() => { setAbrirModalAspiranteSinGesiones(false) }}/>
      <HistoricoGestiones celularAspiranteSeleccionado={celularAspiranteSeleccionado} modalAbiertoHistorico={modalAbiertoHistorico} cerrarModal={() => { setModalAbiertoHistorico(false) }} />
      <ModalFiltrar buscarAspirantesConFiltros={buscarAspirantesConFiltros} filtrosSeleccionados={filtrosSeleccionados} setFiltrosSeleccionados={setFiltrosSeleccionados} modalAbierto={modalAbierto} cerrarModal={() => { setModalAbierto(false), setModalOculto(false) }} />
    </>
  );
}

export default Tabla  