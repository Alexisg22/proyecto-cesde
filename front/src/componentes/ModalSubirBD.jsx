
import { BotonVerde } from '../componentes/BotonVerde.jsx'
import "../estilos/ModalSubirBD.css"
import "../estilos/BotonVerde.css"

export const ModalSubirBD = ({ cerrarModal, modalAbierto }) => {

    if (!modalAbierto) return null

    return (
        <div className='contenedorSubirBD'>
            <div className='modalSubirBD'>
                <div className='botonCerrar'>
                    <button className='cerrarModal' onClick={cerrarModal}>X</button>
                </div>
                <h1 className='tituloSubirBD'>Subir Base de Datos</h1>
                <form className='contenedorBotonesBD' encType='multipart/form-data'>

                    <input type="file" id='baseDatos1' name='predictivo' className='inputSubirBD' />
                    <label htmlFor="baseDatos1" className='labelSubirBD'>
                        BD Predictivo
                    </label>
                    <input type="file" id='baseDatos2' name='matricula' className='inputSubirBD' />
                    <label htmlFor="baseDatos2" className='labelSubirBD'>
                        BD Matriculas 
                    </label>
                    <input type="file" id='baseDatos3' name='whatsapp' className='inputSubirBD' />
                    <label htmlFor="baseDatos3" className='labelSubirBD'>
                        BD Whatsapp
                    </label>
                    <input type="file" id='baseDatos4' name='SMS' className='inputSubirBD' />
                    <label htmlFor="baseDatos4" className='labelSubirBD'>
                        BD SMS
                    </label>
                    
                    <input type="submit" id='baseDatos4' className='inputEnviarFormulario' />


                </form>
                
                
                

            </div>
        </div>
    )
}
