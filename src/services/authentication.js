import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const signIn = async (email, password) => {
  const url = `${BACKEND_URL}login/`;
  return await axios.post(url, {
    email,
    password,
  });
};
