
import "../estilos/ModalSubirBD.css"
import { BotonVerde } from '../componentes/BotonVerde.jsx'

export const ModalSubirBD = ({cerrarModal, modalAbierto}) => {
  
    if(!modalAbierto) return null

    return (
    <div className='contenedorSubirBD'> 
            <div className='modalSubirBD'>
                 <div className='botonCerrar'>
                    <button className='cerrarModal' onClick={cerrarModal}>X</button>
                </div>
            <h1>Subir Base de Datos</h1>
                <div className='contenedorBotones'>
                
                    <BotonVerde ide={'botonGrande'} texto={'Base de Datos 1'}/>
                    <BotonVerde ide={'botonGrande'} texto={'Base de Datos 2'}/>
                    <BotonVerde ide={'botonGrande'} texto={'Base de Datos 3'}/>

                </div>
                <div className='botonGuardar'>
                    <BotonVerde ide={'botonVerde'} texto={'Guardar'}/>
                </div>
                
        </div>
    </div>
  )
}
