import React, { useEffect, useState } from 'react'
import { Encabezado } from '../componentes/Encabezado.jsx'
import { BarraLaterarl } from '../componentes/BarraLaterarl.jsx'
import { Estadisticas } from '../componentes/Estadisticas.jsx'
import Tabla from '../componentes/Tabla.jsx'
import "../estilos/Asesores.css"
import { Paginador } from '../componentes/Paginador.jsx'

export const Principal = () => {
    const [procesoSelect, setProcesoSelect] = useState('general')
    const [barraLateralKey, setBarraLateralKey] = useState(0)
    const [tablaKey, setTablaKey] = useState(0)
    const [visibilidadColumna, setVisibilidadColumna] = useState({
        'celular': true,
        'nit': false,
        'nombreCompleto': true,
        'cantLlamadas': true,
        'cantMensajesDeTexto': false,
        'cantWhatsapps': false,
        'cantGestiones': true,
        'mejorGestión': true,
        'estadoAspirante': true,
        'diasUltGestión': false,
        'fechaUltGestión': true,
        'tipificaciónUltGestión': true,
        'celularAdicional': false,
        'sede': false,
        'programaFormación': false,
    });
    
    const manejarCambioVisibilidadColumna = (nuevaVisibilidad) => {
        setVisibilidadColumna(nuevaVisibilidad);
    };

    useEffect(() => {
        console.log(procesoSelect)
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
        <div>
            <Encabezado 
                mostrarBotonSubirBD={true}
                mostrarBotonDescargarBD={true}
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
                    <Tabla 
                        key={tablaKey}
                        visibilidadColumna={visibilidadColumna}  
                        procesoSelect={procesoSelect}
                    />
                    <Estadisticas />
                </div>
            </main>
        </div>
    )
}

export default Principal