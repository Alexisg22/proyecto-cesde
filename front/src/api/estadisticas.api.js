import axios from "axios"

export const obtenerEstadisticas = (proceso) =>{
  return axios.get(`http://localhost:8000/cesde/estadisticas/${proceso}`);
}