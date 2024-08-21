import axios from "axios"

export const obtenerUnAspirante = (celular) => {
  return  axios.get(`http://localhost:8000/cesde/aspirantes-filter/?celular=${celular}/`)
}

export const obtenerAspirantesProceso = (nuevoProceso, paginaActual) => {
  return  axios.get(`http://localhost:8000/cesde/filter-procesos/${nuevoProceso}?page=${paginaActual}`)
}

export const obtenerHistoricoAspirante = (celular) => {
  return  axios.get(`http://127.0.0.1:8000/cesde/historico/historico/?celular_aspirante=${celular}`)
}
export const obtenerTipificaciones = () =>{
  return axios.get('http://127.0.0.1:8000/cesde/tipificaciones/')
}

export const obtenerTodosAspirantesConFiltros = (objetoFiltros,paginaActual) => {
  return  axios.get(`http://127.0.0.1:8000/cesde/aspirantes-filter/?proceso_nombre=${objetoFiltros.procesoNombre}&cantidad_llamadas=${objetoFiltros.cantidadLlamadas}&cantidad_whatsapp=${objetoFiltros.cantidadWhatsapps}&cantidad_gestiones=${objetoFiltros.cantidadGestiones}&dias_ultima_gestion=${objetoFiltros.diasUltimaGestion}&fecha_ultima_gestion=${objetoFiltros.fechaUltimaGestion}&tipificacion_ultima_gestion=${objetoFiltros.tipificacionGestionFinal}&estado_ultima_gestion=${objetoFiltros.estadoUltimaGestion}&programa=${objetoFiltros.programaFormacion}&sede=${objetoFiltros.sede}&mejor_gestion=${objetoFiltros.mejorGestion}&page=${paginaActual}`)
}

export const obtenerTodosAspirantesConFiltros2 = (objetoFiltros) => {
  return  axios.get(`http://127.0.0.1:8000/cesde/aspirantes-filter-2/?proceso_nombre=${objetoFiltros.procesoNombre}&cantidad_llamadas=${objetoFiltros.cantidadLlamadas}&cantidad_whatsapp=${objetoFiltros.cantidadWhatsapps}&cantidad_gestiones=${objetoFiltros.cantidadGestiones}&dias_ultima_gestion=${objetoFiltros.diasUltimaGestion}&fecha_ultima_gestion=${objetoFiltros.fechaUltimaGestion}&tipificacion_ultima_gestion=${objetoFiltros.tipificacionGestionFinal}&estado_ultima_gestion=${objetoFiltros.estadoUltimaGestion}&programa=${objetoFiltros.programaFormacion}&sede=${objetoFiltros.sede}&mejor_gestion=${objetoFiltros.mejorGestion}`)
}
