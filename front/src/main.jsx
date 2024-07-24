import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Tabla from './componentes/Tabla.jsx'
import { Encabezado } from './componentes/Encabezado.jsx'
import { BarraLaterarl } from './componentes/BarraLaterarl.jsx'
import { Estadisticas } from './componentes/Estadisticas.jsx'
import "./estilos/Main.css"
import { BotonVerde } from './componentes/BotonVerde.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <Encabezado/>
    </header>

    <body>
      <div>
        <BarraLaterarl/>
      </div>
      <div>
        <Tabla/>
        <Estadisticas/>
      </div>
    </body>
   
    {/* <footer>
      <Estadisticas/>
    </footer> */}
  </React.StrictMode>,
)
