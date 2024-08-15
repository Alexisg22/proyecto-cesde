import axios from "axios"

export const obtenerEstadisticas = (proceso) =>{
  return axios.get(`http://127.0.0.1:8000/cesde/estadisticas/${proceso}`);
}