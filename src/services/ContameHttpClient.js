import axios from 'axios';

export class HttpClient {
  constructor(token) {
    this.token = token;
  }

  async get(url) {
    return await this.request(url, 'GET');
  }

  async request(url, method, data, headers) {
    headers = headers || {};
    headers = {...headers, Authorization: `Bearer ${this.token}`};
    return await axios.request({url, method, data, headers});
  }
}
