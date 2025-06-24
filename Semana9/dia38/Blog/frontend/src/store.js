// src/store.js

import { configureStore } from '@reduxjs/toolkit';

// Sincroniza el token inicial con localStorage
const initialState = {
  user: null,
  token: localStorage.getItem('token') || null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_TOKEN':
      // Guarda el token en localStorage también
      localStorage.setItem('token', action.payload);
      return { ...state, token: action.payload };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return { ...state, token: null, user: null };
    default:
      return state;
  }
};

// Configuración del store
const store = configureStore({
  reducer: rootReducer,  // Pasa el reducer directamente aquí
});

export default store;
