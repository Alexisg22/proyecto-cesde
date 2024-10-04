import axios from "axios"

export const obtenerTodosAspirantesMes = (mes, paginaActual) => {
    return  axios.get(`http://localhost:8000/cesde/filter-procesos/mes/?mes=${mes}&page=${paginaActual}`)
  }