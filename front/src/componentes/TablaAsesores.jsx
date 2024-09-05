import React from 'react';
import '../estilos/TablaAsesores.css';

function TablaAsesores({ columnasTabla, datosTabla }) {
    return (
        <div className="tablaAsesoresContenedor">
            <table className="tablaAsesores" id="tablaAsesores">
                <thead className="cabezaTablaAsesores">
                    <tr>
                        {columnasTabla.map(columna => (
                            <th key={columna.id} id={columna.id}>
                                {columna.etiqueta}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="cuerpoTablaAsesores">
                    {datosTabla.map((row, index) => (
                        <tr className="filaTablaAsesores" key={index}>
                            {columnasTabla.map(columna => (
                                <td key={columna.id} id={columna.id}>
                                    {row[columna.id]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablaAsesores;
