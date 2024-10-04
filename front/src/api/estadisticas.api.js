import axios from "axios"

export const obtenerEstadisticas = (proceso) =>{
  return axios.get(`http://localhost:8000/cesde/estadisticas/${proceso}`);
}

export const obtenerEstadisticasPorMesYProceso = (url) =>{
  return axios.get(`http://localhost:8000/cesde/estadisticas/${url}`);
}

export const obtenerEstadisticasPorMes = (mes) =>{
  return axios.get(`http://localhost:8000/cesde/estadisticas/mes/${mes}`);
}

