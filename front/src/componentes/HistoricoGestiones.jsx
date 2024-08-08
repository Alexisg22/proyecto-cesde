import '../estilos/HistoricoGestiones.css';
import { obtenerHistoricoAspirante } from '../api/aspirantes.api';
import { useState, useEffect } from 'react';

export const HistoricoGestiones = ({ cerrarModal, modalAbiertoHistorico }) => {
    
    if (!modalAbiertoHistorico) return

    const [historicoGestiones, setHistoricoGestiones] = useState()


    useEffect(() => {
        async function cargarHistoricoGestiones() {
            const numeroCelular = "3044174055";
            const respuesta = await obtenerHistoricoAspirante(numeroCelular);
            const historicoGestiones = respuesta.data;
    
            // Combinar todos los arrays internos en uno solo
            const mapeado = historicoGestiones.flatMap(historico => 
                historico.fechas_gestiones_por_aspirante.map((gestion) => ({
                    nombre: gestion.nombre_completo,
                    celular: gestion.celular,
                    fecha: gestion.fecha,
                    asesor: gestion.asesor,
                    descripcion: gestion.descripcion,
                    tipoGestion: gestion.tipo_gestion,
                    resultadoGestion: gestion.resultado_gestion, // Asegúrate de que el nombre sea correcto
                    programa: gestion.programa,
                    sede: gestion.sede,
                }))
            );
    
            setHistoricoGestiones(mapeado);
        }
        cargarHistoricoGestiones();
    }, []);

    console.log(historicoGestiones)
    

    const columnas = [
        { id: 'fechaGestion', etiqueta: 'Fecha Gestión' },
        { id: 'asesor', etiqueta: 'Asesor' },
        { id: 'descripcion', etiqueta: 'Descripcion' },
        { id: 'resultadoGestion', etiqueta: 'Resultado Gestión' },
        { id: 'tipoGestion', etiqueta: 'Tipo Gestión' },
    ];


    return (

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
                                        <td > {gestion.fecha} </td>
                                        <td > {gestion.asesor} </td>
                                        <td > {gestion.descripcion} </td>
                                        <td > {gestion.resultadoGestion} </td>
                                        <td > {gestion.tipoGestion} </td>  
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>

                </main>

            </div>
        </div>
    )
}
