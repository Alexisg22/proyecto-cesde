  import axios from "axios"

export const obtenerTodosAspirantes = () => {
  return  axios.get('http://localhost:8000/cesde/aspirantes/')
}

export const obtenerTodosAsesores = () => {
  return  axios.get('http://localhost:8000/cesde/asesores/')
}

export const obtenerUnAspirante = (celular) => {
  return  axios.get(`http://localhost:8000/cesde/aspirantes/${celular}/`)
}

export const obtenerAspirantesProceso = (proceso) => {
  return  axios.get(`http://localhost:8000/cesde/aspirantes/proceso=${proceso}/`)
}

export const obtenerHistoricoAspirante = (celular) => {
  return  axios.get(`http://127.0.0.1:8000/cesde/historico/historico/?celular_aspirante=${celular}`)
}
export const obtenerTipificaciones = () =>{
  return axios.get('http://127.0.0.1:8000/cesde/tipificaciones/')
}

export const obtenerTodosAspirantesConFiltros = (objetoFiltros) => {
  return  axios.get(`http://127.0.0.1:8000/cesde/aspirantes-filter/?cantidad_llamadas=${objetoFiltros.cantidadLlamadas}&cantidad_whatsapp=${objetoFiltros.cantidadWhatsapps}&cantidad_gestiones=${objetoFiltros.cantidadGestiones}&dias_ultima_gestion=${objetoFiltros.diasUltimaGestion}&fecha_ultima_gestion=${objetoFiltros.fechaUltimaGestion}&tipificacion_ultima_gestion=${objetoFiltros.tipificacionUltimaGestion}&estado_aspirante=${objetoFiltros.estadoAspirante}&programa=${objetoFiltros.programaFormacion}&sede=${objetoFiltros.sede}&nit_empresa=${objetoFiltros.nitEmpresa}`)
}






