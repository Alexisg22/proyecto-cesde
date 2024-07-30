import React,{ useState } from 'react';
import '../estilos/Tabla.css';
import { BotonVerde } from './BotonVerde.jsx';
import { HistoricoGestiones } from './HistoricoGestiones.jsx';
import { ModalFiltrar } from './ModalFiltrar.jsx';

function Tabla({ visibilidadColumna }) {
  const columnas = [
    { id: 'celular', etiqueta: 'Celular' },
    { id: 'nit', etiqueta: 'Nit' },
    { id: 'nombreCompleto', etiqueta: 'Nombre Completo' },
    { id: 'cantLlamadas', etiqueta: 'Cant. Llamadas' },
    { id: 'cantMensajesDeTexto', etiqueta: 'Cant. SMS' },
    { id: 'cantWhatsapps', etiqueta: 'Cant. WhatsApps' },
    { id: 'cantGestiones', etiqueta: 'Cant. Gestiones' },
    { id: 'mejorGestion', etiqueta: 'Mejor Gestión' },
    { id: 'estadoAspirante', etiqueta: 'Estado Aspirante' },
    { id: 'diasHabilesUlt.Gestion', etiqueta: 'Dias Habiles Ult. Gestión' },
    { id: 'fechaUltGestion', etiqueta: 'Fecha Ult. Gestión' },
    { id: 'estadoUltGestion', etiqueta: 'Est. Ult. Gestión' },
    { id: 'celularAdicional', etiqueta: 'Celular Adicional' },
    { id: 'empresa', etiqueta: 'Empresa' },
    { id: 'sede', etiqueta: 'Sede' },
    { id: 'programaFormacion', etiqueta: 'Programa de Formacion' },
  ];

  // Datos de ejemplo (reemplazar con tus datos reales)
  const datos = [
    {
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Sofía Gómez',
      cantLlamadas: '3',
      cantMensajesDeTexto: '3',
      cantSMS: '2',
      cantWhatsapps: '1',
      cantGestiones: '6',
      mejorGestion: 'No interesado',
      estadoAspirante: 'Cancelado',
      diasHabilesUltGestion: '1',
      fechaUltGestion: '23/07/2024',
      estadoUltGestion: 'No interesado',
      celularAdicional: '3002106542',
      empresa: 'Andes 1',
      sede: 'Rionegro',
      programaFormacion: 'Programador',
    },
    {
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Sofía Gómez',
      cantLlamadas: '3',
      cantMensajesDeTexto: '2',
      cantWhatsapps: '1',
      cantGestiones: '6',
      mejorGestion: 'No interesado',
      estadoAspirante: 'Liquidado',
      diasHabilesUltGestion: '1',
      fechaUltGestion: '23/07/2024',
      estadoUltGestion: 'No interesado',
      celularAdicional: '3002106542',
      empresa: 'Andes 2',
      sede: 'Rionegro',
      programaFormacion: 'Programador',
    },{
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Sofía Gómez',
      cantLlamadas: '3',
      cantMensajesDeTexto: '2',
      cantWhatsapps: '1',
      cantGestiones: '6',
      mejorGestion: 'No interesado',
      estadoAspirante: 'Matriculado',
      diasHabilesUltGestion: '1',
      fechaUltGestion: '23/07/2024',
      estadoUltGestion: 'No interesado',
      celularAdicional: '3002106542',
      empresa: 'Andes 3',
      sede: 'Rionegro',
      programaFormacion: 'Programador',
    },
    // ... más filas de datos
  ];

  const [modalAbierto, setModalAbierto] = useState(false)
  const [modalAbiertoHistorico, setModalAbiertoHistorico] = useState(false)

  return (
  <>
    <main className="tabla" id="tablaClientes">
      <section className="encabezadoTabla">
        <h1>Información clientes</h1>
        <div className="espacioBuscador">
          <input type="search" placeholder="Buscar Datos..." />
          <button className="botonBuscar">Buscar</button>
        </div>
        <div className='filtrar'>
        <BotonVerde setModalAbierto={setModalAbierto} modalAbierto={modalAbierto} modalSubirBDs={true} texto={"Filtrar"} ide={'botonVerde'}/>
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
              <tr className='filaTablaAspirantes' onClick={() =>{setModalAbiertoHistorico(true)}} key={index}>
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

    <HistoricoGestiones modalAbiertoHistorico={modalAbiertoHistorico}  cerrarModal={() =>{setModalAbiertoHistorico(false)}} />
    
    <ModalFiltrar modalAbierto={modalAbierto} cerrarModal={() =>{setModalAbierto(false)}} />
  </>
  );
}

export default Tabla;