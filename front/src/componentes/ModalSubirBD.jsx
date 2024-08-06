
import { useState } from "react"
import "../estilos/ModalSubirBD.css"
import "../estilos/BotonVerde.css"

export const ModalSubirBD = ({ cerrarModal, modalAbierto }) => {

        const [nombreArchivo, setNombreArchivo] = useState({});
        
        const manejoCargaDeArchivo = (event) => {
            const { name, files } = event.target;
            if (files && files.length > 0) {
                const archivo = files[0];
                setNombreArchivo((nombreArchivoAnterior)=>({
                    ...nombreArchivoAnterior,
                    [name]: archivo.name,
                }));
            } else {
                setNombreArchivo((nombreArchivoAnterior) => ({
                    ...nombreArchivoAnterior,
                    [name]: '',
                  }));
            }
        }
    
        
        if (!modalAbierto) return null
    return (
        <div className='contenedorSubirBD'>
            <div className='modalSubirBD'>
                <div className='botonCerrar'>
                    <button className='cerrarModal' onClick={cerrarModal}>X</button>
                </div>
                <h1 className='tituloSubirBD'>Subir Base de Datos</h1>
                <form className='contenedorBotonesBD' encType='multipart/form-data' action="http://localhost:8000/cesde/cargar_csv/" method="POST">
                    
                    <input type="file" id='baseDatos1' name='predictivo' className='inputSubirBD' onChange={manejoCargaDeArchivo} />
                    <label htmlFor="baseDatos1" className='labelSubirBD'>
                        { <p>BD Predictivo: {nombreArchivo.predictivo}</p> }
                    </label>
                    <input type="file" id='baseDatos2' name='matricula' className='inputSubirBD' onChange={manejoCargaDeArchivo} />
                    <label htmlFor="baseDatos2" className='labelSubirBD'>
                         { <p>BD Matriculas: {nombreArchivo.matricula}</p> } 
                    </label>
                    <input type="file" id='baseDatos3' name='whatsapp' className='inputSubirBD' onChange={manejoCargaDeArchivo} />
                    <label htmlFor="baseDatos3" className='labelSubirBD'>
                          { <p>BD Whatsapp: {nombreArchivo.whatsapp}</p> } 
                    </label>
                    <input type="file" id='baseDatos4' name='llamadas' className='inputSubirBD' onChange={manejoCargaDeArchivo} />
                    <label htmlFor="baseDatos4" className='labelSubirBD'>
                          { <p>BD Llamadas: {nombreArchivo.llamadas}</p> } 
                    </label>
                    
                    <input type="submit" id='enviarFormulario' className='inputEnviarFormulario' />


                </form>
                
                
                

            </div>
        </div>
    )
}
