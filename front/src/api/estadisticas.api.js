import axios from "axios"

export const obtenerEstadisticasGenerales = () =>{
    return axios.get('http://127.0.0.1:8000/cesde/estadisticas/');
  }