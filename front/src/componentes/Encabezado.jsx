import React, { useState } from 'react'
import { BotonVerde } from './BotonVerde.jsx'
import { ModalSubirBD } from './ModalSubirBD.jsx'
import { useNavigate } from 'react-router-dom';
import { BotonNavegar } from './BotonNavegar.jsx';
import "../estilos/Encabezado.css"


export const Encabezado = ({ ide, mostrarBotonSubirBD, mostrarBotonInicio, textoEncabezado, vista, setProcesoSelect, ocultarModalCargando, setModalOculto }) => {
  const [modalAbierto, setModalAbierto] = useState(false)


  const navigate = useNavigate()

  const manejarClicBotonInicio = () => {
    navigate('/inicio'); // Navega a la ruta /asesores
  };

  const seleccionarProceso = (e) =>{
    setProcesoSelect(e.target.value)
  }

  const manejarCerrarSesion = () => {
    localStorage.removeItem('token'); // Elimina el token del localStorage
    navigate('/'); // Redirige al usuario a la página de inicio o de login
    window.location.reload();
  };
  

  return (
    <header>
      <div className='contenedorPrincipal'>
        <div className='contenedorLogoAndes'>
        <img id='logoAndes' src="/imagenes/AndesBPO.png" alt="Logo Andes BPO" />
        </div>

        <div className='contenedorSelectProceso'>
          <form id={vista}>
            <select className='filtroAspirante' onChange={seleccionarProceso}>
              <option value="general">General</option>
              <option value="empresas">Empresas</option>
              <option value="tecnicos">Técnicos</option>
              <option value="extensiones">Extensiones</option>             
            </select>
          </form>
        </div>

        <h1 id={ide} className='textoInicio'>{textoEncabezado}</h1>
        <div className='contenedorBotones'>
          <button className='cerrarSesion' onClick={manejarCerrarSesion}>Cerrar Sesión</button>
          <div className='btnSubirBD'>
            {mostrarBotonSubirBD && (
              <BotonVerde
                setModalAbierto={setModalAbierto}
                modalSubirBDs={true}
                texto={"Subir BD"}
                ide={'botonVerde'} 
                ocultarModalCargando={ocultarModalCargando}
              />
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

        </div>

      </div>

      <ModalSubirBD
        modalAbierto={modalAbierto}
        cerrarModal={() => { setModalAbierto(false), setModalOculto(false)}} 
        
        />

    </header>
  )
}
