
import "../estilos/ModalAgregarTipificacion.css"

export const ModalAgregarTipoficacion = ({ cerrarModal, modalAbierto }) => {

    if (!modalAbierto) return null

    return (
        <div className='contenedorAgregarTipificacion'>
            <div className='modalAgregarTipificacion'>
                <div className='botonCerrar'>
                    <button className='cerrarModal' onClick={cerrarModal}>X</button>
                </div>
                <h1 className='tituloAgregarTipificacion'>Agregar nueva tipificacion</h1>
                <form className='formularioAgregarTipificacion' encType='multipart/form-data'>
                    <div className="contenedorInput">
                        <label htmlFor="nuevaTipoficacion">Nueva tipificación</label>
                        <input className="inputAgregarTipificacion" type="text"  required/> 
                    </div>
                    <div className="contenedorInput">
                        <label htmlFor="tipoContacto">Tipo Contacto </label>
                        <select className="selectAgregarTipificacion" required>
                            {/* <option value=""> </option> */}
                            <option value="no">No contacto</option>
                            <option value="si"> Contacto</option>
                        </select>
                    </div>
                    <div className="contenedorInput">
                        <label htmlFor="valor">Valor de la tipificacion <strong>EMPRESAS</strong></label>
                        <input className="inputAgregarTipificacion" type="number"  required/> 
                    </div>
                    <div className="contenedorInput">
                        <label htmlFor="valor">Valor de la tipificacion <strong>TECNICOS Y EXTENSIONES</strong></label>
                        <input className="inputAgregarTipificacion" type="nmber" required/> 
                    </div>
                    <div className="contenedorbtnEnviar">
                        <input className="btnEnviar" type="submit" value='Guardar' required/>
                    </div>
                </form>
            </div>
        </div>
    )
}
