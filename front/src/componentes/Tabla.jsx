import React from 'react';
import '../estilos/Tabla.css';
import { BotonVerde } from './BotonVerde';

function Tabla({}) {
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
        <table>
          <thead>
            <tr>
              <th id='celular' estado='{chequeado}' >Celular</th>
              <th id='nit' estado='{chequeado}'>Nit</th>
              <th id='nombre' estado='{chequeado}'>Nombre Completo</th>
              <th id='cantLlamadas' estado='{chequeado}'>Cant. Llamadas</th>
              <th id='cantSMS' estado='{chequeado}'>Cant. SMS</th>
              <th id='cantWhatsApps' estado='{chequeado}'>Cant. WhatsApps</th>
              <th id='cantGestiones' estado='{chequeado}'>Cant. Gestiones</th>
              <th id='mejorGestion' estado='{chequeado}'>Mejor Gestión</th>
              <th id='estadoAspirante' estado='{chequeado}'>Estado Aspirante</th>
              <th id='diasHabilesUltGestion' estado='{chequeado}'>Dias Habiles Ult. Gestión</th>        
              <th id='fechaUltGestion' estado='{chequeado}'>Fecha Ult. Gestión</th>
              <th id='estadoUltGestion' estado='{chequeado}'>Est. Ult. Gestión</th>
              <th id='celularAdicional' estado='{chequeado}'>Celular Adicional </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>asdad</td>
              <td>awdads</td>
              <td>adsdawdad</td>
              <td>asda</td>
              <td>asd</td>
              <td>asdsa</td>
              <td>ads</td>
              <td>dsad</td>
              <td>wq</td>
              <td> qwe</td>
              <td>rqw</td>
              <td><p className="matriculado">Matriculado</p></td>
              <td>qrw</td>
            </tr>         
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Tabla;