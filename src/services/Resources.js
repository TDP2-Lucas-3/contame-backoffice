import {useCallback, useEffect, useState} from 'react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export class Resources {
  constructor(client) {
    this.client = client;
  }

  async incidents() {
    const url = `${BACKEND_URL}incident/`;
    const response = await this.client.get(url);
    return response.data;
  }

  async users() {
    const url = `${BACKEND_URL}user/`;
    const response = await this.client.get(url);
    return response.data;
  }

  async incident(id) {
    const url = `${BACKEND_URL}incident/${id}`;
    const response = await this.client.get(url);
    return response.data;
  }

  async comments(id) {
    const url = `${BACKEND_URL}incident/${id}/comment`;
    const response = await this.client.get(url);
    return response.data;
  }

  async categories() {
    const url = `${BACKEND_URL}incident/category/`;
    const response = await this.client.get(url);
    return response.data;
  }
}

export const useGetResource = (fetchResource) => {
  const callback = useCallback(fetchResource, []);
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const resource = await callback();
      setData(() => resource);
    })();
  }, [callback]);
  return data;
};
