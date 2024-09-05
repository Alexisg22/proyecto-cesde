import axios from "axios";

export const obtenerProgramasFormacion = () => {
    return  axios.get('http://localhost:8000/cesde/programas/')
  }