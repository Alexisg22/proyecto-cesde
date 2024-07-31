import { BotonVerde } from './BotonVerde.jsx'
import React, {useState} from 'react'
import '../estilos/ModalFiltrar.css'
import { ParametroFiltrar } from './ParametroFiltrar.jsx';


export const ModalFiltrar = ({cerrarModal, modalAbierto}) => {

    //Estado para almacenar la opción seleccionada
    const [seleccionOpcion, setSeleccionOpcion] = useState('');
    const [valorInput, setValorInput] = useState('');
    const [filtrosSeleccionados, setFiltrosSeleccionados] = useState([]);
    // Función para manejar el cambio en el seleccion

    const cambioSeleccion = (e) => {
        setSeleccionOpcion(e.target.value);
    };
    
    const cambioValorInput = (e) => {
        
        setValorInput(e.target.value);  
    };

    const agregarFiltro = (event) => {
        event.preventDefault()
        if (seleccionOpcion && valorInput) {
            setFiltrosSeleccionados([...filtrosSeleccionados, { filtro: seleccionOpcion, valor: valorInput }]);
            setSeleccionOpcion('');
            setValorInput('');
        }
    };

    const eliminarFiltro = (index) => {
        setFiltrosSeleccionados(filtrosSeleccionados.filter((_, i) => i !== index));
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
                <div >
                    <form className='formularioFiltros' onSubmit={agregarFiltro}>
                        <select name="filtro" id="filtro" className='seleccionDeFiltro' value={seleccionOpcion} onChange={cambioSeleccion}>

                            <option value="">Selecione los filtros</option>
                            <option value="cantidad llamadas">Cantidad de llamadas</option>
                            <option value="cantidad SMS">Cantidad de SMS</option>
                            <option value="cantidad whatsapp">Cantidad de Whatsapp</option>
                            <option value="cantidad gestiones">Cantidad de gestiones</option>
                            <option value="mejor gestion">Mejor gestion</option>
                            <option value="estado del aspirante">Estado del aspirante</option>
                            <option value="dias ultima gestion">Dias de la ultima gestion</option>
                            <option value="fecha ultima gestion">Fecha de ultima gestion</option>
                            <option value="estado ultima gestion">Estado ultima gestion</option>
                            <option value="programa de formacion">Programa de formacion</option>
                            <option value="sede">Sede</option>
                            <option value="empresa">Empresa</option>


                        </select>                

                        <ParametroFiltrar seleccionOpcion={seleccionOpcion} cambioValorInput={cambioValorInput}/>
                        {/* <input type="date" className="campoFiltro" value={valorInput} onChange={cambioValorInput} /> */}

                        <button className='btnAgregarFiltro' type='submit'>Agregar filtro</button>

                    </form>

                    

                </div>

                <div className='filtrosSeleccionados'>

                    {filtrosSeleccionados.map((filtro, index) => (
                        <div key={index}>
                            <span> Filtro seleccionado: {filtro.filtro}: {filtro.valor}</span> 
                            <button className='btnEliminarFiltro' onClick={() => eliminarFiltro(index)}> X </button>
                        </div>
                    ))}

                </div>

                <div className='filtrarBD'>
                    <BotonVerde ide={'botonFiltrar'} texto={'Filtrar'}/>
                </div>
                
        </div>
    </div>
  </>
  )
}

