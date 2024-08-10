import '../estilos/ModalAspiranteSinGestiones.css';

export const ModalAspiranteSinGestiones = ({abrirModalAspiranteSinGesiones, cerrarModal}) => {
    
   
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
                    <p className='textoAspiranteSinGestion'>Al aspirante seleccionado no se le ha realizado ninguna gestión.</p>
                </div>
            </div>
        </div>
        </>
    )
}
