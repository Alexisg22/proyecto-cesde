import React from 'react'
import ReactDOM from 'react-dom/client'
import { BarraLaterarl } from './componentes/BarraLaterarl.jsx'
import { Encabezado } from './componentes/Encabezado.jsx'
import { Estadisticas } from './componentes/Estadisticas.jsx'
import "./estilos/Index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Encabezado />
    <BarraLaterarl/>
    <Estadisticas />
  </React.StrictMode>,
)
