import React from 'react';
import MaterialTable from "material-table";

export const Table = (data) => {

    const columns = [
        {
            title:'ID', field: 'id'
        },
        {
            title:'Titulo', field: 'title'
        },
        {
            title:'Descripcion', field: 'description'
        }
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