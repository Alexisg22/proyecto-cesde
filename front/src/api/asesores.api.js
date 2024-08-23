import axios from "axios"

export const consultarAsesores = (pagina) => {
    return axios.get(`http://localhost:8000/cesde/consulta_asesores/`)
}

export const consultarAsesoresFecha = (fechaInicio, fechaFin) => {
    return axios.get(`http://localhost:8000/cesde/consulta_asesores/?fecha_inicio=${fechaInicio} 00:00:00&fecha_fin=${fechaFin} 23:59:59`)
}

export const consultarUnAsesor = (id) => {
    return axios.get(`http://localhost:8000/cesde/consulta_asesores/?id=${id}`)
}

export const consultarUnAsesorPorFecha = (fechaInicio, fechaFin,id) => {
    return axios.get(`http://localhost:8000/cesde/consulta_asesores/?fecha_inicio=${fechaInicio} 00:00:00&fecha_fin=${fechaFin} 23:59:59&id=${id}`)
}