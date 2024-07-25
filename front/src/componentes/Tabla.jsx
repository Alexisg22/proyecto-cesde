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
              <th id='celular' estado='{chequeado}'>Celular</th>
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
              <td>3162840984</td>
              <td>34567890</td>
              <td>Sofía Gómez</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>6</td>
              <td>No intereado</td>
              <td><p className="cancelado">Cancelado</p></td>
              <td>1</td>
              <td>23/07/2024</td>
              <td>No intereado</td>
              <td>3002106542</td>
            </tr>         
            <tr>
              <td>3001724890</td>
              <td>87654321</td>
              <td>Mateo Fernández</td>
              <td>8</td>
              <td>6</td>
              <td>6</td>
              <td>20</td>
              <td>Interesado</td>
              <td><p className="liquidado">Liquidado</p></td>
              <td>2</td>
              <td>22/07/2024</td>
              <td>Buzon de boz</td>
              <td></td>
            </tr> 
            <tr>
              <td>3109623890</td>
              <td>23456789</td>
              <td>Lucía Rodríguez</td>
              <td>10</td>
              <td>9</td>
              <td>3</td>
              <td>22</td>
              <td>Interesado</td>
              <td><p className="matriculado">Matriculado</p></td>
              <td>3</td>
              <td>21/07/2024</td>
              <td>Interesado</td>
              <td>3142808726</td>
            </tr> 
            <tr>
              <td>3112458906</td>
              <td>45678901</td>
              <td>Alejandro Sánchez</td>
              <td>3</td>
              <td>3</td>
              <td>2</td>
              <td>8</td>
              <td>Interesado</td>
              <td><p className="matriculado">Matriculado</p></td>
              <td>1</td>
              <td>23/07/2024</td>
              <td>Interesado</td>
              <td></td>
            </tr> 
            <tr>
              <td>3205371099</td>
              <td>12345678</td>
              <td>Emma Moreno</td>
              <td>4</td>
              <td>1</td>
              <td>0</td>
              <td>5</td>
              <td>MSM</td>
              <td><p className="cancelado">Cancelado</p></td>
              <td>1</td>
              <td>23/072024</td>
              <td>Buzon de</td>
              <td></td>
            </tr> 
            <tr>
              <td>3227439836</td>
              <td>98765432</td>
              <td>Valentina Vega</td>
              <td>2</td>
              <td>1</td>
              <td>1</td>
              <td>4</td>
              <td>Volver a llamar</td>
              <td><p className="liquidado">Liquidado</p></td>
              <td>2</td>
              <td>22/07/2024</td>
              <td>No interesado</td>
              <td></td>
            </tr> 
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Tabla;