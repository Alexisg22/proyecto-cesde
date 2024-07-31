import React from "react";
import { Encabezado } from "../componentes/Encabezado.jsx";
import "../estilos/Asesores.css";
import BuscarAsesores from "../componentes/BuscarAsesores.jsx";
import TablaAsesores from "../componentes/TablaAsesores.jsx";

export const Asesores = () => {
  return (
    <div className="asesoresMain">
      <div className="asesoresEncabezado">
        <Encabezado
          mostrarBotonSubirBD={false}
          mostrarBotonDescargarBD={false}
          mostrarBotonInicio={true}
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
