import axios from "axios";


const getIncidents = (setData) => {
    axios.get(process.env.REACT_APP_BACKEND_URL).then((response) =>
    {setData(response.data)});
}


export {
    getIncidents
}