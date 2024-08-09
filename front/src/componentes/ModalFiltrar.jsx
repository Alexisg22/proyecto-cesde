import { BotonVerde } from './BotonVerde.jsx';
import React, { useState } from 'react';
import '../estilos/ModalFiltrar.css';
import { ParametroFiltrar } from './ParametroFiltrar.jsx';

// Componente ModalFiltrar que permite al usuario seleccionar y aplicar filtros a los datos
export const ModalFiltrar = ({ cerrarModal, modalAbierto }) => {

    // Estados del componente
    const [seleccionOpcion, setSeleccionOpcion] = useState(''); // Guarda la opción de filtro seleccionada
    const [valorInput, setValorInput] = useState(''); // Guarda el valor ingresado para el filtro seleccionado
    const [filtrosSeleccionados, setFiltrosSeleccionados] = useState([]); // Lista de filtros seleccionados por el usuario

    // Maneja el cambio de la opción seleccionada en el select de filtros
    const cambioSeleccion = (e) => {
        setSeleccionOpcion(e.target.value); // Actualiza el estado con la opción seleccionada
    };

    // Maneja el cambio en el valor ingresado en el input correspondiente al filtro seleccionado
    const cambioValorInput = (e) => {
        setValorInput(e.target.value); // Actualiza el estado con el valor ingresado
    };

    // Agrega un nuevo filtro a la lista de filtros seleccionados
    const agregarFiltro = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página
        if (seleccionOpcion && valorInput) { // Solo agrega el filtro si hay una opción y un valor seleccionado
            const filtroExistente = filtrosSeleccionados.find((filtro) => filtro.filtro === seleccionOpcion);
            if (filtroExistente) {
                // Si el filtro ya existe, actualiza su valor
                setFiltrosSeleccionados(filtrosSeleccionados.map((filtro) =>
                    filtro.filtro === seleccionOpcion ? { ...filtro, valor: valorInput } : filtro
                ));
            } else {
                // Si el filtro no existe, lo agrega a la lista de filtros seleccionados
                setFiltrosSeleccionados([...filtrosSeleccionados, { filtro: seleccionOpcion, valor: valorInput }]);
            }
            // Resetea las opciones de selección y el valor ingresado
            setSeleccionOpcion('');
            setValorInput('');
        }
    };

    // Elimina un filtro de la lista de filtros seleccionados
    const eliminarFiltro = (index) => {
        setFiltrosSeleccionados(filtrosSeleccionados.filter((_, i) => i !== index));
    };

    // Si el modal no está abierto, no renderiza nada
    if (!modalAbierto) return null;

    return (
        <>
            <div className='contenedorFiltrar'>
                <div className='modalFiltrar'>

                    <div className='botonCerrar'>
                        {/* Botón para cerrar el modal */}
                        <button className='cerrarModal' onClick={cerrarModal}>X</button>
                    </div>
                    <h1>Filtrar datos</h1>
                    <div>
                        {/* Formulario para seleccionar y agregar filtros */}
                        <form className='formularioFiltros' onSubmit={agregarFiltro}>
                            <select name="filtro" id="filtro" className='seleccionDeFiltro' value={seleccionOpcion} onChange={cambioSeleccion} required>
                                <option value="">Selecione los filtros</option>
                                <option value="cantidad llamadas">Cantidad de llamadas</option>
                                <option value="cantidad SMS">Cantidad de SMS</option>
                                <option value="cantidad whatsapp">Cantidad de Whatsapp</option>
                                <option value="cantidad gestiones">Cantidad de gestiones</option>
                                <option value="mejor gestion">Mejor gestión</option>
                                <option value="estado del aspirante">Estado del aspirante</option>
                                <option value="dias ultima gestion">Días de la última gestión</option>
                                <option value="fecha ultima gestion">Fecha de última gestión</option>
                                <option value="tipificación ultima gestion">Tipificación última gestión</option>
                                <option value="programa de formacion">Programa de formación</option>
                                <option value="sede">Sede</option>
                                <option value="nitEmpresa">Nit de empresa</option>
                            </select>

                            {/* Renderiza el input correspondiente según la opción seleccionada */}
                            <ParametroFiltrar seleccionOpcion={seleccionOpcion} cambioValorInput={cambioValorInput} />

                            {/* Botón para agregar el filtro seleccionado */}
                            <button className='btnAgregarFiltro' type='submit'>Agregar filtro</button>
                        </form>
                    </div>

                    <div className='filtrosSeleccionados'>
                        {/* Muestra la lista de filtros seleccionados */}
                        {filtrosSeleccionados.map((filtro, index) => (
                            <div key={index}>
                                <span> Filtro seleccionado: {filtro.filtro}: {filtro.valor}</span>
                                {/* Botón para eliminar un filtro de la lista */}
                                <button className='btnEliminarFiltro' onClick={() => eliminarFiltro(index)}> X </button>
                            </div>
                        ))}
                    </div>

                    <div className='filtrarBD'>
                        {/* Botón que aplica los filtros seleccionados (puede estar enlazado a una función que aún no se ha implementado) */}
                        <BotonVerde ide={'botonFiltrar'} texto={'Filtrar'} />
                    </div>

                </div>
            </div>
        </>
    );
};
