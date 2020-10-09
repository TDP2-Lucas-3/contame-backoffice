import React, {useEffect} from "react";
import axios from 'axios';
import {Table} from './incidents/Table';


function Incidents() {
    const [data, setData] = React.useState([]);
    const url = 'https://contame.herokuapp.com/contame/report';
    useEffect(()=>{
        axios.get(url).then((response) => {setData(response.data)});
    }, []);
    return (
        <Table data={data} />
    );
}

export {
    Incidents
}
