import axios from "axios"

export const obtenerSedes = () => {
    return  axios.get('http://localhost:8000/cesde/sede/')
  }