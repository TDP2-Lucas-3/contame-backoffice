import React, {useEffect} from "react";
import {Table} from './incidents/Table';
import {getIncidents} from '../services/reports'


function Incidents() {
    const [data, setData] = React.useState([]);
    useEffect(() => {
       getIncidents(setData);
    }, []);
    return (
        <Table data={data} />
    );
}

export {
    Incidents
}
