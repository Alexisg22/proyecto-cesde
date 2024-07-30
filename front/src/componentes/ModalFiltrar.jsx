import { BotonVerde } from './BotonVerde.jsx'
import React, {useState} from 'react'
import '../estilos/ModalFiltrar.css'


export const ModalFiltrar = ({cerrarModal, modalAbierto}) => {

    //Estado para almacenar la opción seleccionada
    const [seleccionOpcion, setSeleccionOpcion] = useState('');
    const [filtrosAgregados, setFiltrosAgregados] = useState([{}])
    // Función para manejar el cambio en el seleccion
    const cambioSeleccion = (event) => {
        setSeleccionOpcion(event.target.value);
        setFiltrosAgregados(...setSeleccionOpcion)
        console.log(filtrosAgregados)
      };

    if(!modalAbierto) return

  return (
    <>
    <div className='contenedorFiltrar'> 
            <div className='modalFiltrar'>
                 <div className='botonCerrar'>
                    <button className='cerrarModal' onClick={cerrarModal}>X</button>
                </div>
            <h1>Filtrar datos</h1>
                <div className='contenedorFiltros'>

                    <select name="filtro" id="filtro" className='seleccionDeFiltro' value={seleccionOpcion} onChange={cambioSeleccion}>

                        <option value={null}>Selecione los filtros</option>
                        <option value="Fecha de gestion">Fecha de gestion</option>
                        <option value="diasUltimaGestion">Dias de la ultima gestion</option>
                        <option value="mejorGestion">Mejor gestion</option>
                        <option value="cantidadGestiones">Cantidad de gestiondes</option>
                        <option value="cantidadLlamadas">Cantidad de llamadas</option>
                        <option value="cantidadSms">Cantidad de SMS</option>
                        <option value="cantidadWhatsapp">Cantidad de Whatsapp</option>
                        <option value="fechaUltimaGestion">Fecha de ultima gestion</option>
                        <option value="estado">Estado de la gestion</option>

                    </select>                
                    
                    <input type="text" className='campoFiltro' />

                    <BotonVerde ide={'botonVerde'} texto={'Agregar filtro'}/>

                </div>

                <div className='filtrosSeleccionados'>

                    <div>
                        {seleccionOpcion && (<p>Has seleccionado: {seleccionOpcion}</p>)}
                    </div>

                </div>

                <div className='botonFiltrar'>
                    <BotonVerde ide={'botonVerde'} texto={'Filtrar'}/>
                </div>
                
        </div>
    </div>
  </>
  )
}

