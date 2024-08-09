import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import "../estilos/ModalSubirBD.css";
import "../estilos/BotonVerde.css";

export const ModalSubirBD = ({ cerrarModal, modalAbierto }) => {
    
    const { register, 
            handleSubmit,
            formState: {errors}, 
        } = useForm();
    const [nombreArchivo1, setNombreArchivo1] = useState('');
    const [nombreArchivo2, setNombreArchivo2] = useState('');
    const [nombreArchivo3, setNombreArchivo3] = useState('');
    const [nombreArchivo4, setNombreArchivo4] = useState('');

    const capturarNombreInput = (e) => {
        const archivo = e.target.files[0];
        const idInput = e.target.id;
        console.log("se ejecuto funcion")
        if (!archivo) return;
        if (idInput === 'BD1') setNombreArchivo1(archivo.name);
        if (idInput === 'BD2') setNombreArchivo2(archivo.name);
        if (idInput === 'BD3') setNombreArchivo3(archivo.name);
        if (idInput === 'BD4') setNombreArchivo4(archivo.name);
        
    }
    
    const enviarBD = handleSubmit(async (data) => {
        
        const formData = new FormData();
        formData.append('predictivo', data.predictivo ? data.predictivo[0] : null);
        formData.append('matricula', data.matricula ? data.matricula[0] : null);
        formData.append('whatsapp', data.whatsapp ? data.whatsapp[0] : null);
        formData.append('SMS', data.SMS ? data.SMS[0] : null);

        try {
            const response = await axios.post('http://localhost:8000/cesde/cargar_csv/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Enviado', response.data);
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    });
    

    if (!modalAbierto) return null;

    return (
        <div className='contenedorSubirBD'>
            <div className='modalSubirBD'>

                <div className='botonCerrar'>
                    <button className='cerrarModal' onClick={cerrarModal}>X</button>
                </div>

                <h1 className='tituloSubirBD'>Subir Base de Datos</h1>

                <form className='contenedorBotonesBD' encType='multipart/form-data' onSubmit={enviarBD}>
                    <div className='contenedorInpuSubirBD'>
                        <input onChange={capturarNombreInput} type="file" id='BD1' name='predictivo' className='inputSubirBD'
                            {...register('predictivo')}
                        />
                        <label htmlFor="BD1" className='labelSubirBD'>
                            BD Predictivo
                        </label>
                        {nombreArchivo1 && <p className='nombreArchivo'>{nombreArchivo1}</p>}
                    </div>

                    <div className='contenedorInpuSubirBD'>
                        <input onChange={capturarNombreInput} type="file" id='BD2' name='matricula' className='inputSubirBD'
                            {...register('matricula')}
                        />
                        <label htmlFor="BD2" className='labelSubirBD'>
                            BD Matriculas
                        </label>
                        {nombreArchivo2 && <p className='nombreArchivo'>{nombreArchivo2}</p>}
                    </div>

                    <div className='contenedorInpuSubirBD'>
                        <input onChange={capturarNombreInput} type="file" id='BD3' name='whatsapp' className='inputSubirBD'
                            {...register('whatsapp')}
                        />
                        <label htmlFor="BD3" className='labelSubirBD'>
                            BD Whatsapp
                        </label>
                        {nombreArchivo3 && <p className='nombreArchivo'>{nombreArchivo3}</p>}
                    </div>

                    <div className='contenedorInpuSubirBD'>
                        <input onChange={capturarNombreInput} type="file" id='BD4' name='SMS' className='inputSubirBD'
                            {...register('SMS')}
                        />
                        <label htmlFor="BD4" className='labelSubirBD'>
                            BD SMS
                        </label>
                        {nombreArchivo4 && <p className='nombreArchivo'>{nombreArchivo4}</p>}
                    </div>

                    <button id='baseDatos4' className='inputEnviarFormulario' type='submit'>Enviar</button>
                    
                </form>
            </div>
        </div>
    );
}
