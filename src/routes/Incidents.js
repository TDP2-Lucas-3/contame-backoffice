import React from "react";
import axios from 'axios'
import {Table} from './incidents/table';


function Incidents() {
    const url = 'https://contame.herokuapp.com/contame/report';
    axios.get(url).then((response) => {console.log(response.data);});

    return (
        <div>
            <h1>Aca van los incidentes</h1>
            <Table/>
        </div>
    )
}

export {
    Incidents
}
