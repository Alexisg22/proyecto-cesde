import React,{ useEffect, useState } from 'react';
import '../estilos/Tabla.css';
import { BotonVerde } from './BotonVerde.jsx';
import { HistoricoGestiones } from './HistoricoGestiones.jsx';
import { ModalFiltrar } from './ModalFiltrar.jsx';
import { Paginador } from './Paginador.jsx';
import { CSVLink } from "react-csv";
import { obtenerTodosAspirantes } from '../api/aspirantes.api.js';
import '../estilos/Tabla.css';

function Tabla({ visibilidadColumna, procesoSelect} ) {

    const [aspirantes, setAspirantes] = useState([]);

    useEffect( () => {
        
        async function cargarAspirantes () {
            const respuesta = await obtenerTodosAspirantes();
            const aspirantes = respuesta.data;

            const mapeado = aspirantes.map((aspirante) => ({
          
              celular: aspirante.celular,
              nit : aspirante.nit,
              nombreCompleto : aspirante.nombre_completo,
              cantidadLlamadas: aspirante.cantidad_llamadas,
              cantMensajesDeTexto: aspirante.cantidad_mensajes_texto,
              cantWhatsapps: aspirante.cantidad_whatsapp,
              cantGestiones: aspirante.cantidad_gestiones,
              mejorGestión: 'No interesado',
              estadoAspirante: aspirante.estado_aspirante,
              diasUltGestión: '1',
              fechaUltGestión: aspirante.fecha_ultima_gestion,
              tipificaciónUltGestión: aspirante.estado_ultima_gestion,
              celularAdicional: aspirante.celular_adicional,
              empresa: 'Andes 1',
              sede: 'Rionegro',
              programaFormación: 'Programador',
              
              
            }))
            setAspirantes(mapeado)
        }
        cargarAspirantes();
    }, [])

    useEffect(() => {
      if (procesoSelect === 'general') {
        setAspirantes(aspirantes);
      } else if (procesoSelect === 'empresas') {
        setAspirantes(aspirantes.filter(aspirante => aspirante.empresa)); // Adjust filter as needed
      } else if (procesoSelect === 'extensiones') {
        setAspirantes(aspirantes.filter(aspirante => aspirante.sede)); // Adjust filter as needed
      } else if (procesoSelect === 'tecnicos') {
        setAspirantes(aspirantes.filter(aspirante => aspirante.programaFormación)); // Adjust filter as needed
      }
    }, [procesoSelect, aspirantes]);

  const columnas = [
    { id: 'celular', etiqueta: 'Celular' },
    { id: 'nit', etiqueta: 'Nit' },
    { id: 'nombreCompleto', etiqueta: 'Nombre Completo' },
    { id: 'cantidadLlamadas', etiqueta: 'Cant. Llamadas' },
    { id: 'cantMensajesDeTexto', etiqueta: 'Cant. SMS' },
    { id: 'cantWhatsapps', etiqueta: 'Cant. WhatsApps' },
    { id: 'cantGestiones', etiqueta: 'Cant. Gestiones' },
    { id: 'mejorGestión', etiqueta: 'Mejor Gestión' },
    { id: 'estadoAspirante', etiqueta: 'Estado Aspirante' },
    { id: 'diasUltGestión', etiqueta: 'Dias Ult. Gestión' },
    { id: 'fechaUltGestión', etiqueta: 'Fecha Ult. Gestión' },
    { id: 'gestionFinal', etiqueta: 'Gestión final' },
    { id: 'celularAdicional', etiqueta: 'Celular Adicional' },
    { id: 'empresa', etiqueta: 'Empresa' },
    { id: 'sede', etiqueta: 'Sede' },
    { id: 'programaFormación', etiqueta: 'Programa de Formación' },
    { id: 'nitEmpresa', etiqueta: 'Nit empresa' },
  ];

  const encabezados = columnas
  .filter(columna => visibilidadColumna[columna.id])
  .map(columna => ({
    label: columna.etiqueta,
    key: columna.id
  }));
  
  const [cantiadFilas, setCantidadFilas] = useState(10)
  const [paginaActual, setPaginaActual] = useState(1)

  const  indexFinal = paginaActual * cantidadFilas
  const  indexInicial = indexFinal - cantidadFilas  
  
  const nAspirantesPorPagina = aspirantes.slice(indexInicial, indexFinal)
  const numeroPaginas = Math.ceil(aspirantes.length / cantiadFilas)

  const [modalAbierto, setModalAbierto] = useState(false)
  const [modalAbiertoHistorico, setModalAbiertoHistorico] = useState(false)

  const datosFiltrados = aspirantes.map(row => {
    const filaFiltrada = {};
    columnas.forEach(columna => {
      if (visibilidadColumna[columna.id]) {
        filaFiltrada[columna.id] = row[columna.id];
      }
    });
    return filaFiltrada;
  });


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
        <CSVLink className="descargar" data={datosFiltrados} headers={encabezados} filename="Aspirantes.csv">Exportar a CSV</CSVLink>
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
    <HistoricoGestiones modalAbiertoHistorico={modalAbiertoHistorico}  cerrarModal={() =>{setModalAbiertoHistorico(false)}} />
    
    <ModalFiltrar modalAbierto={modalAbierto} cerrarModal={() =>{setModalAbierto(false)}} />
  </>
  );
}

export default Tabla
