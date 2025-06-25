import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  
  const rutasPublicas = ['/auth/register', '/auth/login'];

  const esRutaPrivada = !rutasPublicas.some((ruta) => config.url.includes(ruta));
  
  if (token && esRutaPrivada) {
    config.headers['x-auth-token'] = token;
  }

  return config;
}, (error) => Promise.reject(error));

export default api;
