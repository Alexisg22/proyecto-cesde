import React, { useEffect } from "react";
import "../estilos/ModalAgregarTipificacion.css"
import { useForm } from "react-hook-form";
import { agregarTipificacion } from '../api/agregarTipificacion.api.js'

export const ModalAgregarTipoficacion = ({ cerrarModal, modalAbierto }) => {

    const {register, handleSubmit, formState: { errors } } = useForm();


    const enviarTipificacion = handleSubmit(async(data)=>{
        const formData = new FormData();
        const objetoTipificacion = {
            nombre: data.nombreTipificacion,
            tipo: data.tipoDeContacto,
            valor: data.valorTipificacion
        }
       
        console.log(objetoTipificacion)
        try{
            const respuesta = agregarTipificacion(objetoTipificacion,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            
            console.log(respuesta);
            window.location.reload();
        }  catch (error) {
            // Captura y muestra errores en caso de que falle la petición
            console.error('Error al enviar los datos:', error);
        }

    })

    if (!modalAbierto) return null

    return (
        <div className='contenedorAgregarTipificacion'>
            <div className='modalAgregarTipificacion'>
                <div className='botonCerrar'>
                    <button className='cerrarModal' onClick={cerrarModal}>X</button>
                </div>
                <h1 className='tituloAgregarTipificacion'>Agregar nueva tipificación</h1>
                <form className='formularioAgregarTipificacion' encType='multipart/form-data' onSubmit={enviarTipificacion}>
                    <div className="contenedorInput">
                        <label htmlFor="nuevaTipoficacion">Nueva tipificación</label>
                        <input className="inputAgregarTipificacion" type="text" name="nombreTipificacion"  required
                        {...register('nombreTipificacion',{
                            required:{
                                value:true,
                                message: 'esta campo es requerido'
                            }
                        })}
                        /> 
                        {errors.nombreTipificacion && <samp>{errors.nombreTipificacion.message}</samp>}
                    </div>
                    <div className="contenedorInput">
                        <label htmlFor="tipoContacto">Tipo Contacto </label>
                        <select className="selectAgregarTipificacion" name="tipoDeContacto" required
                        {...register('tipoDeContacto',{
                            required:{
                                value:true,
                                message: 'esta campo es requerido'
                            }
                        })}

                        >
                            {/* <option value=""> </option> */}
                            <option value="no">Seleccione el tipo de contacto</option>
                            <option value={false}>No contacto</option>
                            <option value={true}> Contacto</option>
                        </select>
                        {errors.tipoDeContacto && <samp>{errors.tipoDeContacto.message}</samp>}
                    </div>
                    <div className="contenedorInput">
                        <label htmlFor="valor">Valor de la tipificación</label>
                        <input className="inputAgregarTipificacion" type="number" max="999" min="0" name="valorTipificacion" required
                        {...register('valorTipificacion',{
                            required:{
                                value:true,
                                message: 'esta campo es requerido'
                            }
                        })}
                        /> 
                        {errors.valorTipificacion && <samp>{errors.valorTipificacion.message}</samp>}
                    </div>
                   
                    <div className="contenedorbtnEnviar">
                        <input className="btnEnviar" type="submit" value='Guardar' required/>
                    </div>
                </form>
            </div>
        </div>
    )
}
