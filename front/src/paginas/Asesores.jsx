import React from "react";
import { Encabezado } from "../componentes/Encabezado.jsx";
import BuscarAsesores from "../componentes/BuscarAsesores.jsx";
import TablaAsesores from "../componentes/TablaAsesores.jsx";
import "../estilos/Asesores.css";


export const Asesores = () => {
  return (
    <div className="asesoresMain">
      <div className="asesoresEncabezado">
        <Encabezado
          mostrarBotonInicio={true}
          mostrarBotonDescargarTabla={true}
          textoEncabezado={'Asesores'}
          ide={'asesores'}
          vista={'asesoresFiltro'}
          tablaDescargar={'tablaAsesores'}
          nombreTablaDescargada={'Datos de Asesores'}
        />
      </div>

      <hr />
      <div className="asesoresContenedor">
        <div className="asesoresBuscador">
          <BuscarAsesores />
        </div>

        <div className="asesoresTabla">
          <TablaAsesores />
        </div>
      </div>
    </div>
  );
};
