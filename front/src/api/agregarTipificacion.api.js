import  axios  from "axios";

export const agregarTipificacion = (datos) =>{
    return axios.post('http://127.0.0.1:8000/cesde/tipificaciones/',datos)
}