import axios from 'axios';

// default config for axios instance
const config = {
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/'
};

const instance = axios.create(config);

const api = (axios) => {
  return {
    get: (url, config) => axios.get(url, config),
    post: (url, params, config) => axios.post(url, params, config)
  }
};

export default api(instance);