import React,{ useState } from 'react';
import '../estilos/TablaAsesores.css';

function TablaAsesores({columnasTabla, datosTabla}) {
    
    return (
    <>
      <main className="tablaAsesores" id="tabla">
        <section className="cuerpoTablaAsesores">
          <table className='tablaAsesores' id="tablaAsesores">
            <thead className='cabezaTablaAsesores'>
              <tr>
                {columnasTabla.map(columna => [columna.id] && (
                    <th key={columna.id} id={columna.id}>
                      {columna.etiqueta}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className='cuerpoTablaAsesores'>
              {datosTabla.map((row, index) => (
                <tr className='filaTablaAsesores' key={index}>
                  {columnasTabla.map(columna => [columna.id] && (
                      <td key={columna.id} id={columna.id}>
                        {columna.etiqueta}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        
      </main>
    </>
    );
  }
  
  export default TablaAsesores;
