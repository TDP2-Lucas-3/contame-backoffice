import React from "react";
import axios from 'axios'


function Incidents() {
    const url = 'https://cors-anywhere.herokuapp.com/https://contame.herokuapp.com/contame/report';
    axios.get(url).then((response) => {console.log(response.data);});
    
    return (
        <h1>Aca van los incidentes</h1>
    )
}

export {
    Incidents
}