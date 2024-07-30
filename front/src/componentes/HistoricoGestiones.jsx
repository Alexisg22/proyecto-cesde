import React from 'react'
import '../estilos/HistoricoGestiones.css'

export const HistoricoGestiones = ({cerrarModal, modalAbiertoHistorico}) => {

    if(!modalAbiertoHistorico) return 

    const columnas = [
        { id: 'fechaGestion', etiqueta: 'Fecha Gestion' },
        { id: 'asesor', etiqueta: 'Asesor' },
        { id: 'descripcion', etiqueta: 'Descripcion' },
        { id: 'resultadoGestion', etiqueta: 'Resultado Gestion' },
      ];
    
      // Datos de ejemplo (reemplazar con tus datos reales)
      const datos = [
        {
            fechaGestion: '3162840984',
            asesor: '34567890',
            descripcion: 'Sofía Gómez',
            resultadoGestion: '3',
        },
        {
            fechaGestion: '3162840984',
            asesor: '34567890',
            descripcion: 'Sofía Gómez',
            resultadoGestion: '3',
        },{
            fechaGestion: '3162840984',
            asesor: '34567890',
            descripcion: 'Sofía Gómez',
            resultadoGestion: '3',
        },{
            fechaGestion: '3162840984',
            asesor: '34567890',
            descripcion: 'Sofía Gómez',
            resultadoGestion: '3',
        },{
            fechaGestion: '3162840984',
            asesor: '34567890',
            descripcion: 'Sofía Gómez',
            resultadoGestion: '3',
        },{
            fechaGestion: '3162840984',
            asesor: '34567890',
            descripcion: 'Sofía Gómez',
            resultadoGestion: '3',
        },
      ];
      
  return (

    <div className='cotenedorModal'>
        <div className='modalHistoricoGestiones'>
            <div className="tituloModalHistorico">
                <h2>Historial de gestiones del aspirante</h2>
                <button onClick={cerrarModal}>X</button>
            </div>

            <div className='datosAspiranteHistorico' >
                <p><strong>Aspirante: </strong>Alexander Santa Ortega</p>
                <p><strong>Celular: </strong>3044233452</p>
                <p><strong>Programa: </strong>Tecnico en desarrollo de software</p>
                <p><strong>Sede: </strong>Rionegro</p>
            </div>

            <hr />
            <main className="tablaHistorico" id="tablaClientesHistorico">     
                <section className="cuerpoTablaHistorico">
                    <table className='tablaHistorico'>
                    <thead className='cabezaTablaHistorico'>
                        <tr>
                        {columnas.map(columna => [columna.id] && (
                            <th key={columna.id} id={columna.id}>
                                {columna.etiqueta}
                            </th>
                            )
                        )}
                        </tr>
                    </thead>
                    <tbody className='cuerpoTablaHistorico'>
                        {datos.map((row, index) => (
                        <tr className='filaTablaAspirantesHistorico'>
                            {columnas.map(columna => [columna.id] && (
                                <td key={columna.id}>
                                {columna.id === 'estadoAspirante' ? (
                                    <p className={row[columna.id].toLowerCase()}>{row[columna.id]}</p>
                                ) : (
                                    row[columna.id]
                                )}
                                </td>
                            )
                            )}
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
