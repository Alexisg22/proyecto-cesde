import React, { useState } from 'react'
import { BotonVerde } from './BotonVerde.jsx'
import { ModalSubirBD } from './ModalSubirBD.jsx'
import { useNavigate } from 'react-router-dom';
import { BotonNavegar } from './BotonNavegar.jsx';
import "../estilos/Encabezado.css"


export const Encabezado = ({ ide, mostrarBotonSubirBD, mostrarBotonDescargarBD, mostrarBotonInicio, textoEncabezado, mostrarBotonDescargarTabla }) => {

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

          <div className='btnDescarga'>
            {mostrarBotonDescargarBD && (
              <BotonVerde
                texto={"Descargar BD"}
                ide={'botonBlanco'} />
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

          <div className='contenedorDescargarTabla'>
            {mostrarBotonDescargarTabla && (
              <BotonNavegar
                texto={'Descargar tabla'}
                ide={'botonDescargarTabla'}
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
