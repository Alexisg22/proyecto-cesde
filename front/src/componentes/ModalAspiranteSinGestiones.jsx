import '../estilos/ModalAspiranteSinGestiones.css';

export const ModalAspiranteSinGestiones = ({abrirModalAspiranteSinGesiones, cerrarModal, texto}) => {
    
   
    if (!abrirModalAspiranteSinGesiones) return
    
    return (
        <>
        <div className='cotenedorModal'>
            <div className='modalAspiranteSinGestiones'>
                <div className="btnCerrarModalAspiranteSingestion">
                    <button onClick={cerrarModal}>X</button>
                </div>
                <div className='contenedorTexto'>
                    <p className='icono'>!</p>
                    <p className='textoAspiranteSinGestion'>{texto}</p>
                </div>
            </div>
        </div>
        </>
    )
}
