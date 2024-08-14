import '../estilos/HistoricoGestiones.css';
import { obtenerHistoricoAspirante } from '../api/aspirantes.api';
import { useState, useEffect } from 'react';

export const HistoricoGestiones = ({ celularAspiranteSeleccionado, cerrarModal, modalAbiertoHistorico }) => {
    
   
    
    if (!modalAbiertoHistorico) return
    
    const [historicoGestiones, setHistoricoGestiones] = useState('')


    useEffect(() => {
        async function cargarHistoricoGestiones() {
            const respuesta = await obtenerHistoricoAspirante(celularAspiranteSeleccionado);
            const historicoGestiones = respuesta.data;
    
            // Combinar todos los arrays internos en uno solo
            
            const mapeado = historicoGestiones.map((gestion) => ({
                nombre: gestion.nombre_completo_aspirante,
                celular: gestion.cel_aspirante,
                fecha: gestion.fecha,
                asesor: gestion.asesor,
                descripcion: gestion.observaciones,
                tipoGestion: gestion.tipo_gestion_nombre,
                resultadoGestion: gestion.tipificacion_nombre, // Asegúrate de que el nombre sea correcto
                programa: gestion.programa_nombre,
                sede: gestion.sede_nombre,
            }))
            
    
            setHistoricoGestiones(mapeado);
        }
        cargarHistoricoGestiones();


        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                cerrarModal();  // Llamamos a la función cerrarModal cuando se presiona Escape
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Limpiamos el event listener al desmontar el componente
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [celularAspiranteSeleccionado, cerrarModal]);
    
    const columnas = [
        { id: 'fechaGestion', etiqueta: 'Fecha Gestión' },
        { id: 'asesor', etiqueta: 'Asesor' },
        { id: 'descripcion', etiqueta: 'Descripcion' },
        { id: 'resultadoGestion', etiqueta: 'Resultado Gestión' },
        { id: 'tipoGestion', etiqueta: 'Tipo Gestión' },
    ];

    return (
        <>
        <div className='cotenedorModal'>
            <div className='modalHistoricoGestiones'>
                <div className="tituloModalHistorico">
                    <h2>Historial de gestiones del aspirante</h2>
                    <button onClick={cerrarModal}>X</button>
                </div>
                <div className='datosAspiranteHistorico' >
                    {(historicoGestiones) && <p><strong>Aspirante: </strong>{historicoGestiones[0].nombre}</p>}
                    {(historicoGestiones) && <p><strong>Celular: </strong>{historicoGestiones[0].celular}</p>}
                    {(historicoGestiones) && <p><strong>Programa: </strong>{historicoGestiones[0].programa}</p>}
                    {(historicoGestiones) && <p><strong>Sede: </strong>{historicoGestiones[0].sede}</p>}          
                </div> 
                <hr />
                <main className="tablaHistorico" id="tablaClientesHistorico">
                    <section className="cuerpoTablaHistorico">
                        <table className='tablaHistorico'>
                            <thead className='cabezaTablaHistorico'> 
                                <tr>
                                    {columnas.map((columna, index) => (
                                        <th key={index}>{columna.etiqueta}</th>
                                    ))} 
                                </tr>    
                            </thead>
                            <tbody className='cuerpoTablaHistorico'>
                                {historicoGestiones && historicoGestiones.map((gestion, index) => (
                                    <tr className='filaTablaAspirantesHistorico' key={index}>
                                        <td >{gestion.fecha}</td>
                                        <td >{gestion.asesor}</td>
                                        <td >{gestion.descripcion}</td>
                                        <td >{gestion.resultadoGestion}</td>
                                        <td >{gestion.tipoGestion}</td>  
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        </div>
        </>
    )
}
