import React from 'react';
import '../estilos/Tabla.css';

function Tabla() {
  return (
    <main className="table" id="customers_table">
      <section className="table__header">
        <h1>Información clientes</h1>
        <div className="input-group">
          <input type="search" placeholder="Buscar Datos..." />
          <button className="search-button">Buscar</button>
        </div>
        <div className="export__file">
          <label htmlFor="export-file" className="export__file-btn" title="Export File"></label>
          <input type="checkbox" id="export-file" />
          <div className="export__file-options">
            <label>Exportar a &nbsp; &#10140;</label>
            <label htmlFor="export-file" id="toPDF">PDF</label>
            <label htmlFor="export-file" id="toJSON">JSON</label>
            <label htmlFor="export-file" id="toCSV">CSV</label>
            <label htmlFor="export-file" id="toEXCEL">EXCEL</label>
          </div>
        </div>
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>Celular</th>
              <th>Nit</th>
              <th>Nombre Completo</th>
              <th>Cant. Llamadas</th>
              <th>Cant. SMS</th>
              <th>Cant. WhatsApps</th>
              <th>Cant. Gestiones</th>
              <th>Mejor Gestión</th>
              <th>Estado Aspirante</th>
              <th>Dias Habiles Ult. Gestión</th>        
              <th>Fecha Ult. Gestión</th>
              <th>Est. Ult. Gestión</th>
              <th>Celular adicional 1</th>
              <th>Celular adicional 2</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td> </td>
              <td></td>
              <th><p className="status acepted">Aceptado</p></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><p className="status cancelled">Cancelado</p></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><p className="status process">En proceso</p></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><p className="status pending">Pendiente</p></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><p className="status pending">Pendiente</p></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><p className="status acepted">Aceptado</p></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><p className="status cancelled">Cancelado</p></td>
              <td></td>
              <td></td>
            </tr>           
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Tabla;