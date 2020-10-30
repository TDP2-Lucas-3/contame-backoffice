import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BACKOFFICE_EMAIL = process.env.REACT_APP_BACKOFFICE_EMAIL;
const BACKOFFICE_PASSWORD = process.env.REACT_APP_BACKOFFICE_PASSWORD;

export const signIn = async () => {
  const url = `${BACKEND_URL}login/`;
  return await axios.post(url, {
    email: BACKOFFICE_EMAIL,
    password: BACKOFFICE_PASSWORD,
  });
};
