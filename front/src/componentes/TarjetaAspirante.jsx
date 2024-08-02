

export const TarjetaAspirante = ({aspirante}) => {
  return (
        <div>
            <h1>nombre_completo: {aspirante.nombre_completo}</h1>
            <h1>nit: {aspirante.nit}</h1>
            <h1>celular: {aspirante.celular}</h1>
            <h1>cantidad_llamadas: {aspirante.cantidad_llamadas}</h1>
            <h1>cantidad_mensajes_texto: {aspirante.cantidad_mensajes_texto}</h1>
            <h1>cantidad_whatsapp: {aspirante.cantidad_whatsapp}</h1>
            <h1>cantidad_gestiones: {aspirante.cantidad_gestiones}</h1>
            <h1>celular_adicional: {aspirante.celular_adicional}</h1>
            <h1>fecha_ultima_gestion: {aspirante.fecha_ultima_gestion}</h1>
            <h1>estado_ultima_gestion: {aspirante.estado_ultima_gestion}</h1>
            <h1>estado_aspirante: {aspirante.estado_aspirante}</h1>
            <hr />
            
         </div>
  )
}
