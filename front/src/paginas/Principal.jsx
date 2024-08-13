import React, { useEffect, useState } from 'react'
import { Encabezado } from '../componentes/Encabezado.jsx'
import { BarraLaterarl } from '../componentes/BarraLaterarl.jsx'
import { Estadisticas } from '../componentes/Estadisticas.jsx'
import Tabla from '../componentes/Tabla.jsx'
import "../estilos/Asesores.css"

export const Principal = () => {
    const [procesoSelect, setProcesoSelect] = useState('general')

    const [barraLateralKey, setBarraLateralKey] = useState(0)
    const [tablaKey, setTablaKey] = useState(0)
    const [visibilidadColumna, setVisibilidadColumna] = useState({
        'celular': true,
        'nit': false,
        'nombreCompleto': true,
        'cantidadLlamadas': true,
        'cantWhatsapps': false,
        'cantGestiones': true,
        'mejorGestión': true,
        'estadoAspirante': true,
        'diasUltGestión': false,
        'fechaUltGestión': true,
        'gestiónFinal': true,
        'tipificaciónGestiónFinal': true,
        'sede': false,
        'programaFormación': false,
    });

    const [estadisticas, setEstadisticas] = useState()

    useEffect(() =>{
        if(procesoSelect == 'general'){

            setEstadisticas({
                    contactabilidad: 5,
                    noContactabilidad: 10,
                    porcentajeConvercion: 15,
                    cantidadMatriculas: 20,
                    cantidadLiquidaciones: 25,
                    enGestion: 30,
                    sinGestion: 35,
                    matriculado: 40,
                    liquidacion: 45, 
                    cancelados: 50,
                    noGestionable: 55
                
            })
        }
        
        if(procesoSelect == 'empresas'){
          setEstadisticas(
            {
            contactabilidad: 60,
            noContactabilidad: 65,
            porcentajeConvercion: 70,
            cantidadMatriculas: 75,
            cantidadLiquidaciones: 80,
            enGestion: 85,
            sinGestion: 90,
            matriculado: 95,
            liquidacion: 100, 
            cancelados: 105,
            noGestionable: 110
        
          }
        )
        }
        if(procesoSelect == 'extensiones'){
          setEstadisticas(
            {
            contactabilidad: 115,
            noContactabilidad: 120,
            porcentajeConvercion: 125,
            cantidadMatriculas: 130,
            cantidadLiquidaciones: 135,
            enGestion: 140,
            sinGestion: 145,
            matriculado: 150,
            liquidacion: 155, 
            cancelados: 160,
            noGestionable: 165
        
          }
        )
        }
        if(procesoSelect == 'tecnicos') {
          setEstadisticas(
            {
            contactabilidad: 170,
            noContactabilidad: 175,
            porcentajeConvercion: 180,
            cantidadMatriculas: 185,
            cantidadLiquidaciones: 190,
            enGestion: 195,
            sinGestion: 200,
            matriculado: 205,
            liquidacion: 210, 
            cancelados: 215,
            noGestionable: 220
        
          }
        )
        }
    
    }, [procesoSelect])
    
    const manejarCambioVisibilidadColumna = (nuevaVisibilidad) => {
        setVisibilidadColumna(nuevaVisibilidad);
    };

    useEffect(() => {
        if(procesoSelect === 'empresas' || procesoSelect === 'general'){
            setVisibilidadColumna(prevState => ({
                ...prevState,
                'nitEmpresa': false // Inicialmente no visible
            }));
        } else {
            const { nitEmpresa, ...restVisibilidad } = visibilidadColumna;
            setVisibilidadColumna(restVisibilidad);
        }
    }, [procesoSelect])

  useEffect(() => {
      setBarraLateralKey(prevKey => prevKey + 1)
      setTablaKey(prevKey => prevKey + 1)
  }, [visibilidadColumna])


  return (
    <>
        <Encabezado 
        mostrarBotonSubirBD={true}
        mostrarBotonInicio={false}
        textoEncabezado={'Aspirantes'}
        ide={'aspirantes'}
        vista={'aspirantesFiltro'}
        setProcesoSelect={setProcesoSelect}
        />
    <main className="contenedorPrincipal">
      <BarraLaterarl 
      key={barraLateralKey}
      onCambioVisibilidadColumna={manejarCambioVisibilidadColumna} 
      visibilidadInicial={visibilidadColumna} 
      procesoSelect={procesoSelect}
      />
      <div className="contenedorSecundario">
        <Tabla key={tablaKey}
        visibilidadColumna={visibilidadColumna}
        procesoSelect={procesoSelect}  
        />
        <Estadisticas
        estadisticas={estadisticas}
         />
      </div>
    </main>
    </>
  )
}

export default Principal