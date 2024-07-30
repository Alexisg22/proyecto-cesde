import React,{ useState } from 'react';
import '../estilos/TablaAsesores.css';
import { BotonVerde } from './BotonVerde.jsx';
import { HistoricoGestiones } from './HistoricoGestiones.jsx';
import { ModalFiltrar } from './ModalFiltrar.jsx';

function TablaAsesores({ visibilidadColumna }) {
    const columnas = [
      { id: 'idWolkvox', etiqueta: 'Id Wolkvox' },
      { id: 'nombreCompleto', etiqueta: 'Nombre Completo' },
      { id: 'cantLlamadas', etiqueta: 'Cant. Llamadas' },
      { id: 'cantMensajesDeTexto', etiqueta: 'Cant. SMS' },
      { id: 'cantWhatsapps', etiqueta: 'Cant. WhatsApps' },
      { id: 'cantGestiones', etiqueta: 'Cant. Gestiones' },
      { id: 'cantMatriculas', etiqueta: 'Cant. Matriculas' },
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
  
    const [modalAbierto, setModalAbierto] = useState(false)
    const [modalAbiertoHistorico, setModalAbiertoHistorico] = useState(false)
  
    return (
    <>
      <main className="tabla" id="tablaAsesores">
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
                <tr className='filaTablaAsesores' onClick={() =>{setModalAbiertoHistorico(true)}} key={index}>
                  {columnas.map(columna => 
                    visibilidadColumna[columna.id] && (
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
  
      <HistoricoGestiones modalAbiertoHistorico={modalAbiertoHistorico}  cerrarModal={() =>{setModalAbiertoHistorico(false)}} />
      
      <ModalFiltrar modalAbierto={modalAbierto} cerrarModal={() =>{setModalAbierto(false)}} />
    </>
    );
  }
  
  export default TablaAsesores;
