<<<<<<< HEAD
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
=======
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
>>>>>>> ebd59c2cecc56680100df56f5426631267b91825
            const filtroExistente = filtrosSeleccionados.find((filtro) => filtro.filtro === seleccionOpcion);

            // Si el filtro existe, actualiza su valor; si no, lo agrega a la lista
            if (filtroExistente) {
                // Si el filtro ya existe, actualiza su valor
                setFiltrosSeleccionados(filtrosSeleccionados.map((filtro) =>
                    filtro.filtro === seleccionOpcion ? { ...filtro, valor: valorInput } : filtro
                ));
            } else {
                // Si el filtro no existe, lo agrega a la lista de filtros seleccionados
                setFiltrosSeleccionados([...filtrosSeleccionados, { filtro: seleccionOpcion, valor: valorInput }]);
            }
<<<<<<< HEAD
            // Resetea las opciones de selección y el valor ingresado
=======
            // Limpia los valores de selección y input después de agregar el filtro
>>>>>>> ebd59c2cecc56680100df56f5426631267b91825
            setSeleccionOpcion('');
            setValorInput('');
        }
    };

<<<<<<< HEAD
    // Elimina un filtro de la lista de filtros seleccionados
=======
    // Maneja la eliminación de un filtro de la lista
>>>>>>> ebd59c2cecc56680100df56f5426631267b91825
    const eliminarFiltro = (index) => {
        setFiltrosSeleccionados(filtrosSeleccionados.filter((_, i) => i !== index));
    };

    // Si el modal no está abierto, no renderiza nada
    if (!modalAbierto) return null;

    return (
        <>
            <div className='contenedorFiltrar'>
                <div className='modalFiltrar'>
<<<<<<< HEAD

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
=======
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

>>>>>>> ebd59c2cecc56680100df56f5426631267b91825
                            <button className='btnAgregarFiltro' type='submit'>Agregar filtro</button>
                        </form>
                    </div>

                    <div className='filtrosSeleccionados'>
<<<<<<< HEAD
                        {/* Muestra la lista de filtros seleccionados */}
                        {filtrosSeleccionados.map((filtro, index) => (
                            <div key={index}>
                                <span> Filtro seleccionado: {filtro.filtro}: {filtro.valor}</span>
                                {/* Botón para eliminar un filtro de la lista */}
=======
                        {/* Muestra los filtros seleccionados y proporciona un botón para eliminarlos */}
                        {filtrosSeleccionados.map((filtro, index) => (
                            <div key={index}>
                                <span> Filtro seleccionado: {filtro.filtro}: {filtro.valor}</span>
>>>>>>> ebd59c2cecc56680100df56f5426631267b91825
                                <button className='btnEliminarFiltro' onClick={() => eliminarFiltro(index)}> X </button>
                            </div>
                        ))}
                    </div>

                    <div className='filtrarBD'>
<<<<<<< HEAD
                        {/* Botón que aplica los filtros seleccionados (puede estar enlazado a una función que aún no se ha implementado) */}
                        <BotonVerde ide={'botonFiltrar'} texto={'Filtrar'} />
                    </div>

=======
                        {/* Botón para aplicar los filtros */}
                        <BotonVerde ide={'botonFiltrar'} texto={'Filtrar'} />
                    </div>
>>>>>>> ebd59c2cecc56680100df56f5426631267b91825
                </div>
            </div>
        </>
    );
<<<<<<< HEAD
};
=======
}
>>>>>>> ebd59c2cecc56680100df56f5426631267b91825
