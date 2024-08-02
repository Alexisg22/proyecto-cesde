import React, { useState } from 'react'
import { BotonVerde } from './BotonVerde.jsx'
import { ModalSubirBD } from './ModalSubirBD.jsx'
import { useNavigate } from 'react-router-dom';
import { BotonNavegar } from './BotonNavegar.jsx';
import "../estilos/Encabezado.css"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


export const Encabezado = ({ ide, mostrarBotonSubirBD, mostrarBotonDescargarBD, mostrarBotonInicio, textoEncabezado, vista, tablaDescargar, nombreTablaDescargada }) => {

  const [modalAbierto, setModalAbierto] = useState(false)


  const navigate = useNavigate()

  const manejarClicBotonInicio = () => {
    navigate('/'); // Navega a la ruta /asesores
  };


  return (
    <header>
      <div className='contenedorPrincipal'>
        <div className='contenedorLogoAndes'>
          <img id='logoAndes' src="../../public/imagenes/AndesBPO.png" />
        </div>

        <div>
          <form id={vista}>
            <select className='filtroAspirante'>
              <option value="">General</option>
              <option value="empresas">Empresas</option>
              <option value="tecnicos">Técnicos</option>
              <option value="extensiones">Extensiones</option>             
            </select>
          </form>
        </div>

        <h1 id={ide} className='textoInicio'>{textoEncabezado}</h1>
        <div className='contenedorBotones'>
          <div className='btnSubirBD'>
            {mostrarBotonSubirBD && (
              <BotonVerde
                setModalAbierto={setModalAbierto}
                modalSubirBDs={true}
                texto={"Subir BD"}
                ide={'botonVerde'} />
            )}
          </div>

          <div className='contenedorInicio'>
            {mostrarBotonInicio && (
              <BotonNavegar
                onClick={manejarClicBotonInicio}
                texto={'Inicio'}
                ide={'botonInicio'}
              />
            )}
          </div>

          <div className='btnDescarga'>
            {mostrarBotonDescargarBD && (
              <ReactHTMLTableToExcel
              id="botonExportarExcel"
              className="btn btn-descargar"
              table={tablaDescargar}
              filename={nombreTablaDescargada}
              sheet="pagina 1"
              buttonText="Exportar a Excel"
              />
             
            )}
          </div>

        </div>

      </div>

      <ModalSubirBD
        modalAbierto={modalAbierto}
        cerrarModal={() => { setModalAbierto(false) }} />

    </header>
  )
}
