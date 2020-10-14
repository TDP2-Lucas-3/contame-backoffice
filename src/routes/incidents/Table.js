import React from 'react';
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";

const render = (row) => {
    return (
        <div>

            {
                row.images.length > 0?
                row.images.map((image, index) => {
                    return (
                        <a href={image} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            {`${++index} `}
                        </a>
                    )
                }):"N/A"
            }
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
                render(row)
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
        }
    }

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
            components={components}
        />
    </div>);
}

export {
    Table
}