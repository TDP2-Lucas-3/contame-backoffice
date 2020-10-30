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
}
