import axios from "axios"

export const consultarAsesores = () => {
    return axios.get('http://localhost:8000/cesde/consulta_asesores/')
}

export const consultarAsesoresFecha = (fechaInicio, fechaFin) => {
    return axios.get(`http://localhost:8000/cesde/consulta_asesores/?fecha_inicio=${fechaInicio}&fecha_fin=${fechaFin}`)
}

export const consultarUnAsesor = (id) => {
    return axios.get(`http://localhost:8000/cesde/consulta_asesores/?id=${id}`)
}