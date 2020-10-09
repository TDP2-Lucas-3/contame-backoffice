import React from "react";
import axios from 'axios'
import {Table} from './incidents/table';


function Incidents() {
    const [data, setData] = React.useState([]);
    const url = 'https://contame.herokuapp.com/contame/report';
    axios.get(url).then((response) => {setData(response.data)});

    return (
        Table(data)
    )
}

export {
    Incidents
}
