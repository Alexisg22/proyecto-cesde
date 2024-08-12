import axios from "axios"

export const obtenerTodosAspirantes = () => {
  return  axios.get('http://localhost:8000/cesde/aspirantes/')
}

export const obtenerTodosAsesores = () => {
  return  axios.get('http://localhost:8000/cesde/asesores/')
}