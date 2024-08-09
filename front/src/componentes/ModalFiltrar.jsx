import { BotonVerde } from './BotonVerde.jsx'
import React, { useState, useRef } from 'react'
import '../estilos/ModalFiltrar.css'
import { ParametroFiltrar } from './ParametroFiltrar.jsx';

// Definición del componente ModalFiltrar
export const ModalFiltrar = ({ cerrarModal, modalAbierto }) => {

    // Estados locales del componente
    const [seleccionOpcion, setSeleccionOpcion] = useState(''); // Opción seleccionada en el dropdown
    const [valorInput, setValorInput] = useState(''); // Valor ingresado en el input
    const [filtrosSeleccionados, setFiltrosSeleccionados] = useState([]); // Lista de filtros seleccionados
    const [valorGestionTotal, setValorGestionTotal] = useState(0); // Valor total de gestiones
    const valorLlamadasRef = useRef(); // Referencia para el valor total de gestiones
    const valorWhatsappRef = useRef(); // Referencia para el valor total de gestiones

    // Maneja el cambio en la selección del dropdown
    const cambioSeleccion = (e) => {
        setSeleccionOpcion(e.target.value);
    };

    // Maneja el cambio en el valor del input
    const cambioValorInput = (e) => {
        setValorInput(e.target.value);  
        
        const nuevoValorGestion = parseFloat(e.target.value) || 0; // Convertir a número, manejar caso de entrada 

        if (seleccionOpcion === 'cantidad llamadas') {
            valorLlamadasRef.current = nuevoValorGestion;
        }
        else if (seleccionOpcion === 'cantidad whatsapp') {
            valorWhatsappRef.current = nuevoValorGestion;
        }
        // Actualiza la referencia para el valor total de gestiones
        const valorTotal = valorLlamadasRef.current + valorWhatsappRef.current;
        setValorGestionTotal(valorTotal);
    };


    // Maneja la adición de un nuevo filtro
    const agregarFiltro = (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario

        // Solo agrega el filtro si hay una opción seleccionada y un valor ingresado
        if (seleccionOpcion && valorInput) {
            // Verifica si el filtro ya existe en la lista
            const filtroExistente = filtrosSeleccionados.find((filtro) => filtro.filtro === seleccionOpcion);

            // Si el filtro existe, actualiza su valor; si no, lo agrega a la lista
            if (filtroExistente) {
                setFiltrosSeleccionados(filtrosSeleccionados.map((filtro) =>
                    filtro.filtro === seleccionOpcion ? { ...filtro, valor: valorInput } : filtro
                ));
            } else {
                setFiltrosSeleccionados([...filtrosSeleccionados, { filtro: seleccionOpcion, valor: valorInput }]);
            }
            // Limpia los valores de selección y input después de agregar el filtro
            setSeleccionOpcion('');
            setValorInput('');
        }
    };

    // Maneja la eliminación de un filtro de la lista
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
                        <button className='cerrarModal' onClick={cerrarModal}>X</button>
                    </div>
                    <h1>Filtrar datos</h1>
                    <div>
                        <form className='formularioFiltros' onSubmit={agregarFiltro}>
                            <select name="filtro" id="filtro" className='seleccionDeFiltro' value={seleccionOpcion} onChange={cambioSeleccion} required>
                                <option value="">Selecione los filtros</option>
                                {/* Opciones para el dropdown */}
                                <option value="cantidad llamadas">Cantidad de llamadas</option>
                                <option value="cantidad whatsapp">Cantidad de Whatsapp</option>
                                <option value="cantidad gestiones">Cantidad de gestiones</option>
                                <option value="mejor gestion">Mejor gestión</option>
                                <option value="estado del aspirante">Estado del aspirante</option>
                                <option value="dias ultima gestion">Días de la última gestión</option>
                                <option value="fecha ultima gestion">Fecha de última gestión</option>
                                <option value="tipificación ultima gestion">Tipificación última gestión</option>
                                <option value="programa de formacion">Programa de formación</option>
                                <option value="sede">Sede</option>
                                <option value="empresa">Empresa</option>
                            </select>                

                            {/* Componente ParametroFiltrar para manejar la entrada del valor */}
                            <ParametroFiltrar seleccionOpcion={seleccionOpcion} cambioValorInput={cambioValorInput}  valorGestionTotal={valorGestionTotal} />

                            <button className='btnAgregarFiltro' type='submit'>Agregar filtro</button>
                        </form>
                    </div>

                    <div className='filtrosSeleccionados'>
                        {/* Muestra los filtros seleccionados y proporciona un botón para eliminarlos */}
                        {filtrosSeleccionados.map((filtro, index) => (
                            <div key={index}>
                                <span> Filtro seleccionado: {filtro.filtro}: {filtro.valor}</span>
                                <button className='btnEliminarFiltro' onClick={() => eliminarFiltro(index)}> X </button>
                            </div>
                        ))}
                    </div>

                    <div className='filtrarBD'>
                        {/* Botón para aplicar los filtros */}
                        <BotonVerde ide={'botonFiltrar'} texto={'Filtrar'} />
                    </div>
                </div>
            </div>
        </>
    );
}
