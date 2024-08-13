import axios from "axios";

export const obtenerEmpresas = () => {
    return  axios.get('http://localhost:8000/cesde/empresas/')
  }