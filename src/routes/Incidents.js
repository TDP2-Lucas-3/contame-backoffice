import React, {useEffect} from "react";
import axios from 'axios';
import {Table} from './incidents/Table';


function Incidents() {
    const [data, setData] = React.useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_BACKEND_URL).then((response) =>
        {setData(response.data)});
    }, []);
    return (
        <Table data={data} />
    );
}

export {
    Incidents
}
