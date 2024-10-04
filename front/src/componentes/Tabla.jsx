import React, { useEffect, useState } from "react";
import { BotonVerde } from "./BotonVerde.jsx";
import { HistoricoGestiones } from "./HistoricoGestiones.jsx";
import { ModalFiltrar } from "./ModalFiltrar.jsx";
import { Paginador } from "./Paginador.jsx";
import { CSVLink } from "react-csv";
import {
  obtenerAspirantesProceso,
  obtenerTodosAspirantesConFiltros,
  obtenerUnAspirante,
} from "../api/aspirantes.api.js";
import "../estilos/Tabla.css";
import { ModalAspiranteSinGestiones } from "./ModalAspiranteSinGestiones.jsx";

function Tabla({
  visibilidadColumna,
  procesoSelect,
  mesSelect,
  modalOculto,
  setModalOculto,
  ocultarModalCargando,
}) {
  const [aspirantes, setAspirantes] = useState([]);
  const [aspirantesDescargar, setAspirantesDescargar] = useState([]);
  const [celularAspiranteSeleccionado, setCelularAspiranteSeleccionado] = useState("");
  const [cantidadFilas, setCantidadFilas] = useState(10);
  const [paginaActual, setPaginaActual] = useState(1);
  const [paginaActualizada, setPaginaActualizada] = useState(1);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modalAbiertoHistorico, setModalAbiertoHistorico] = useState(false);
  const [abrirModalAspiranteSinGesiones, setAbrirModalAspiranteSinGesiones] = useState(false);
  const indexFinal = paginaActual * cantidadFilas;
  const indexInicial = indexFinal - cantidadFilas;
  const nAspirantesPorPagina = aspirantes.slice(indexInicial, indexFinal);
  const [numeroPaginas, setNumeroPaginas] = useState();
  const [numeroPaginasTotales, setNumeroPaginasTotales] = useState();
  const [filtrosSeleccionados, setFiltrosSeleccionados] = useState([]);
  const [aplicarFiltrosAspirantes, setAplicarFiltrosAspirantes] = useState([]);
  const [inputBuscadorAspirante, setInputBuscadorAspirante] = useState("");
  const [buscarUnAspirante, setBuscarUnAspirante] = useState("");
  const [textoModal, setTextoModal] = useState("");
  const [cargando, setCargando] = useState(true);
  const [nombre, setNombre] = useState("noDescargar");

  const buscarAspirantesConFiltros = () => {
    setAplicarFiltrosAspirantes(filtrosSeleccionados);
    setModalAbierto(false);
  };
  
  useEffect(() => {
    setPaginaActual(1);
    setPaginaActualizada(1);
  }, [filtrosSeleccionados]);

  async function traerPaginas() {
    let respuesta = await obtenerTodosAspirantesConFiltros("", 1);
    const totalPaginas = respuesta.data.total_pages;
    setNumeroPaginasTotales(totalPaginas);
  }

  useEffect(() => {
    traerPaginas();
  }, [
    procesoSelect,
    mesSelect,
    aplicarFiltrosAspirantes,
    buscarUnAspirante,
    paginaActualizada,
  ]);

  async function cargarAspirantes() {
    if (inputBuscadorAspirante.length > 0) {
      let datosAspirantes;
      let datos;
      try {
        datosAspirantes = await obtenerUnAspirante(buscarUnAspirante);
        datos = datosAspirantes.data;
      } catch (error) {
        setTextoModal("No se encontro el aspirante buscado");
        setAbrirModalAspiranteSinGesiones(true);
      }

      if (datos != undefined) {
        const mapeado = [
          {
            celular: datos.celular,
            nit: datos.nit,
            nombreCompleto: datos.nombre_completo,
            correo: datos.correo,
            cantidadLlamadas: datos.cantidad_llamadas,
            cantWhatsapps: datos.cantidad_whatsapp,
            cantGestiones: datos.cantidad_gestiones,
            mejorGestión: datos.mejor_gestion,
            estadoUltimaGestion: datos.estado_ultima_gestion,
            diasUltGestión: datos.dias_ultima_gestion,
            fechaUltGestión: datos.fecha_ultima_gestion,
            gestiónFinal: datos.gestion_final,
            tipificacionUltimaGestion: datos.ultima_tipificacion,
            sede: datos.sede,
            programaFormación: datos.programa_formacion,
            nombreEmpresa: datos.nombre_empresa,
            mesIngreso: aspirante.mes_ingreso,
            fechaModificacion: aspirante.fecha_modificacion,
          },
        ];
        setNumeroPaginas(1);
        setAspirantes(mapeado);
      } else {
      }
    } else {
      let nuevoProceso = "";
      let procesoBusqueda = "";
      let entro= "";
      if (procesoSelect === "tecnicos") {
        nuevoProceso = "proceso-tecnico/";
        procesoBusqueda = "Técnicos";
      } else if (procesoSelect === "empresas") {
        nuevoProceso = "proceso-empresa/";
        procesoBusqueda = "Empresas";
      } else if (procesoSelect === "extensiones") {
        nuevoProceso = "proceso-extensiones/";
        procesoBusqueda = "extenciones";
      } else {
        nuevoProceso = "";
      }

      try {
        let respuesta;
        if (aplicarFiltrosAspirantes.length > 0) {
          let objetoFiltros = {
            procesoNombre: procesoBusqueda,
            cantidadLlamadas: "",
            cantidadWhatsapps: "",
            cantidadGestiones: "",
            mejorGestion: "",
            estadoUltimaGestion: "",
            diasUltimaGestion: "",
            fechaUltimaGestion: "",
            tipificacionGestionFinal: "",
            programaFormacion: "",
            sede: "",
            nombreEmpresa: "",
            mesIngreso: "",
            fechaModificacion: "",
          };

          aplicarFiltrosAspirantes.map((filtro) => {
            switch (filtro.filtro) {
              case "cantidad llamadas":
                objetoFiltros.cantidadLlamadas = filtro.valor;
                break;
              case "cantidad whatsapp":
                objetoFiltros.cantidadWhatsapps = filtro.valor;
                break;
              case "cantidad gestiones":
                objetoFiltros.cantidadGestiones = filtro.valor;
                break;
              case "mejor gestion":
                objetoFiltros.mejorGestion = filtro.valor;
                break;
              case "estado ultima gestion":
                objetoFiltros.estadoUltimaGestion = filtro.valor;
                break;
              case "dias ultima gestion":
                objetoFiltros.diasUltimaGestion = filtro.valor;
                break;
              case "fecha ultima gestion":
                objetoFiltros.fechaUltimaGestion = filtro.valor;
                break;
              case "tipificacion ultima gestion":
                objetoFiltros.tipificacionGestionFinal = filtro.valor;
                break;
              case "programa de formacion":
                objetoFiltros.programaFormacion = filtro.valor;
                break;
              case "sede":
                objetoFiltros.sede = filtro.valor;
                break;
              case "empresa":
                objetoFiltros.nombreEmpresa = filtro.valor;
                break;
              case "mes de ingreso":
                objetoFiltros.mesIngreso = filtro.valor;
                break;
              case "fecha modificacion":
                objetoFiltros.fechaModificacion = filtro.valor;
              default:
                break;
            }
          });
          respuesta = await obtenerTodosAspirantesConFiltros(
            objetoFiltros,
            paginaActualizada
          );
          entro = "donde no era"
        } else if (procesoSelect == "general" && mesSelect == "Mes") {
          respuesta = await obtenerAspirantesProceso(
            nuevoProceso,
            paginaActualizada
          );
          entro = "en la primera"
        } else if (mesSelect != "Mes") { 
          respuesta = await obtenerTodosAspirantesMes(mesSelect, paginaActual);
          entro = "en la segunda"
        } else if (procesoSelect != "general") {
          respuesta = await obtenerAspirantesProceso(
            nuevoProceso,
            paginaActualizada
          );
          entro = "en la tercera"
        }else if (procesoSelect != "general" && mesSelect != "Mes") {
          respuesta = await obtenerTodosAspirantesMesYProceso(nuevoProceso, mesSelect, paginaActualizada)
          entro = "ultima"
        }

        const paginas = respuesta.data.total_pages;
        setNumeroPaginas(paginas);
        const aspirantes = respuesta.data.results;
        console.log( aspirantes);
        console.log(entro)
        

        const mapeado = aspirantes.map((aspirante) => ({
          celular: aspirante.celular,
          nit: aspirante.nit,
          nombreCompleto: aspirante.nombre_completo,
          correo: aspirante.correo,
          cantidadLlamadas: aspirante.cantidad_llamadas,
          cantMensajesDeTexto: aspirante.cantidad_mensajes_texto,
          cantWhatsapps: aspirante.cantidad_whatsapp,
          cantGestiones: aspirante.cantidad_gestiones,
          mejorGestión: aspirante.mejor_gestion,
          estadoUltimaGestion: aspirante.estado_ultima_gestion,
          diasUltGestión: aspirante.dias_ultima_gestion,
          fechaUltGestión: aspirante.fecha_ultima_gestion,
          gestiónFinal: aspirante.gestion_final,
          tipificacionUltimaGestion: aspirante.ultima_tipificacion,
          sede: aspirante.sede,
          programaFormación: aspirante.programa_formacion,
          nombreEmpresa: aspirante.nombre_empresa,
          mesIngreso: aspirante.mes_ingreso,
          fechaModificacion: aspirante.fecha_modificacion,
        }));

        if (mapeado.length === 0) {
          setTextoModal(
            "No se encontraron aspirantes con los filtros seleccionados"
          );
          setAbrirModalAspiranteSinGesiones(true);
        } else {
          setAspirantes(mapeado);
        }
      } catch (e) {
      } finally {
        setCargando(false);
      }
    }
  }

  async function descargarAspirantes(paginas) {
    let paginaa = 1;
    let resultados = [];

    let procesoBusqueda = "";
    if (procesoSelect === "tecnicos") {
      procesoBusqueda = "Técnicos";
    } else if (procesoSelect === "empresas") {
      procesoBusqueda = "Empresas";
    } else if (procesoSelect === "extensiones") {
      procesoBusqueda = "extenciones";
    }

    if (aplicarFiltrosAspirantes.length > 0) {
      let objetoFiltros = {
        procesoNombre: procesoBusqueda,
        cantidadLlamadas: "",
        cantidadWhatsapps: "",
        cantidadGestiones: "",
        mejorGestion: "",
        estadoUltimaGestion: "",
        diasUltimaGestion: "",
        fechaUltimaGestion: "",
        tipificacionGestionFinal: "",
        programaFormacion: "",
        sede: "",
        nombreEmpresa: "",
        mesIngreso: "",
        fechaModificacion: "",
      };

      aplicarFiltrosAspirantes.map((filtro) => {
        switch (filtro.filtro) {
          case "cantidad llamadas":
            objetoFiltros.cantidadLlamadas = filtro.valor;
            break;
          case "cantidad whatsapp":
            objetoFiltros.cantidadWhatsapps = filtro.valor;
            break;
          case "cantidad gestiones":
            objetoFiltros.cantidadGestiones = filtro.valor;
            break;
          case "mejor gestion":
            objetoFiltros.mejorGestion = filtro.valor;
            break;
          case "estado ultima gestion":
            objetoFiltros.estadoUltimaGestion = filtro.valor;
            break;
          case "dias ultima gestion":
            objetoFiltros.diasUltimaGestion = filtro.valor;
            break;
          case "fecha ultima gestion":
            objetoFiltros.fechaUltimaGestion = filtro.valor;
            break;
          case "tipificacion ultima gestion":
            objetoFiltros.tipificacionGestionFinal = filtro.valor;
            break;
          case "programa de formacion":
            objetoFiltros.programaFormacion = filtro.valor;
            break;
          case "sede":
            objetoFiltros.sede = filtro.valor;
            break;
          case "empresa":
            objetoFiltros.nombreEmpresa = filtro.valor;
            break;
          case "mes de ingreso":
            objetoFiltros.mesIngreso = filtro.valor;
            break;
          case "fecha modificacion":
            objetoFiltros.fechaModificacion = filtro.valor;
          default:
            break;
        }
      });
      while (paginaa < paginas) {
        try {
          const datos = await obtenerTodosAspirantesConFiltros(
            objetoFiltros,
            paginaa
          );

          const datosTraidos = datos.data.results;

          resultados = [...resultados, ...datosTraidos];

          paginaa++;
        } catch (e) {
          break;
        }
      }

      const mapeado = resultados.map((aspirante) => ({
        celular: aspirante.celular,
        nit: aspirante.nit,
        nombreCompleto: aspirante.nombre_completo,
        correo: aspirante.correo,
        cantidadLlamadas: aspirante.cantidad_llamadas,
        cantMensajesDeTexto: aspirante.cantidad_mensajes_texto,
        cantWhatsapps: aspirante.cantidad_whatsapp,
        cantGestiones: aspirante.cantidad_gestiones,
        mejorGestión: aspirante.mejor_gestion,
        estadoUltimaGestion: aspirante.estado_ultima_gestion,
        diasUltGestión: aspirante.dias_ultima_gestion,
        fechaUltGestión: aspirante.fecha_ultima_gestion,
        gestiónFinal: aspirante.gestion_final,
        tipificacionUltimaGestion: aspirante.ultima_tipificacion,
        sede: aspirante.sede,
        programaFormación: aspirante.programa_formacion,
        nombreEmpresa: aspirante.nombre_empresa,
        mesIngreso: aspirante.mes_ingreso,
        fechaModificacion: aspirante.fecha_modificacion,
      }));

      setNombre("descargar");
      setAspirantesDescargar(mapeado);
    }
  }
  
  useEffect(() => {
    cargarAspirantes();

    if (numeroPaginas > 0) {
      descargarAspirantes(numeroPaginasTotales);
    }
  }, [
    procesoSelect,
    mesSelect,
    aplicarFiltrosAspirantes,
    buscarUnAspirante,
    paginaActualizada,
  ]);

  useEffect(() => {
    setNombre("noDescargar");
  }, [procesoSelect, mesSelect, aplicarFiltrosAspirantes, paginaActualizada]);

  const manejarClickFilaAspirantes = (celular, cantGestionesAspirante) => {
    if (cantGestionesAspirante === 0) {
      setTextoModal(
        "Al aspirante seleccionado no se le ha realizado ninguna gestión."
      );
      setAbrirModalAspiranteSinGesiones(true);
      return;
    } else {
      setCelularAspiranteSeleccionado(celular);
      setModalAbiertoHistorico(true);
    }
  };

  const columnas = [
    { id: "celular", etiqueta: "Celular" },
    { id: "nombreCompleto", etiqueta: "Nombre Completo" },
    { id: "nit", etiqueta: "Nit" },
    { id: "correo", etiqueta: "Correo" },
    { id: "cantidadLlamadas", etiqueta: "Cant. Llamadas" },
    { id: "cantWhatsapps", etiqueta: "Cant. WhatsApps" },
    { id: "cantGestiones", etiqueta: "Cant. Gestiones" },
    { id: "mejorGestión", etiqueta: "Mejor Gestión" },
    { id: "estadoUltimaGestion", etiqueta: "Estado Ult. Gestion" },
    { id: "diasUltGestión", etiqueta: "Dias Ult. Gestión" },
    { id: "fechaUltGestión", etiqueta: "Fecha Ult. Gestión" },
    { id: "gestiónFinal", etiqueta: "Gestión final" },
    {
      id: "tipificacionUltimaGestion",
      etiqueta: "Tipificación Ultima Gestión",
    },
    { id: "sede", etiqueta: "Sede" },
    { id: "programaFormación", etiqueta: "Programa de Formación" },
    { id: "nombreEmpresa", etiqueta: "Nombre empresa" },
    { id: "mesIngreso", etiqueta: "Mes de ingreso" },
    { id: "fechaModificacion", etiqueta: "Fecha Modificacion" },
  ];

  const encabezados = columnas
    .filter((columna) => visibilidadColumna[columna.id])
    .map((columna) => ({
      label: columna.etiqueta,
      key: columna.id,
    }));

  const datosFiltrados = aspirantesDescargar.map((row) => {
    const filaFiltrada = {};
    columnas.forEach((columna) => {
      if (visibilidadColumna[columna.id]) {
        filaFiltrada[columna.id] = row[columna.id];
      }
    });
    return filaFiltrada;
  });

  const obtenerCelularInput = (e) => {
    e.preventDefault();
    setBuscarUnAspirante(inputBuscadorAspirante);
  };

  useEffect(() => {
    if (inputBuscadorAspirante === "") {
      setBuscarUnAspirante("");
    }
  }, [inputBuscadorAspirante]);

  return (
    <>
      {/* Modal de carga */}
      {cargando && (
        <div
          className={`modal-cargando ${modalOculto ? "ocultarCargando" : ""}`}
        >
          <div className="modal-contenido">
            <p className="textoCargando">Cargando...</p>
          </div>
        </div>
      )}
      <main className="tabla" id="tablaClientes">
        <section className="encabezadoTabla">
          <h1>Información clientes</h1>
          <form className="espacioBuscador" onSubmit={obtenerCelularInput}>
            <input
              type="search"
              placeholder="Buscar un aspirante..."
              onChange={(e) => setInputBuscadorAspirante(e.target.value)}
            />
            <button type="submit" className="botonBuscar">
              Buscar
            </button>
          </form>
          <div className="filtrar">
            <BotonVerde
              setModalAbierto={setModalAbierto}
              modalAbierto={modalAbierto}
              modalSubirBDs={true}
              texto={"Filtrar"}
              ide={"botonFiltrar"}
              ocultarModalCargando={ocultarModalCargando}
            />
          </div>
          <CSVLink
            className={nombre}
            data={datosFiltrados}
            headers={encabezados}
            filename="Aspirantes.csv"
          >
            Exportar a CSV
          </CSVLink>
        </section>
        <section className="cuerpoTabla">
          <table className="tabla">
            <thead className="cabezaTabla">
              <tr>
                {columnas.map(
                  (columna) =>
                    visibilidadColumna[columna.id] && (
                      <th key={columna.id} id={columna.id}>
                        {columna.etiqueta}
                      </th>
                    )
                )}
              </tr>
            </thead>
            <tbody className="cuerpoTabla">
              {nAspirantesPorPagina.map((row, index) => (
                <tr
                  className="filaTablaAspirantes"
                  onDoubleClick={() => {
                    manejarClickFilaAspirantes(row.celular, row.cantGestiones);
                  }}
                  key={index}
                >
                  {columnas.map(
                    (columna) =>
                      visibilidadColumna[columna.id] && (
                        <td key={columna.id}>
                          {columna.id === "estadoUltimaGestion" ? (
                            <p className={row[columna.id]?.toLowerCase()}>
                              {row[columna.id]}
                            </p>
                          ) : (
                            row[columna.id]
                          )}
                        </td>
                      )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <Paginador
          paginaActual={paginaActualizada}
          setPaginaActual={setPaginaActualizada}
          numeroPaginas={numeroPaginas}
        />
      </main>
      <ModalAspiranteSinGestiones
        abrirModalAspiranteSinGesiones={abrirModalAspiranteSinGesiones}
        texto={textoModal}
        cerrarModal={() => {
          setAbrirModalAspiranteSinGesiones(false);
        }}
      />
      <HistoricoGestiones
        celularAspiranteSeleccionado={celularAspiranteSeleccionado}
        modalAbiertoHistorico={modalAbiertoHistorico}
        cerrarModal={() => {
          setModalAbiertoHistorico(false);
        }}
      />
      <ModalFiltrar
        buscarAspirantesConFiltros={buscarAspirantesConFiltros}
        filtrosSeleccionados={filtrosSeleccionados}
        setFiltrosSeleccionados={setFiltrosSeleccionados}
        modalAbierto={modalAbierto}
        cerrarModal={() => {
          setModalAbierto(false), setModalOculto(false);
        }}
      />
    </>
  );
}

export default Tabla;
