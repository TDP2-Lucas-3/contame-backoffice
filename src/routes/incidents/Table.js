import React from 'react';
import MaterialTable from "material-table";

const Table = (props) => {

    const columns = [
        {
            title: 'Titulo', field: 'title',
        },
        {
            title: 'Descripcion', field: 'description',
        },
        {
            title: 'Ubicacion', field: 'location'
        },
        {
            title: 'Imagen', field: 'image',
            render: row =>
                <a href={row.image} target="_blank" rel="noopener noreferrer">
                    {!!(row.image)?"Adjunto":"N/A"}
                </a>
        }
    ];

    return (<div>
        <MaterialTable
            title="Incidencias"
            data={props.data}
            columns={columns}
            options={{
                selection: false,
                showTitle: false,
                headerStyle: {
                    backgroundColor: '#039be5',
                    color: '#FFF',
                    fontSize: '16pt',
                },
                cellStyle: {
                    fontSize: '12pt',
                },
            }}
            localization={{
                toolbar: {
                    searchPlaceholder: "Buscar"
                },
                pagination: {
                    labelDisplayedRows: '{from}-{to} de {count}',
                    labelRowsSelect: 'filas'
                },
            }}

        />
    </div>);
}

export {
    Table
}