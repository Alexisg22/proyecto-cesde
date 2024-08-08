import React from "react";
import { Encabezado } from "../componentes/Encabezado.jsx";
import BuscarAsesores from "../componentes/BuscarAsesores.jsx";
import TablaAsesores from "../componentes/TablaAsesores.jsx";
import "../estilos/Asesores.css";

const columnas = [
  { id: 'idWolkvox', etiqueta: 'Id Wolkvox' },
  { id: 'nombreCompleto', etiqueta: 'Nombre Completo' },
  { id: 'cantLlamadas', etiqueta: 'Cant. Llamadas' },
  { id: 'cantMensajesDeTexto', etiqueta: 'Cant. SMS' },
  { id: 'cantWhatsapps', etiqueta: 'Cant. WhatsApps' },
  { id: 'cantGestiones', etiqueta: 'Cant. Gestiones' },
  { id: 'cantMatriculas', etiqueta: 'Cant. Matrículas' },
  { id: 'cantLiquidaciones', etiqueta: 'Cant. Liquidaciones' },
];

const encabezados = columnas.map(columna => ({
  label: columna.etiqueta,
  key: columna.id
}));

// Datos de ejemplo (reemplazar con tus datos reales)
const datos = [
  {
    idWolkvox: '3162840984',
    nombreCompleto: 'Sofíaaaa Gómez',
    cantLlamadas: '3',
    cantMensajesDeTexto: '3',
    cantWhatsapps: '1',
    cantGestiones: '7',
    cantMatriculas: '1',
    cantLiquidaciones: '6',
  },
  {
    idWolkvox: '3162840984',
    nombreCompleto: 'Sofía Ggggómez',
    cantLlamadas: '3',
    cantMensajesDeTexto: '3',
    cantWhatsapps: '1',
    cantGestiones: '7',
    cantMatriculas: '2',
    cantLiquidaciones: '5',
  },{
    idWolkvox: '3162840984',
    nombreCompleto: 'Sofía Gómez',
    cantLlamadas: '33',
    cantMensajesDeTexto: '3',
    cantWhatsapps: '1',
    cantGestiones: '7',
    cantMatriculas: '3',
    cantLiquidaciones: '4',
  },
  {
    idWolkvox: '3162840984',
    nombreCompleto: 'Sofía Gómez',
    cantLlamadas: '3',
    cantMensajesDeTexto: '3',
    cantWhatsapps: '1',
    cantGestiones: '7',
    cantMatriculas: '3',
    cantLiquidaciones: '4',
  },
  {
    idWolkvox: '3162840984',
    nombreCompleto: 'Sofía Gómez',
    cantLlamadas: '3',
    cantMensajesDeTexto: '3',
    cantWhatsapps: '1',
    cantGestiones: '7',
    cantMatriculas: '3',
    cantLiquidaciones: '4',
  },
  {
    idWolkvox: '3162840984',
    nombreCompleto: 'Sofía Gómez',
    cantLlamadas: '3',
    cantMensajesDeTexto: '3',
    cantWhatsapps: '1',
    cantGestiones: '7',
    cantMatriculas: '3',
    cantLiquidaciones: '4',
  },
  {
    idWolkvox: '3162840984',
    nombreCompleto: 'Sofía Gómez',
    cantLlamadas: '3',
    cantMensajesDeTexto: '3',
    cantWhatsapps: '1',
    cantGestiones: '7',
    cantMatriculas: '3',
    cantLiquidaciones: '4',
  },
  {
    idWolkvox: '3162840984',
    nombreCompleto: 'Jaime de jesus Gomez buenavista',
    cantLlamadas: '3',
    cantMensajesDeTexto: '3',
    cantWhatsapps: '1',
    cantGestiones: '7',
    cantMatriculas: '3',
    cantLiquidaciones: '4',
  },
  
];


export const Asesores = () => {
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
              datos={datos}
              encabezados={encabezados}
            />
          </div>
        </div>
        
        <div className="asesoresTabla">
          <TablaAsesores 
          columnasTabla={columnas}
          datosTabla={datos}
          />
        </div>

      </div>
    </div>
  );
};
