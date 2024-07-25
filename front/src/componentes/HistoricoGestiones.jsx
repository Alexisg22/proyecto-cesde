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
                <p><strong>Nit: </strong>1007282206</p>
                <p><strong>Ciudad residencia: </strong>Rionegro</p>
            </div>

            <hr />
            <div className='contenedorTabla'>
                <table>
                    <thead>
                        <tr>
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
                            <td>El aspirante realizará la matricula mañana</td>
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
                        

                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}
