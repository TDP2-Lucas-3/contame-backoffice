import axios from 'axios';
import {loginInfo} from '../index';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const getIncidents = async () => {
  const url = `${BACKEND_URL}incident/`;
  return await axios.get(url);
};

export {getIncidents};
