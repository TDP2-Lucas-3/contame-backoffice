import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const getIncidents = async () => {
  const url = `${BACKEND_URL}incident/`;
  return await axios.get(url);
};

const getUsers = async () => {
  const url = `${BACKEND_URL}user/`;
  return await axios.get(url);
};

export {getIncidents, getUsers};
