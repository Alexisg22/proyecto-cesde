import React, { useState, useRef, useEffect } from 'react';
import '../estilos/ModalFiltrar.css';
import { ParametroFiltrar } from './ParametroFiltrar.jsx';

// Definición del componente ModalFiltrar
export const ModalFiltrar = ({ buscarAspirantesConFiltros, filtrosSeleccionados, setFiltrosSeleccionados, cerrarModal, modalAbierto }) => {
    // Estados locales del componente
    const [seleccionOpcion, setSeleccionOpcion] = useState(''); // Opción seleccionada en el dropdown
    const [valorInput, setValorInput] = useState(''); // Valor ingresado en el input
    const [valorGestionTotal, setValorGestionTotal] = useState(0); // Valor total de gestiones
    const valorLlamadasRef = useRef(0); // Inicializa con 0
    const valorWhatsappRef = useRef(0); // Inicializa con 0


    const cambioSeleccion = (e) => {
        setSeleccionOpcion(e.target.value);
    };

    // Maneja el cambio en el valor del input
    const cambioValorInput = (e) => {
        setValorInput(e.target.value);
        
        const nuevoValorGestion = parseFloat(e.target.value) || 0; // Convertir a número, manejar caso de entrada 

        if (seleccionOpcion === 'cantidad llamadas') {
            valorLlamadasRef.current = nuevoValorGestion;
        } else if (seleccionOpcion === 'cantidad whatsapp') {
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

    // Elimina un filtro de la lista de filtros seleccionados
    const eliminarFiltro = (index) => {
        setFiltrosSeleccionados(filtrosSeleccionados.filter((_, i) => i !== index));
    };



    if (!modalAbierto) return null;
    
    // console.log(filtrosSeleccionados);

    // Actualiza el texto basado en la cantidad de filtros seleccionados
    const cantidadFiltros = filtrosSeleccionados.length;
    const texto = cantidadFiltros === 0 ? 'Sin filtros' : 'Filtrar';

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
                        <form className='formularioFiltros' onSubmit={agregarFiltro}>
                            <select name="filtro" id="filtro" className='seleccionDeFiltro' value={seleccionOpcion} onChange={cambioSeleccion} required>
                                <option value="">Seleccione los filtros</option>
                                {/* Opciones para el dropdown */}
                                <option value="cantidad llamadas">Cantidad de llamadas</option>
                                <option value="cantidad whatsapp">Cantidad de Whatsapp</option>
                                <option value="cantidad gestiones">Cantidad de gestiones</option>
                                <option value="mejor gestion">Mejor gestión</option>
                                <option value="estado ultima gestion">Estado ultima gestion</option>
                                <option value="dias ultima gestion">Días de la última gestión</option>
                                <option value="fecha ultima gestion">Fecha de última gestión</option>
                                <option value="tipificacion ultima gestion">Tipificacion ultima gestion</option>
                                <option value="programa de formacion">Programa de formación</option>
                                <option value="empresa">Empresa</option>
                                <option value="sede">Sede</option>
                            </select>                

                            {/* Componente ParametroFiltrar para manejar la entrada del valor */}
                            <ParametroFiltrar seleccionOpcion={seleccionOpcion} cambioValorInput={cambioValorInput} valorGestionTotal={valorGestionTotal} />

                            <button className='btnAgregarFiltro' type='submit'>Agregar filtro</button>
                        </form>
                    </div>

                    <div className='filtrosSeleccionados'>
                        {filtrosSeleccionados.length > 0 ? (
                            filtrosSeleccionados.map((filtro, index) => (
                                <div key={index}>
                                    <span> Filtro seleccionado: {filtro.filtro}: {filtro.valor}</span> 
                                    <button className='btnEliminarFiltro' onClick={() => eliminarFiltro(index)}> X </button>
                                </div>
                            ))
                        ) : (
                            <p></p>
                        )}
                    </div>

                    <div className='filtrarBD'>
                        <button 
                            onClick={buscarAspirantesConFiltros} 
                            className='botonVerde' 
                        >
                            {texto}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
