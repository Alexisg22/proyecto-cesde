import React,{ useState } from 'react';
import '../estilos/TablaAsesores.css';

function TablaAsesores() {
    const columnas = [
      { id: 'idWolkvox', etiqueta: 'Id Wolkvox' },
      { id: 'nombreCompleto', etiqueta: 'Nombre Completo' },
      { id: 'cantLlamadas', etiqueta: 'Cant. Llamadas' },
      { id: 'cantMensajesDeTexto', etiqueta: 'Cant. SMS' },
      { id: 'cantWhatsapps', etiqueta: 'Cant. WhatsApps' },
      { id: 'cantGestiones', etiqueta: 'Cant. Gestiones' },
      { id: 'cantMatriculas', etiqueta: 'Cant. Matrículas' },
      { id: 'cantLiquidaciones', etiqueta: 'Cant. Liquidaciones' },
    ];
  
    // Datos de ejemplo (reemplazar con tus datos reales)
    const datos = [
      {
        idWolkvox: '3162840984',
        nombreCompleto: 'Sofía Gómez',
        cantLlamadas: '3',
        cantMensajesDeTexto: '3',
        cantWhatsapps: '1',
        cantGestiones: '7',
        cantMatriculas: '1',
        cantLiquidaciones: '6',
      },
      {
        idWolkvox: '3162840984',
        nombreCompleto: 'Sofía Gómez',
        cantLlamadas: '3',
        cantMensajesDeTexto: '3',
        cantWhatsapps: '1',
        cantGestiones: '7',
        cantMatriculas: '2',
        cantLiquidaciones: '5',
      },{
        idWolkvox: '3162840984',
        nombreCompleto: 'Sofía Gómez',
        cantLlamadas: '3',
        cantMensajesDeTexto: '3',
        cantWhatsapps: '1',
        cantGestiones: '7',
        cantMatriculas: '3',
        cantLiquidaciones: '4',
      },
    ];

    return (
    <>
      <main className="tablaAsesores" id="tablaAsesores">
        <section className="cuerpoTablaAsesores">
          <table className='tablaAsesores'>
            <thead className='cabezaTablaAsesores'>
              <tr>
                {columnas.map(columna => [columna.id] && (
                    <th key={columna.id} id={columna.id}>
                      {columna.etiqueta}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className='cuerpoTablaAsesores'>
              {datos.map((row, index) => (
                <tr className='filaTablaAsesores' key={index}>
                  {columnas.map(columna => [columna.id] && (
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
