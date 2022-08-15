import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';

const { REACT_APP_API_URL } = process.env;

export default (httpOptions = {}): AxiosInstance => {
  const { token, baseURL, headers }: { token?: string; baseURL?: string; headers?: AxiosRequestHeaders } = httpOptions;
  const userToken = token || localStorage.token ? `Bearer ${token || localStorage.token}` : '';

  return axios.create({
    baseURL: baseURL || REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
      ...(userToken ? { Authorization: `Bearer ${userToken}` } : {}),
      ...headers,
    },
  });
};
