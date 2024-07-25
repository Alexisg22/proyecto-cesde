import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Tabla from './componentes/Tabla.jsx'
import { Encabezado } from './componentes/Encabezado.jsx'
import { BarraLaterarl } from './componentes/BarraLaterarl.jsx'
import { Estadisticas } from './componentes/Estadisticas.jsx'
import "./estilos/Main.css"

function App() {
  const [visibilidadColumna, setVisibilidadColumna] = useState({
    celular: true,
    nit: false,
    nombreCompleto: true,
    cantLlamadas: true,
    cantSMS: false,
    cantWhatsApps: false,
    cantGestiones: true,
    mejorGestion: true,
    estadoAspirante: true,
    diasHabilesUltGestion: false,
    fechaUltGestion: true,
    estadoUltGestion: true,
    celularAdicional: false,
  });

  const manejarCambioVisibilidadColumna = (nuevaVisibilidad) => {
    setVisibilidadColumna(nuevaVisibilidad);
  };

  return (
    <React.Fragment>
      <Encabezado />
      <main className="contenedorPrincipal">
        <BarraLaterarl onCambioVisibilidadColumna={manejarCambioVisibilidadColumna} visibilidadInicial={visibilidadColumna} />
        <div className="contenedorSecundario">
          <Tabla visibilidadColumna={visibilidadColumna} />
          <Estadisticas />
        </div>
      </main>
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App/> 
  </React.StrictMode>,
)
