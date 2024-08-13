import axios from "axios";

export const obtenerEstados = () => {
    return  axios.get('http://localhost:8000/cesde/estados/')
  }