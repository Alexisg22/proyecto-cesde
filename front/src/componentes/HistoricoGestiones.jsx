import React from 'react'
import '../estilos/HistoricoGestiones.css'

export const HistoricoGestiones = ({cerrarModal, modalAbiertoHistorico}) => {

    if(!modalAbiertoHistorico) return 

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
            <div className='contenedorTabla'>
                <table className='tablaHistorico'>
                    <thead>
                        <tr className='tablaHistoricoEncabezado'>
                            <th>Fecha gestión</th>
                            <th>Asesor</th>
                            <th>Descripción</th>
                            <th>Resultado de la gestión</th>
                      
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>25/07/2024</td>
                            <td>107292207 - julian gialdo</td>
                            <td>lorem40</td>
                            <td>Contacto</td>
                           
                        </tr>

                        <tr>
                            <td>18/06/2024</td>
                            <td>107292207 - julian gialdo</td>
                            <td>Contesta el hijo del titular</td>
                            <td>Se deja mensaje con tercero</td>
                        </tr>

                        <tr>
                            <td>18/06/2024</td>
                            <td>107292207 - julian gialdo</td>
                            <td>Contesta el hijo del titular</td>
                            <td>Se deja mensaje con tercero</td>
                        </tr>

                        <tr>
                            <td>18/06/2024</td>
                            <td>107292207 - julian gialdo</td>
                            <td>Contesta el hijo del titular</td>
                            <td>Se deja mensaje con tercero</td>
                        </tr>
                        <tr>
                            <td>18/06/2024</td>
                            <td>107292207 - julian gialdo</td>
                            <td>Contesta el hijo del titular</td>
                            <td>Se deja mensaje con tercero</td>
                        </tr>

                        <tr>
                            <td>18/06/2024</td>
                            <td>107292207 - julian gialdo</td>
                            <td>Contesta el hijo del titular</td>
                            <td>Se deja mensaje con tercero</td>
                        </tr>

                        <tr>
                            <td>18/06/2024</td>
                            <td>107292207 - julian gialdo</td>
                            <td>Contesta el hijo del titular</td>
                            <td>Se deja mensaje con tercero</td>
                        </tr>

                        <tr>
                            <td>18/06/2024</td>
                            <td>107292207 - julian gialdo</td>
                            <td>Contesta el hijo del titular</td>
                            <td>Se deja mensaje con tercero</td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}
