import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../estilos/ModalSubirBD.css";
import "../estilos/BotonVerde.css";
import  ModalDeCarga  from "./ModalDeCarga.jsx"
import { BotonVerde } from './BotonVerde.jsx';

// Componente ModalSubirBD
export const ModalSubirBD = ({ cerrarModal, modalAbierto }) => {

    // useForm para manejar el formulario y la validación
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [modalAbiertoCarga, setModalAbiertoCarga] = useState(false)
 

    // useState para manejar el estado de los nombres de los archivos subidos
    const [nombreArchivo1, setNombreArchivo1] = useState('');
    const [nombreArchivo2, setNombreArchivo2] = useState('');
    const [nombreArchivo3, setNombreArchivo3] = useState('');
    const [nombreArchivo4, setNombreArchivo4] = useState('');

    // Función para capturar el nombre del archivo. seleccionado en cada input
    const capturarNombreInput = (e) => {
        const archivo = e.target.files[0]; // Obtiene el archivo seleccionado
        const idInput = e.target.id; // Obtiene el ID del input que disparó el evento

        if (!archivo) return; // Si no hay archivo seleccionado, retorna

        // Actualiza el estado correspondiente al input que disparó el evento
        if (idInput === 'BD1') setNombreArchivo1(archivo.name);
        if (idInput === 'BD2') setNombreArchivo2(archivo.name);
        if (idInput === 'BD3') setNombreArchivo3(archivo.name);
        if (idInput === 'BD4') setNombreArchivo4(archivo.name);
        
    }

    // Función para manejar el envío del formulario
    const enviarBD = handleSubmit(async (data) => {
        console.log(data); // Muestra los datos del formulario en la consola
        
        // Crea un objeto FormData para enviar los archivos
        const formData = new FormData();
        formData.append('predictivo', data.predictivo ? data.predictivo[0] : null);
        formData.append('matricula', data.matricula ? data.matricula[0] : null);
        formData.append('whatsapp', data.whatsapp ? data.whatsapp[0] : null);
        formData.append('SMS', data.SMS ? data.SMS[0] : null);

        try {
            // Envío de la petición POST al servidor usando Axios
            const response = await axios.post('http://localhost:8000/cesde/cargar_csv/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Enviado', response.data); // Muestra la respuesta del servidor en la consola
            
            
            window.location.reload(); // Recarga la página después de que se haya enviado con éxito
        } catch (error) {
            // Captura y muestra errores en caso de que falle la petición
            console.error('Error al enviar los datos:', error);
            window.location.reload();
        }
    });



    // Si el modal no está abierto, no se muestra nada
    if (!modalAbierto) return null;

    return (
        <div className='contenedorSubirBD'>
            <div className='modalSubirBD'>
                <div className='botonCerrar'>
                    <button className='cerrarModal' onClick={cerrarModal}>X</button>
                </div>

                <h1 className='tituloSubirBD'>Subir Base de Datos</h1>

                {/* Formulario para subir archivos */}
                <form className='contenedorBotonesBD' encType='multipart/form-data' onSubmit={enviarBD}>
                    
                    {/* Input para subir la BD Predictivo */}
                    <div className='contenedorInpuSubirBD'>
                        <input  type="file" id='BD1' name='predictivo' className='inputSubirBD'
                            {...register('predictivo', {onChange: capturarNombreInput}, {
                            })}
                        />
                        {/* Muestra el mensaje de error si no se cumple la validación */}
                        {errors.predictivo && <samp>{errors.predictivo.message}</samp>}
                        <label htmlFor="BD1" className='labelSubirBD'>
                            BD Predictivo
                        </label>
                        {/* Muestra el nombre del archivo seleccionado */}
                        {nombreArchivo1 && <p className='nombreArchivo'>{nombreArchivo1}</p>}
                    </div>

                    {/* Input para subir la BD Matriculas */}
                    <div className='contenedorInpuSubirBD'>
                        <input  type="file" id='BD2' name='matricula' className='inputSubirBD'
                            {...register('matricula',{onChange: capturarNombreInput}, {
                            })}
                        />
                        {errors.matricula && <samp>{errors.matricula.message}</samp>}
                        <label htmlFor="BD2" className='labelSubirBD'>
                            BD Matrículas
                        </label>
                        {nombreArchivo2 && <p className='nombreArchivo'>{nombreArchivo2}</p>}
                    </div>

                    {/* Input para subir la BD Whatsapp */}
                    <div className='contenedorInpuSubirBD'>
                        <input  type="file" id='BD3' name='whatsapp' className='inputSubirBD'
                            {...register('whatsapp',{onChange: capturarNombreInput}, {
                            })}
                        />
                        {errors.whatsapp && <samp>{errors.whatsapp.message}</samp>}
                        <label htmlFor="BD3" className='labelSubirBD'>
                            BD Whatsapp
                        </label>
                        {nombreArchivo3 && <p className='nombreArchivo'>{nombreArchivo3}</p>}
                    </div>

                    {/* Input para subir la BD SMS */}
                    <div className='contenedorInpuSubirBD'>
                        <input  type="file" id='BD4' name='SMS' className='inputSubirBD'
                            {...register('SMS',{onChange: capturarNombreInput}, {
                            })}
                        />
                        {errors.SMS && <samp>{errors.SMS.message}</samp>}
                        <label htmlFor="BD4" className='labelSubirBD'>
                            BD Llamadas
                        </label>
                        {nombreArchivo4 && <p className='nombreArchivo'>{nombreArchivo4}</p>}
                    </div>

                    {/* Botón para enviar el formulario */}
                    <BotonVerde type="submit"
                        setModalAbierto={setModalAbiertoCarga} 
                        modalAbierto={modalAbiertoCarga}
                        texto={"Enviar"} 
                        ide={'inputEnviarFormulario'}
                    />
                </form>
            </div>

            <ModalDeCarga modalAbierto={modalAbiertoCarga}/>
        </div>
    );
}
