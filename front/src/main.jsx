import React from 'react'
import ReactDOM from 'react-dom/client'
import Tabla from './componentes/Tabla.jsx'
import { Encabezado } from './componentes/Encabezado.jsx'
import { BarraLaterarl } from './componentes/BarraLaterarl.jsx'
import { Estadisticas } from './componentes/Estadisticas.jsx'
import "./estilos/Main.css"
import { BotonVerde } from './componentes/BotonVerde.jsx'
import { SubirBD } from './componentes/SubirBD.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <Encabezado/>
    </header>

    <body>
      <div className='boton1'>
        <BarraLaterarl/>
      </div>
      <div>
        <Tabla/>
        <Estadisticas/>
      </div>
    </body>
  </React.StrictMode>,
)
