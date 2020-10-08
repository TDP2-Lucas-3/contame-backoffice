import React from 'react';
import MaterialTable from "material-table";

export const Table = () => {

    const data=[
        {title: 'Incidencia 1', description:'Descripcion 1', location:'Ubicacion 1', attachments:'N/A'},
        {title: 'Incidencia 2', description:'Descripcion 2', location:'Ubicacion 2', attachments:'N/A'},
        {title: 'Incidencia 3', description:'Descripcion 3', location:'Ubicacion 3', attachments:'N/A'},
    ]

    const columns = [
        {
            title:'Titulo', field: 'title'
        },
        {
            title:'Descripcion', field: 'description'
        },
        {
            title:'Adjuntos', field: 'attachments'
        },
    ]

    return (<div>
        <MaterialTable title="Incidencias"
                       data={data}
                       columns={columns}
                       options={{
                           selection:true
                       }}
                       actions={[
                           {
                               icon: 'delete',
                               tooltip: 'Borrar Incidencia'
                           }
                       ]}
        />
    </div>)
}