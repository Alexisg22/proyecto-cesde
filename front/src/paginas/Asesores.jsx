import React, { useEffect, useState } from 'react';
import { Encabezado } from "../componentes/Encabezado.jsx";
import BuscarAsesores from "../componentes/BuscarAsesores.jsx";
import TablaAsesores from "../componentes/TablaAsesores.jsx";
import "../estilos/Asesores.css";
import { obtenerTodosAsesores } from '../api/aspirantes.api.js';

const columnas = [
  { id: 'idWolkvox', etiqueta: 'Id Wolkvox' },
  { id: 'nombreCompleto', etiqueta: 'Nombre Completo' },
  { id: 'cantLlamadas', etiqueta: 'Cant. Llamadas' },
  { id: 'cantWhatsapps', etiqueta: 'Cant. WhatsApps' },
  { id: 'cantGestiones', etiqueta: 'Cant. Gestiones' },
  { id: 'cantMatriculas', etiqueta: 'Cant. Matrículas' },
  { id: 'cantLiquidaciones', etiqueta: 'Cant. Liquidaciones' },
];

const encabezados = columnas.map(columna => ({
  label: columna.etiqueta,
  key: columna.id
}));

export const Asesores = () => {

  // State para guardar los asesores obtenidos de la API
const [asesores, setAsesores] = useState([]);

  useEffect(() => {

    async function cargarAsesores() {
      const respuesta = await obtenerTodosAsesores();
      const asesores = respuesta.data;

      const mapeado = asesores.map((asesor) => ({

        idWolkvox: asesor.id,
        nombreCompleto: asesor.nombre_completo,
        cantLlamadas: '0',
        cantMensajesDeTexto: '2',
        cantWhatsapps: '3',
        cantGestiones: '5',
        cantMatriculas: '123',
        cantLiquidaciones: '2',
      }))
      
      
      setAsesores(mapeado)
    }
    cargarAsesores();
  }, [])
  return (
    <div className="asesoresMain">
      <div className="asesoresEncabezado">
        <Encabezado
          mostrarBotonInicio={true}
          textoEncabezado={'Asesores'}
          ide={'asesores'}
          vista={'asesoresFiltro'}
        />
      </div>

      <hr />
      <div className="asesoresContenedor">
        <div>
          <div className="asesoresBuscador">
            <BuscarAsesores 
              datos={asesores}
              encabezados={encabezados}
            />
          </div>
        </div>
        
        <div className="asesoresTabla">
          <TablaAsesores 
          columnasTabla={columnas}
          datosTabla={asesores}
          />
        </div>

      </div>
    </div>
  );
};
