import React,{ useEffect, useState } from 'react';
import { BotonVerde } from './BotonVerde.jsx';
import { HistoricoGestiones } from './HistoricoGestiones.jsx';
import { ModalFiltrar } from './ModalFiltrar.jsx';
import { Paginador } from './Paginador.jsx';
// import { obtenerTodosAspirantes } from '../assets/api/aspirantes.api.js';
import { TarjetaAspirante } from './TarjetaAspirante.jsx';
import '../estilos/Tabla.css'

export function Tabla({ visibilidadColumna}) {

    const [aspirantes, setAspirantes] = useState([]);

    // useEffect( () => {
        
    //     async function cargarEstudiantes () {
    //         const respuesta = await obtenerTodosAspirantes(); 
    //         setAspirantes(respuesta.data);
    //     }
    //     cargarEstudiantes();
    // }, [])

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
    { id: 'diasUltGestión', etiqueta: 'Dias Ult. Gestión' },
    { id: 'fechaUltGestión', etiqueta: 'Fecha Ult. Gestión' },
    { id: 'tipificaciónUltGestión', etiqueta: 'Tip. Ult. Gestión' },
    { id: 'celularAdicional', etiqueta: 'Celular Adicional' },
    { id: 'empresa', etiqueta: 'Empresa' },
    { id: 'sede', etiqueta: 'Sede' },
    { id: 'programaFormación', etiqueta: 'Programa de Formación' },
    { id: 'nitEmpresa', etiqueta: 'Nit empresa' },
  ];


  const datos = [
    {
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Jaime de jesus Gomez buenavista',
      cantLlamadas: '3',
      cantMensajesDeTexto: '3',
      cantWhatsapps: '1',
      cantGestiones: '6',
      mejorGestión: 'No interesado',
      estadoAspirante: 'Cancelado',
      diasUltGestión: '1',
      fechaUltGestión: '23/07/2024',
      tipificaciónUltGestión: 'No interesado',
      celularAdicional: '3002106542',
      empresa: 'Andes 1',
      sede: 'Rionegro',
      programaFormación: 'Programador',
    },
    {
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Jaime de jesus Gomez buenavista',
      cantLlamadas: '3',
      cantMensajesDeTexto: '3',
      cantWhatsapps: '1',
      cantGestiones: '6',
      mejorGestión: 'No interesado',
      estadoAspirante: 'Cancelado',
      diasUltGestión: '1',
      fechaUltGestión: '23/07/2024',
      tipificaciónUltGestión: 'No interesado',
      celularAdicional: '3002106542',
      empresa: 'Andes 1',
      sede: 'Rionegro',
      programaFormación: 'Programador',
    },
    {
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Jaime de jesus Gomez buenavista',
      cantLlamadas: '3',
      cantMensajesDeTexto: '3',
      cantWhatsapps: '1',
      cantGestiones: '6',
      mejorGestión: 'No interesado',
      estadoAspirante: 'Cancelado',
      diasUltGestión: '1',
      fechaUltGestión: '23/07/2024',
      tipificaciónUltGestión: 'No interesado',
      celularAdicional: '3002106542',
      empresa: 'Andes 1',
      sede: 'Rionegro',
      programaFormación: 'Programador',
    },
    {
      celular: '3162840984',
      nit: '34567890',
      nombreCompleto: 'Jaime de jesus Gomez buenavista',
      cantLlamadas: '3',
      cantMensajesDeTexto: '3',
      cantWhatsapps: '1',
      cantGestiones: '6',
      mejorGestión: 'No interesado',
      estadoAspirante: 'Cancelado',
      diasUltGestión: '1',
      fechaUltGestión: '23/07/2024',
      tipificaciónUltGestión: 'No interesado',
      celularAdicional: '3002106542',
      empresa: 'Andes 1',
      sede: 'Rionegro',
      programaFormación: 'Programador',
    },
  ];
  const [cantiadFilas, setCantidadFilas] = useState(10)
  const [paginaActual, setPaginaActual] = useState(1)

  const  indexFinal = paginaActual * cantiadFilas
  const  indexInicial = indexFinal - cantiadFilas  
  
  const nAspirantesPorPagina = datos.slice(indexInicial, indexFinal)
  const numeroPaginas = Math.ceil(datos.length / cantiadFilas)

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
        <table className='tabla' id="tablaAspirantes">
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
            {nAspirantesPorPagina.map((row, index) => (
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
      <Paginador 
        paginaActual = {paginaActual}
        setPaginaActual = {setPaginaActual}
        numeroPaginas = {numeroPaginas}
        />
      

    </main>
    
    <table className='tablaEscondida' id="tablaAspirantesEscondida">
          <thead className='cabezaTablaEscondida'>
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
          <tbody className='cuerpoTablaEscondida'>
            {datos.map((row, index) => (
              <tr className='filaTablaAspirantesEscondida' onClick={() =>{setModalAbiertoHistorico(true)}} key={index}>
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

  
    <HistoricoGestiones modalAbiertoHistorico={modalAbiertoHistorico}  cerrarModal={() =>{setModalAbiertoHistorico(false)}} />
    
    <ModalFiltrar modalAbierto={modalAbierto} cerrarModal={() =>{setModalAbierto(false)}} />

    <div>
      {aspirantes.map(aspirante => (
          <TarjetaAspirante aspirante={aspirante} key={aspirante.id} />
      ))}
  </div>
  </>
  );
}

export default Tabla;