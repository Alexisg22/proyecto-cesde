
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
                <h1>Subir Base de Datos</h1>
                <form className='contenedorBotonesBD' encType='multipart/form-data'>

                    <input type="file" id='baseDatos1' className='inputSubirBD' />
                    <label htmlFor="baseDatos1" className='labelSubirBD'>
                        Subir BD 1
                    </label>
                    <input type="file" id='baseDatos2' className='inputSubirBD' />
                    <label htmlFor="baseDatos2" className='labelSubirBD'>
                        Subir BD 2
                    </label>
                    <input type="file" id='baseDatos3' className='inputSubirBD' />
                    <label htmlFor="baseDatos3" className='labelSubirBD'>
                        Subir BD 3
                    </label>
                    <input type="file" id='baseDatos4' className='inputSubirBD' />
                    <label htmlFor="baseDatos4" className='labelSubirBD'>
                        Subir BD 4
                    </label>
                    
                    <input type="submit" id='baseDatos4' className='inputEnviarFormulario' />


                </form>
                
                
                

            </div>
        </div>
    )
}
