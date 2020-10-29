import axios from 'axios';
import store from '../redux/store';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const getIncidents = async () => {
  const token = store.getState().auth.token;
  console.log(token);
  const url = `${BACKEND_URL}incident/`;
  return await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export {getIncidents};
