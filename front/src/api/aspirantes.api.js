  import axios from "axios"

export const obtenerTodosAspirantes = () => {
  return  axios.get('http://localhost:8000/cesde/aspirantes/')
}
export const obtenerAspirantesProceso = (proceso) => {
  return  axios.get(`http://localhost:8000/cesde/aspirantes/${proceso}/`)
}

export const obtenerHistoricoAspirante = () => {
  return  axios.get('http://127.0.0.1:8000/cesde/aspirantes-historico/')
}
