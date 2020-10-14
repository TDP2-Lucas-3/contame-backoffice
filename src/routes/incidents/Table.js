import React from 'react';
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";

const foo = (row) => {
    return (
        <div>
            <a href={row.images[0]} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                {!!(row.images[0])?"1    ":"N/A"}
            </a>
            <a href={row.images[1]} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                {!!(row.images[1])?"2    ":""}
            </a>
            <a href={row.images[2]} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                {!!(row.images[2])?"3    ":""}
            </a>
            <a href={row.images[3]} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                {!!(row.images[3])?"4    ":""}
            </a>
            <a href={row.images[4]} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                {!!(row.images[4])?"5    ":""}
            </a>
         </div>
        )
}

const Table = (props) => {

    const columns = [
        {
            title: 'Titulo', field: 'title'
        },
        {
            title: 'Categoria', field: 'category.name'
        },
        {
            title: 'Descripcion', field: 'description'
        },
        {
            title: 'Latitud', field: 'lat'
        },
        {
            title: 'Longitud', field: 'lon'
        },
        {
            title: 'Fecha de reporte', field: 'creationDate', type:'date'
        },
        {
            title: 'Fecha ultima actualizacion', field: 'updateDate', type:'date'
        },
        {
            title: 'Fecha de cierre', field: 'completeDate', type:'date', emptyValue: '-'
        },
        {
            title: 'Imagenes', field: 'images',
            render: row =>
                foo(row)
        }
    ];

    const options = {
        selection: false,
        showTitle: false,
        headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            fontSize: '14pt',
        },
        actionsColumnIndex: -1
    }

    const localization = {
        toolbar: {
            searchPlaceholder: "Buscar"
        },
        pagination: {
            labelDisplayedRows: '{from}-{to} de {count}',
            labelRowsSelect: 'filas'
        },
        header: {
            actions: 'Acciones'
        }
    }

    const actions = [
        {
            icon: 'edit',
            tooltip: 'Editar',
            onClick: (event, rowData) => {
                // Do save operation
            }
        },
    ]

    const components = {
        Action: props => (
            <Button
                onClick={event => props.action.onClick(event, props.data)}
                color="primary"
                style={{ textTransform: "none" }}
                size="small"
            >
                Ver detalle
            </Button>
        )
    }


    return (<div>
        <MaterialTable
            title="Incidencias"
            data={props.data}
            columns={columns}
            options={options}
            localization={localization}
            actions={actions}
            components={components}
        />
    </div>);
}

export {
    Table
}