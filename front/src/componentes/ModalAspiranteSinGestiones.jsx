import '../estilos/ModalAspiranteSinGestiones.css';
import { useEffect } from 'react';

export const ModalAspiranteSinGestiones = ({abrirModalAspiranteSinGesiones, cerrarModal, texto}) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                cerrarModal(); // Llama a la función cerrarModal si se presiona Escape
            }
        };

        // Agrega el evento keydown cuando el modal se monta
        document.addEventListener('keydown', handleKeyDown);

        // Limpia el evento cuando el modal se desmonta
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [cerrarModal]); // Se asegura de que useEffect solo dependa de cerrarModal

    
   
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
