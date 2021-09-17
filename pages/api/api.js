import axios from 'axios';

const baseUrl = () => {
  if (process.env.NODE_ENV !== 'development') {
    return 'https://www.receitaws.com.br';
  } else {
    return 'https://www.receitaws.com.br';
  }
};

const http = axios.create({
  baseURL: baseUrl(),
  timeout: 200000,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export default http;
