import React from 'react';
import MaterialTable from "material-table";

const Table = (props) => {

    const columns = [
        {
            title: 'ID', field: 'id'
        },
        {
            title: 'Titulo', field: 'title'
        },
        {
            title: 'Descripcion', field: 'description'
        }
    ];

    return (<div>
        <MaterialTable
            title="Incidencias"
            data={props.data}
            columns={columns}
            options={{
                selection: false,
            }}
        />
    </div>);
}

export {
    Table
}