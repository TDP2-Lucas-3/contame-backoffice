import axios from "axios";


const getIncidents = async () => {
    const response = await axios.get(process.env.REACT_APP_BACKEND_URL);
    return response;
}


export {
    getIncidents
}