import axios from 'axios';
import {signIn} from './authentication';

export class HttpClient {
  constructor(token) {
    this.token = token;
  }

  async get(url) {
    return await this.request(url, 'GET');
  }

  async request(url, method, data, headers) {
    // Hack!!
    if (this.token === null) {
      const loginInfo = await signIn();
      this.token = loginInfo.data.token;
    }
    headers = headers || {};
    headers = {...headers, Authorization: `Bearer ${this.token}`};
    return await axios.request({url, method, data, headers});
  }
}
