import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Cambia esto según tu configuración

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const fetchDashboard = async () => {
    try {
        const response = await axios.get(`${API_URL}/dashboard`, { withCredentials: true });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};