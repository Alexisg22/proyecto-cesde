import React from 'react';
import '../estilos/Tabla.css';
import { BotonVerde } from './BotonVerde';

function Tabla({ visibilidadColumna }) {
  const columnas = [
    { id: 'celular', etiqueta: 'Celular' },
    { id: 'nit', etiqueta: 'Nit' },
    { id: 'nombreCompleto', etiqueta: 'Nombre Completo' },
    { id: 'cantLlamadas', etiqueta: 'Cant. Llamadas' },
    { id: 'cantSMS', etiqueta: 'Cant. SMS' },
    { id: 'cantWhatsApps', etiqueta: 'Cant. WhatsApps' },
    { id: 'cantGestiones', etiqueta: 'Cant. Gestiones' },
    { id: 'mejorGestion', etiqueta: 'Mejor Gestión' },
    { id: 'estadoAspirante', etiqueta: 'Estado Aspirante' },
    { id: 'diasHabilesUltGestion', etiqueta: 'Dias Habiles Ult. Gestión' },
    { id: 'fechaUltGestion', etiqueta: 'Fecha Ult. Gestión' },
    { id: 'estadoUltGestion', etiqueta: 'Est. Ult. Gestión' },
    { id: 'celularAdicional', etiqueta: 'Celular Adicional' },
  ];

  // Datos de ejemplo (reemplazar con tus datos reales)
  const datos = [
    {
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Sofía Gómez',
      cantLlamadas: '3',
      cantSMS: '2',
      cantWhatsApps: '1',
      cantGestiones: '6',
      mejorGestion: 'No interesado',
      estadoAspirante: 'Cancelado',
      diasHabilesUltGestion: '1',
      fechaUltGestion: '23/07/2024',
      estadoUltGestion: 'No interesado',
      celularAdicional: '3002106542',
    },
    {
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Sofía Gómez',
      cantLlamadas: '3',
      cantSMS: '2',
      cantWhatsApps: '1',
      cantGestiones: '6',
      mejorGestion: 'No interesado',
      estadoAspirante: 'Liquidado',
      diasHabilesUltGestion: '1',
      fechaUltGestion: '23/07/2024',
      estadoUltGestion: 'No interesado',
      celularAdicional: '3002106542',
    },{
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Sofía Gómez',
      cantLlamadas: '3',
      cantSMS: '2',
      cantWhatsApps: '1',
      cantGestiones: '6',
      mejorGestion: 'No interesado',
      estadoAspirante: 'Matriculado',
      diasHabilesUltGestion: '1',
      fechaUltGestion: '23/07/2024',
      estadoUltGestion: 'No interesado',
      celularAdicional: '3002106542',
    },
    // ... más filas de datos
  ];

  return (
    <main className="tabla" id="tablaClientes">
      <section className="encabezadoTabla">
        <h1>Información clientes</h1>
        <div className="espacioBuscador">
          <input type="search" placeholder="Buscar Datos..." />
          <button className="botonBuscar">Buscar</button>
        </div>
        <div className='filtrar'>
          <BotonVerde texto={'Filtrar'}/>
        </div>
      </section>
      <section className="cuerpoTabla">
        <table className='tabla'>
          <thead className='cabezaTabla'>
            <tr>
              {columnas.map(columna => 
                visibilidadColumna[columna.id] && (
                  <th key={columna.id} id={columna.id}>
                    {columna.etiqueta}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className='cuerpoTabla'>
            {datos.map((row, index) => (
              <tr key={index}>
                {columnas.map(columna => 
                  visibilidadColumna[columna.id] && (
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
  );
}

export default Tabla;