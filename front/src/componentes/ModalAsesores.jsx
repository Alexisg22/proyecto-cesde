import React, { useState } from 'react'
import "../estilos/ModalAsesores.css"

export const ModalAsesores = ({cerrarModal, modalAbierto}) => {
  
  if(!modalAbierto) return 
    

  return (
    
    <div className='cotenedorModal'>
        <div className='modalAsesores'>
            <div className="tituloModalAsesor">
                <h2>Asesores</h2>
                <button onClick={cerrarModal}>X</button>
            </div>

            <div className='buscadorAsesores' >
              <input className="buscadorAsesores" type="search" />
            </div>
            <hr />
            <div className='contenedorTablaAsesores'>
                <table className='tablaAsesores'>
                    <thead>
                        <tr className='tablaAsesoresCabezera'>
                            <th>Documento identidad</th>
                            <th>Nombres</th>
                            <th>Cantidad gestiones</th>
                            <th>Cantidad llamadas</th>
                            <th>Cantidad SMS</th>
                            <th>Cantidad WhatsApps</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1007292207</td>
                            <td>Julian Giraldo</td>
                            <td> 20</td>
                            <td>15</td>
                            <td>4</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1007292207</td>
                            <td>Julian Giraldo</td>
                            <td> 20</td>
                            <td>15</td>
                            <td>4</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1007292207</td>
                            <td>Julian Giraldo</td>
                            <td> 20</td>
                            <td>15</td>
                            <td>4</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1007292207</td>
                            <td>Julian Giraldo</td>
                            <td> 20</td>
                            <td>15</td>
                            <td>4</td>
                            <td>1</td>
                        </tr>
                   
                    </tbody>
                </table>
            </div>

        </div>
    </div>
   

  )
}
