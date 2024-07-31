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
    { id: 'mejorGestión', etiqueta: 'Mejor Gestión' },
    { id: 'estadoAspirante', etiqueta: 'Estado Aspirante' },
    { id: 'diasHábilesUltGestión', etiqueta: 'Dias Hábiles Ult. Gestión' },
    { id: 'fechaUltGestión', etiqueta: 'Fecha Ult. Gestión' },
    { id: 'estadoUltGestión', etiqueta: 'Est. Ult. Gestión' },
    { id: 'celularAdicional', etiqueta: 'Celular Adicional' },
    { id: 'empresa', etiqueta: 'Empresa' },
    { id: 'sede', etiqueta: 'Sede' },
    { id: 'programaFormación', etiqueta: 'Programa de Formación' },
  ];

  const datos = [
    {
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Sofía Gómez',
      cantLlamadas: '3',
      cantMensajesDeTexto: '3',
      cantWhatsapps: '1',
      cantGestiones: '6',
      mejorGestión: 'No interesado',
      estadoAspirante: 'Cancelado',
      diasHábilesUltGestión: '1',
      fechaUltGestión: '23/07/2024',
      estadoUltGestión: 'No interesado',
      celularAdicional: '3002106542',
      empresa: 'Andes 1',
      sede: 'Rionegro',
      programaFormación: 'Programador',
    },
    {
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Sofía Gómez',
      cantLlamadas: '3',
      cantMensajesDeTexto: '2',
      cantWhatsapps: '1',
      cantGestiones: '6',
      mejorGestión: 'No interesado',
      estadoAspirante: 'Liquidado',
      diasHábilesUltGestión: '1',
      fechaUltGestión: '23/07/2024',
      estadoUltGestión: 'No interesado',
      celularAdicional: '3002106542',
      empresa: 'Andes 2',
      sede: 'Rionegro',
      programaFormación: 'Programador',
    },{
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Sofía Gómez',
      cantLlamadas: '3',
      cantMensajesDeTexto: '2',
      cantWhatsapps: '1',
      cantGestiones: '6',
      mejorGestión: 'No interesado',
      estadoAspirante: 'Matriculado',
      diasHábilesUltGestión: '1',
      fechaUltGestión: '23/07/2024',
      estadoUltGestión: 'No interesado',
      celularAdicional: '3002106542',
      empresa: 'Andes 3',
      sede: 'Rionegro',
      programaFormación: 'Programador',
    },
    {
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Sofía Gómez',
      cantLlamadas: '3',
      cantMensajesDeTexto: '2',
      cantWhatsapps: '1',
      cantGestiones: '6',
      mejorGestión: 'No interesado',
      estadoAspirante: 'En gestión',
      diasHábilesUltGestión: '1',
      fechaUltGestión: '23/07/2024',
      estadoUltGestión: 'No interesado',
      celularAdicional: '3002106542',
      empresa: 'Andes 2',
      sede: 'Rionegro',
      programaFormación: 'Programador',
    },{
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Sofía Gómez',
      cantLlamadas: '3',
      cantMensajesDeTexto: '2',
      cantWhatsapps: '1',
      cantGestiones: '6',
      mejorGestión: 'No interesado',
      estadoAspirante: 'Sin gestión',
      diasHábilesUltGestión: '1',
      fechaUltGestión: '23/07/2024',
      estadoUltGestión: 'No interesado',
      celularAdicional: '3002106542',
      empresa: 'Andes 3',
      sede: 'Rionegro',
      programaFormación: 'Programador',
    },,{
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Sofía Gómez',
      cantLlamadas: '3',
      cantMensajesDeTexto: '2',
      cantWhatsapps: '1',
      cantGestiones: '6',
      mejorGestión: 'No interesado',
      estadoAspirante: 'No gestionable',
      diasHábilesUltGestión: '1',
      fechaUltGestión: '23/07/2024',
      estadoUltGestión: 'No interesado',
      celularAdicional: '3002106542',
      empresa: 'Andes 3',
      sede: 'Rionegro',
      programaFormación: 'Programador',
    },
  ];

  const [modalAbierto, setModalAbierto] = useState(false)
  const [modalAbiertoHistorico, setModalAbiertoHistorico] = useState(false)

  return (
  <>
    <main className="tabla" id="tablaClientes">
      <section className="encabezadoTabla">
        <h1>Información clientes</h1>
        <div className="espacioBuscador">
          <input type="search" placeholder="Buscar un aspirante..." />
          <button className="botonBuscar">Buscar</button>
        </div>
        <div className='filtrar'>
        <BotonVerde setModalAbierto={setModalAbierto} modalAbierto={modalAbierto} modalSubirBDs={true} texto={"Filtrar"} ide={'botonFiltrar'}/>
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