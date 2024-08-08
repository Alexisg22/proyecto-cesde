
import { BotonVerde } from '../componentes/BotonVerde.jsx'
import "../estilos/ModalSubirBD.css"
import "../estilos/BotonVerde.css"
import { useState } from 'react'

export const ModalSubirBD = ({ cerrarModal, modalAbierto }) => {

    if (!modalAbierto) return null

    const [nombreArchivo1, setNombreArchivo1] = useState('')
    const [nombreArchivo2, setNombreArchivo2] = useState('')
    const [nombreArchivo3, setNombreArchivo3] = useState('')
    const [nombreArchivo4, setNombreArchivo4] = useState('')

    const capturarNombreInput = (e) => {
        const archivo = e.target.files[0].name
        const idInput = e.target.id
        if(idInput == 'BD1') setNombreArchivo1(archivo)
        if(idInput == 'BD2') setNombreArchivo2(archivo)
        if(idInput == 'BD3') setNombreArchivo3(archivo)
        if(idInput == 'BD4') setNombreArchivo4(archivo)
    }

    return (
        <div className='contenedorSubirBD'>
            <div className='modalSubirBD'>

                <div className='botonCerrar'>
                    <button className='cerrarModal' onClick={cerrarModal}>X</button>
                </div>

                <h1 className='tituloSubirBD'>Subir Base de Datos</h1>

                <form className='contenedorBotonesBD' action='http://localhost:8000/cesde/cargar_csv/' method='POST' encType='multipart/form-data'>
                    <div className='contenedorInpuSubirBD'>
                        <input onChange={capturarNombreInput} type="file" id='BD1' name='predictivo' className='inputSubirBD' />
                        <label htmlFor="BD1" className='labelSubirBD'>
                            BD Predictivo
                        </label>
                        {(nombreArchivo1)&& <p className='nombreArchivo'>{nombreArchivo1}</p>}
                    </div>
                    
                    <div className='contenedorInpuSubirBD'>
                        <input onChange={capturarNombreInput} type="file" id='BD2' name='matricula' className='inputSubirBD' />
                        <label htmlFor="BD2" className='labelSubirBD'>
                            BD Matriculas 
                        </label>
                        {(nombreArchivo2)&& <p className='nombreArchivo'>{nombreArchivo2}</p>}
                    </div>

                    <div className='contenedorInpuSubirBD'>
                        <input onChange={capturarNombreInput} type="file" id='BD3' name='whatsapp' className='inputSubirBD' />
                        <label htmlFor="BD3" className='labelSubirBD'>
                            BD Whatsapp
                        </label>
                        {(nombreArchivo3)&& <p className='nombreArchivo'>{nombreArchivo3}</p>}
                    </div>
                    
                    <div className='contenedorInpuSubirBD'>
                        <input onChange={capturarNombreInput} type="file" id='BD4' name='SMS' className='inputSubirBD' />
                        <label htmlFor="BD4" className='labelSubirBD'>
                            BD SMS
                        </label>
                        {(nombreArchivo4)&& <p className='nombreArchivo'>{nombreArchivo4}</p>}
                    </div>
                    
                    
                    <input  type="submit" id='baseDatos4' className='inputEnviarFormulario' />


                </form>
                
                
                

            </div>
        </div>
    )
}
