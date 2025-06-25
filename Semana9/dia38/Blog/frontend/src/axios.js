import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  
  const rutasPublicas = ['/auth/register', '/auth/login'];

  const esRutaPrivada = !rutasPublicas.some((ruta) => config.url.includes(ruta));
  
  if (token && esRutaPrivada && token.split('.').length === 3) {
    config.headers['x-auth-token'] = token;
  } else {
    delete config.headers['x-auth-token'];
  }

  return config;
}, (error) => Promise.reject(error));

export default api;
