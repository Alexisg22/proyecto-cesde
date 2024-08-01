import React from "react";
import '../estilos/Paginador.css'

export const Paginador = ({ paginaActual, setPaginaActual, numeroPaginas }) => {
  const avanzarPagina = () => {
    if (paginaActual != numeroPaginas) setPaginaActual(paginaActual + 1);
  };

  const retrocederPagina = () => {
    if (paginaActual != 1) setPaginaActual(paginaActual - 1);
  };

  return (
    <div className="contenedorPaginador">
      <button onClick={retrocederPagina}> {'<<'} </button>

      <p>
        {paginaActual} / {numeroPaginas}
      </p>

      <button onClick={avanzarPagina}> {'>>'} </button>
    </div>
  );
};
